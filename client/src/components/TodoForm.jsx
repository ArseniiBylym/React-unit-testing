import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const useStyles = () =>
  makeStyles(theme =>
    createStyles({
      root: {
        width: '300px',
      },
    }),
  )();

const TodoForm = ({form, handleChange, handleKeyUp}) => {
  const styles = useStyles();

  return (
    <form className={styles.root}>
      <TextField
        label="Title"
        className={styles.textField}
        value={form.title}
        onChange={handleChange('title')}
        onKeyUp={handleKeyUp}
        margin="normal"
        fullWidth
        autoFocus
      />
      <TextField
        label="Text"
        className={styles.textField}
        value={form.text}
        onChange={handleChange('text')}
        onKeyUp={handleKeyUp}
        margin="normal"
        fullWidth
      />
    </form>
  );
};

TodoForm.propTypes = {
  form: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
  }),
  handleChange: PropTypes.func,
  handleKeyUp: PropTypes.func,
};

export default TodoForm;
