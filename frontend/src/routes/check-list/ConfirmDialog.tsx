import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, List, ListItem, ListItemSecondaryAction, IconButton, AppBar, Theme, makeStyles, createStyles, Toolbar, Typography, ListItemIcon } from '@material-ui/core';
import { Delete, Close, Inbox, Email } from '@material-ui/icons';
import React, { FormEvent, ChangeEvent, useState } from 'react';
import { Submission } from './types';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    content: {
      paddingTop: theme.spacing(4),
    },
    list: {
      marginLeft: 0 - theme.spacing(2),
      marginRight: 0 - theme.spacing(2),
      width: `calc(100% + ${theme.spacing(4)})`,
    }
  }),
);

interface Props {
  open: boolean
  submission: Submission
  onChange: (submission: Submission) => any
  onConfirm: () => any
  onCancel: () => any
}

export function ConfirmDialog({ open, submission, onChange, onConfirm, onCancel }: Props) {

  const classes = useStyles();
  const { register, errors, handleSubmit: validateBeforeSubmit } = useForm();

  const handleRecipientChange = (newValue: string, index: number) => {

    const localRecipients = [...submission.recipients]
    localRecipients.splice(index, 1, newValue)

    onChange({
      ...submission,
      recipients: localRecipients,
    })

  }

  const addRecipient = () => {
    onChange({
      ...submission,
      recipients: [
        ...submission.recipients,
        '',
      ],
    })
  }

  const removeRecipient = (index: number) => {

    const localRecipients = [...submission.recipients]
    localRecipients.splice(index, 1)
    onChange({
      ...submission,
      recipients: localRecipients,
    })

  }

  return (
    <Dialog fullScreen open={open} onClose={e => onCancel()}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={e => onCancel()} aria-label="close">
            <Close />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Send to:
          </Typography>
          <Button form="recipientsForm" type="submit" onClick={validateBeforeSubmit(onConfirm)} color="inherit">
            Send
          </Button>
        </Toolbar>
      </AppBar>
      <DialogContent className={classes.content}>

        <DialogContentText>
          Enter up to three email addresses below:
        </DialogContentText>
        <form
          id="recipientsForm"
          onSubmit={validateBeforeSubmit(onConfirm)}
          noValidate>
          <List className={classes.list}>
            {
              submission.recipients.map((recipient, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <Email />
                  </ListItemIcon>
                  <TextField
                    name={`recipients[${i}]`}
                    autoFocus
                    margin="dense"
                    label={ i === 0 ? 'To' : 'Cc'}
                    type="email"
                    error={!!errors[`recipients[${i}]`]}
                    helperText={errors[`recipients[${i}]`]?.message}
                    inputRef={register({
                      required: i === 0 ? 'This field is required' : false,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    value={recipient}
                    required={i === 0}
                    onChange={e => handleRecipientChange(e.target.value, i)}
                    fullWidth
                  />

                  <ListItemSecondaryAction>
                    <IconButton disabled={submission.recipients.length === 1} edge="end" onClick={e => removeRecipient(i)}>
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
            }
          </List>
          <Button disabled={submission.recipients.length >= 3} onClick={e => addRecipient()}>
            + Add
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
