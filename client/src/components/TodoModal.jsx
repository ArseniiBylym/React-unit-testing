import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {initialize} from 'redux-form';
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
  const {title, button, buttonSize, todo, iconColor, handleSubmit, isInvalid, formValues, initForm} = props;
  const styles = useStyles();
  const [open, setOpen] = useState(false);

  const handleEnterKey = e => {
    e.persist();
    if (e.keyCode == '13') {
      !isInvalid && handleConfirm();
    }
  };

  const handleConfirm = () => {
    setOpen(false);
    handleSubmit({
      ...formValues,
      _id: todo && todo._id
    });
  };

  const handleClose = () => {
    setOpen(false);
    initForm({title: '', text: ''});
  };

  return (
    <div className={styles.root}>
      <Fab color={iconColor} size={buttonSize} aria-label="add" className={styles.button} onClick={() => setOpen(true)}>
        {button}
      </Fab>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <TodoForm  todo={todo} handleEnterKey={handleEnterKey}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary" variant="contained" disabled={isInvalid}>
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
  isInvalid: PropTypes.bool
};

const mapStateToProps = state => ({
  isInvalid: state.form.todo && !!state.form.todo.syncErrors,
  formValues: state.form.todo && state.form.todo.values
})

const mapDispatchToProps = dispatch => ({
  initForm: (data) => dispatch(initialize('todo', data))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoModal);
