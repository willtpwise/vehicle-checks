import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import React, { FormEvent, ChangeEvent, useState } from 'react';

interface Props {
  open: boolean
  onConfirm: (recipientEmail: string) => any
  onCancel: () => any
}

export function ConfirmDialog({ open, onConfirm, onCancel }: Props) {

  const [recipientEmail, setRecipientEmail] = useState('');

  const handleConfirm = (e: FormEvent | MouseEvent) => {

    e.preventDefault();
    onConfirm(recipientEmail);

  }

  return (
    <Dialog open={open} onClose={e => onCancel()}>
      <DialogTitle>
        Select your district:
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter an email address below to send this to:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="To"
          type="email"
          value={recipientEmail}
          onChange={(e: any) => setRecipientEmail(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={e => onCancel()} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
