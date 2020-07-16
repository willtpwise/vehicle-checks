import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../components/Loading';
import { createSubmission } from '../../services/createSubmission';
import { ConfirmDialog } from './ConfirmDialog';
import * as formContentData from './form-content';
import { FormSection } from './FormSection';
import { SubmissionResult } from './SubmissionResult';
import { FormContent, FormSectionSubmission, Submission, VehicleType } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    generalFields: {
      padding: theme.spacing(2),
      '& > *': {
        width: '100%',
        marginBottom: theme.spacing(2),
      },
    },
    submitRow: {
      padding: theme.spacing(2),
      textAlign: 'right',
    },
    helpText: {
      marginTop: 0 - theme.spacing(2),
    },
  }),
);

const RECIPIENT_STORAGE_KEY = 'vehicleChecksRecipients.v1'
const setRegularRecipients = (recipients: string[]) => {
  try {
    localStorage.setItem(RECIPIENT_STORAGE_KEY, JSON.stringify(recipients))
  } catch (err) {
    console.error(err)
  }
}
const getRegularRecipients = (): string[] => {
  try {
    const result = localStorage.getItem(RECIPIENT_STORAGE_KEY)
    return result ? JSON.parse(result) : []
  } catch (err) {
    console.error(err)
    return []
  }
}

export function CheckList() {

  const classes = useStyles();
  const { register, errors, handleSubmit: validateBeforeSubmit } = useForm();

  const initialSubmission = (): Submission => ({
    formCode: '',
    vehicleType: '' as VehicleType,
    recipients: getRegularRecipients(),
    sections: [],
    createdAt: new Date(),
    createdBy: (Auth as any).user.attributes.email,
  })
  const [submission, setSubmission] = useState(initialSubmission())


  const [formContent, setFormContent] = useState<FormContent | null>(null)
  useEffect(() => {

    if (typeof (formContentData as any)[submission.vehicleType] === 'function') {
      setFormContent((formContentData as any)[submission.vehicleType]())
    } else {
      setFormContent(formContentData.other())
    }

  }, [submission.vehicleType])

  useEffect(() => {

    if (!formContent) return

    setSubmission({
      ...submission,
      sections: formContent!.sections.map(section => {
        return {
          label: section.label,
          fields: section.fields.map(field => {

            const fieldType = field.type || 'passOrFail'

            return {
              label: field.label,
              value: fieldType === 'passOrFail' ? 'pass' : null,
            }
          })
        }
      })
    })
  }, [formContent?.sections])

  const handleFormSectionChange = (payload: FormSectionSubmission, index: number) => {

    const localSubmission = { ...submission }

    localSubmission.sections.splice(index, 1, payload)

    setSubmission(localSubmission)
  }

  const vehicleTypeOptions = [
    { label: 'PC', value: 'pc' },
    { label: 'Cat 1', value: 'cat1' },
    { label: 'Other', value: 'other' },
  ]

  const [loading, setLoading] = useState(false)
  const [submissionResult, setSubmissionResult] = useState<{ code: string, message: string } | null>(null)
  const handleSubmit = async () => {

    setConfirmDialogOpen(true);

  }

  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false)
  const handleConfirm = async () => {

    setLoading(true);
    setConfirmDialogOpen(false);

    try {

      await createSubmission(submission)

      setLoading(false);
      setRegularRecipients(submission.recipients);
      setSubmissionResult({ code: 'Success', message: 'Email sent' });
      setSubmission(initialSubmission());
      window.scrollTo(0, 0);

      setTimeout(() => {
        setSubmissionResult(null);
      }, 4000)

    } catch (err) {

      setLoading(false);
      setSubmissionResult(err);
      setTimeout(() => {
        setSubmissionResult(null);
      }, 4000)

    }

  }

  const handleSubmitErrors = () => {

    const firstInvalidField = document.querySelector('.Mui-error');
    if (!firstInvalidField) {
      return
    }

    const { top } = firstInvalidField.getBoundingClientRect();

    window.scrollTo(0, (top + window.scrollY) - 60);

  }

  return (
    <div>

      <form
        className={classes.root}
        onSubmit={validateBeforeSubmit(handleSubmit)}
        noValidate>

        <div className={classes.generalFields}>
          <FormControl>
            <InputLabel>Vehicle Type</InputLabel>
            <Select
              value={submission.vehicleType}
              onChange={e => setSubmission({ ...submission, vehicleType: e.target.value as VehicleType })}>

              {vehicleTypeOptions.map(({ label, value }) => (
                <MenuItem value={value} key={value}>{label}</MenuItem>
              ))}

            </Select>
            <FormHelperText>Select the type of vehicle you're checking.</FormHelperText>
          </FormControl>

        </div>

        {
          submission.vehicleType
            ? (formContent?.sections || []).map((section, i) => {

              if (typeof submission?.sections[i] === 'undefined') {
                return null
              }

              return (
                <FormSection
                  key={i}
                  register={register}
                  errors={errors}
                  content={section}
                  submission={submission.sections[i]}
                  onChange={e => handleFormSectionChange(e, i)} />
              )

            })
            : null
        }

        <div className={classes.submitRow}>
          {
            submission.vehicleType
              ? (
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="large"
                  disabled={loading}>
                  Submit
                </Button>
              )
              : null
          }
        </div>

        <ConfirmDialog
          open={confirmDialogOpen}
          submission={submission}
          onCancel={() => setConfirmDialogOpen(false)}
          onChange={e => setSubmission(e)}
          onConfirm={() => handleConfirm()} />

        {loading ? (<Loading />) : null}

        <SubmissionResult
          open={!!submissionResult}
          result={submissionResult} />

      </form>

    </div>
  );
}
