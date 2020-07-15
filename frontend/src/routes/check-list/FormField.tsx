import { createStyles, IconButton, makeStyles, Theme, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, TextField } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { CheckCircleOutline, Help, HighlightOff, RemoveCircleOutline, CheckCircle, ThumbUp, ThumbDown } from '@material-ui/icons';
import React from 'react';
import { FormContentField, FormFieldSubmission } from './types';
import { HelpButton } from './HelpButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      marginBottom: theme.spacing(2),
    },
    helpButton: {

    },
    label: {
      flexGrow: 2,
      margin: 'auto 0',
      '& span': {
        fontWeight: 'bold',
      },
    },
    toggleButton: {

    },
    notApplicableIcon: {
      fontSize: '21px',
    },
    textFieldInput: {
      flexGrow: 2,
    },
    textFieldListItem: {
      paddingRight: theme.spacing(3),
    }
  }),
);

interface Props {
  content: FormContentField
  submission: FormFieldSubmission
  onChange: (newValue: any) => any
}

export function FormField({ content, submission, onChange }: Props) {

  const classes = useStyles();

  const handlePassOrFailToggle = () => {

    const options = ['pass', 'fail', 'n/a']
    const index = options.indexOf(submission.value)

    onChange({
      ...submission,
      value: options[index + 1] || options[0],
    })

  }

  const openInfoDialog: React.MouseEventHandler = (e) => {
    e.stopPropagation()
  }

  if (content.type === 'text') {
    return (
      <ListItem className={classes.textFieldListItem}>
        <ListItemAvatar>
          <HelpButton label={content.label} helpText={content.helpText!} />
        </ListItemAvatar>
        <TextField
          className={classes.textFieldInput}
          label={content.label}
          value={submission.value} />
      </ListItem>
    )
  }

  return (
    <ListItem button onClick={e => handlePassOrFailToggle()}>
      <ListItemAvatar>
        <HelpButton label={content.label} helpText={content.helpText!} />
      </ListItemAvatar>
      <ListItemText primary={content.label} />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={e => handlePassOrFailToggle()}>
          <PassOrFailIcon value={submission.value} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )

}



function PassOrFailIcon({ value }: { value: 'pass' | 'fail' | 'n/a' }) {

  const classes = useStyles();

  if (value === 'pass') {
    return (<ThumbUp style={{ color: green[500] }}></ThumbUp>)
  }

  if (value === 'fail') {
    return (<ThumbDown color="secondary"></ThumbDown>)
  }

  return (<span className={classes.notApplicableIcon}>n/a</span>)

}
