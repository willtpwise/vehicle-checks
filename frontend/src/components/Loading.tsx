import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 100000,
      width: '100vw',
      height: '100vh',
      background: 'rgba(255,255,255,0.8)',
      '& > *': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
  }),
);

export default function Loading() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <CircularProgress />
      </div>
    </div>
  );

}
