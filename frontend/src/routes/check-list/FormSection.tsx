import React from 'react';
import { FormContentSection, FormFieldSubmission, FormSectionSubmission } from './types';
import { Typography, Theme, makeStyles, createStyles, List, ListSubheader } from '@material-ui/core';
import { FormField } from './FormField';
import { SignalCellularNull } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      '& > *': {
        width: '100%',
        marginBottom: theme.spacing(2),
      },
    },
    listSubheader: {
      background: '#fff',
    }
  }),
);

interface Props {
  register: any
  errors: any
  content: FormContentSection
  submission: FormSectionSubmission
  onChange: (submission: FormSectionSubmission) => any
}

export function FormSection({content, register, errors, submission, onChange}: Props) {

  const classes = useStyles();

  const handleFieldChange = (field: FormFieldSubmission, index: number) => {

    const localSubmission = { ...submission }

    localSubmission.fields.splice(index, 1, field)

    onChange(localSubmission)

  }

  return (
    <div className={classes.root}>
      <List
        subheader={
          <ListSubheader className={classes.listSubheader}>
            {content.label}
          </ListSubheader>
        }>
        {content.fields.map((field, i) => {

          if (typeof submission?.fields[i] === 'undefined') {
            return null
          }

          return (
            <FormField
              key={i}
              register={register}
              errors={errors}
              content={field}
              submission={submission?.fields[i]}
              onChange={e => handleFieldChange(e, i)} />
          )

        })}
      </List>
    </div>
  );
}
