import useInput from "../hooks/use-Input";

const isNotEmpty = value => value.trim() !== '';
const isEmailValid = value => value.includes('@');

const BasicForm = (props) => {
  const {
    value: firstnameValue,
    isValid: firstnameIsValid,
    hasError: firstnamehasError,
    valuecHangeHandler: firstnameChangeHandler,
    inputBlurHandler: firstnameBlurHandler,
    resetInputs: resetFirstname,
  } = useInput(isNotEmpty);

  const {
    value: lastnameValue,
    isValid: lastnameIsValid,
    hasError: lastnamehasError,
    valuecHangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    resetInputs: resetlastname,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailhasError,
    valuecHangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInputs: resetemail,
  } = useInput(isEmailValid);

  let formIsValid = false;

  if(firstnameIsValid && lastnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    if(!formIsValid) {
      return;
    }

    console.log('Form Submitted!')
    console.log(firstnameValue, lastnameValue, emailValue);

    resetFirstname('');
    resetlastname('')
    resetemail('')
  }
  const firstnameClasses = firstnamehasError ? 'form-control invalid' : 'form-control';
  const lastnameClasses = lastnamehasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailhasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstnameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'
          value={firstnameValue} 
          onChange={firstnameChangeHandler}
          onBlur={firstnameBlurHandler}
          />
          {firstnamehasError && <p className="error-text">Please enter first name.</p>}
        </div>
        <div className={lastnameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'
          value={lastnameValue} 
          onChange={lastnameChangeHandler}
          onBlur={lastnameBlurHandler} 
          />
          {lastnamehasError && <p className="error-text">Please enter last name.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' 
        value={emailValue} 
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        />
        {emailhasError && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
