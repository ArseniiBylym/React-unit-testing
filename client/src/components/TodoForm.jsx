import React, {useEffect} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {Field, reduxForm, initialize} from 'redux-form';
import {connect} from 'react-redux';

const useStyles = () =>
  makeStyles(theme =>
    createStyles({
      root: {
        width: '300px',
      },
      textField: {
        width: '100%',
      },
    }),
  )();

const validate = values => {
  const errors = {};
  const requiredFields = ['title', 'text'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Field is required';
    }
  });
  return errors;
};

const renderTextField = ({label, input, meta: {touched, invalid, error}, ...custom}) => {
  return (
    <TextField
      label={label}
      error={touched && invalid}
      helperText={touched && invalid && error}
      {...input}
      {...custom}
    />
  );
};

let TodoForm = ({todo, handleEnterKey, initForm, ...rest}) => {
  const styles = useStyles();
  useEffect(() => {
    todo && initForm({title: todo.title, text: todo.text})
  }, [])

  return (
    <form className={styles.root}>
      <Field
        name="title"
        component={renderTextField}
        label="Title"
        margin="normal"
        autoFocus
        fullWidth
        onKeyUp={handleEnterKey}
      />
      <Field name="text" component={renderTextField} label="Text" margin="normal" fullWidth onKeyUp={handleEnterKey} />
    </form>
  );
};

TodoForm = reduxForm({
  form: 'todo',
  validate,
})(TodoForm);


const mapDispatchToProps = dispatch => ({
  initForm: (data) => dispatch(initialize('todo', data))
})

export default connect(null, mapDispatchToProps)(TodoForm);
