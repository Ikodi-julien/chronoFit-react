import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import './appcomment.scss';

function AppComment({open, setOpen, text}) {

  return (
    <Dialog open={open}>
      <DialogTitle id="simple-dialog-title" >Message de l'application :</DialogTitle>
      <div className="appcomment__text">
        {text}
      </div>
      <Button 
        variant="outlined"
        color="primary"
        style={{maxWidth: 100, margin: 'auto', marginBottom: 20}}
        onClick={() => setOpen(false)}
        >
        OK
      </Button>
    </Dialog>
  );
}

AppComment.propTypes = {
  open: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default AppComment;