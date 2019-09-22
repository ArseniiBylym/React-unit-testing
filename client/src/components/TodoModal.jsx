import React, {useState, useEffect} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import {TodoForm} from '.';

const useStyles = () =>
  makeStyles(theme =>
    createStyles({
      root: {},
      button: {
        margin: theme.spacing(1),
        fontSize: '1rem',
      },
    }),
  )();

const TodoModal = props => {
  const {title, button, buttonSize, todo, iconColor, handleSubmit} = props;
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({title: '', text: ''});

  useEffect(() => {
    todo && setForm({...todo});
  }, [open]);

  const handleChange = type => e => {
    e.persist();
    setForm(form => ({
      ...form,
      [type]: e.target.value,
    }));
  };

  const handleEnterKey = e => {
    e.persist();
    if (e.keyCode == '13') {
      form.title && form.text && handleConfirm();
    }
  };

  const handleConfirm = () => {
    setOpen(false);
    handleSubmit(form);
  };

  const handleClose = () => {
    setOpen(false);
    setForm({title: '', text: ''});
  };

  return (
    <div className={styles.root}>
      <Fab color={iconColor} size={buttonSize} aria-label="add" className={styles.button} onClick={() => setOpen(true)}>
        {button}
      </Fab>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <TodoForm form={form} handleChange={handleChange} handleKeyUp={handleEnterKey} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary" variant="contained" disabled={!form.title || !form.text}>
            {todo ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

TodoModal.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.element.isRequired,
  buttonSize: PropTypes.string,
  todo: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
  }),
  iconColor: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default TodoModal;
