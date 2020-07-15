import { FormControl, InputLabel, MenuItem, Select, FormHelperText, Button, Snackbar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import * as fromContentData from './form-content';
import { FormSection } from './FormSection';
import { FormContent, FormSectionSubmission, Submission, VehicleType } from './types';
import { Alert, AlertTitle } from '@material-ui/lab';
import Loading from '../../components/Loading';
import { ConfirmDialog } from './ConfirmDialog';
import { SubmissionResult } from './SubmissionResult';

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
  }),
);

export function CheckList() {

  const classes = useStyles();

  const initialSubmission = (): Submission => ({
    formCode: '',
    vehicleType: 'pc' as VehicleType,
    recipientEmail: '',
    callSign: '',
    bfoNumber: '',
    odometer: 0,
    engineHours: 0,
    pumpHours: 0,
    sections: [],
    createdAt: new Date(),
  })
  const [submission, setSubmission] = useState(initialSubmission())

  const [formContent, setFormContent] = useState<FormContent | null>(null)
  useEffect(() => {

    if (typeof (fromContentData as any)[submission.vehicleType] === 'function') {
      setFormContent((fromContentData as any)[submission.vehicleType]())
    } else {
      setFormContent(fromContentData.other())
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
    console.log(submission)
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
  const handleSubmit: React.FormEventHandler = async (e) => {

    e.preventDefault();
    setConfirmDialogOpen(true);

  }

  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false)
  const handleConfirm = async (recipientEmail: string) => {

    setLoading(true);
    setConfirmDialogOpen(false);

    setSubmission({
      ...submission,
      recipientEmail,
    })

    setTimeout(() => {
      setLoading(false);
      setSubmissionResult({ code: 'Success', message: 'Email sent' });
      setSubmission(initialSubmission());
      window.scrollTo(0, 0);

      setTimeout(() => {
        setSubmissionResult(null);
      }, 4000)
    }, 1500)

  }

  return (
    <div>

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}>

        <div className={classes.generalFields}>
          <FormControl>
            <InputLabel>Vehicle Type</InputLabel>
            <Select
              value={submission.vehicleType}
              onChange={e => setSubmission({ ...submission, vehicleType: e.target.value as VehicleType })}
            >
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
          onCancel={() => setConfirmDialogOpen(false)}
          onConfirm={(e) => handleConfirm(e)} />

        {loading ? (<Loading />) : null}

        <SubmissionResult
          open={!!submissionResult}
          result={submissionResult} />

      </form>

    </div>
  );
}
