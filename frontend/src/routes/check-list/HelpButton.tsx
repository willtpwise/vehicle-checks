import React, { useState } from 'react';
import { Drawer, Typography, IconButton, Box } from '@material-ui/core';
import { Help } from '@material-ui/icons';

interface Props {
  label: string
  helpText: string
}

export function HelpButton({ label, helpText }: Props) {

  const [dialogOpen, setDialogOpen] = useState(false)

  const handleButtonClick: React.MouseEventHandler = (e) => {

    e.stopPropagation();
    setDialogOpen(true);

  }

  if (!helpText) {
    return null
  }

  return (
    <div>

      <IconButton onClick={handleButtonClick}>
        <Help />
      </IconButton>

      <Drawer
        ModalProps={{
          container: () => document.querySelector('body'),
        }}
        anchor="bottom"
        open={dialogOpen}
        onClose={e => setDialogOpen(false)}>

          <Box component="span" m={2}>
            <Typography variant="h5" component="h2">
              {label}
            </Typography>
            <br></br>
            <Typography variant="body1">
              {helpText}
            </Typography>
          </Box>
      </Drawer>

    </div>
  );
}
