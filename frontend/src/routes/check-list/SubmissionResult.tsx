import React, { useMemo } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

interface Props {
  open: boolean
  result: {
    code: string
    message: string
  } | null
}

export function SubmissionResult({ open, result }: Props) {

  const { severity, title, message } = useMemo(() => {

    if (result?.code === 'Success') {
      return {
        severity: 'success',
        title: 'All done!',
        message: 'Your submission has been successfully sent.',
      }
    }

    return {
      severity: 'error',
      title: 'Uh oh! Your submission could not be sent',
      message: result?.message,
    }

  }, [result])

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={!!open}
      autoHideDuration={4000}>
      <Alert severity={severity as any}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );
}
