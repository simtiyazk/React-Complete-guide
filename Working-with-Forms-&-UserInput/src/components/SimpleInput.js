import useInput from "../hooks/use-Input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputhasError,
    isValid: enteredNameisValid,
    valuecHangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    resetInputs,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailInputhasError,
    isValid: enteredEmailisValid,
    valuecHangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(value => value.includes('@'));
  // // const nameInputRef = useRef()
  // const [enteredName, setEnteredname] = useState('');
  // // const [isValidinput, setIsValidInput] = useState(false);
  // const [enterednameTouched, setEnterednameTouched] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState('');
  // // const [isValidinput, setIsValidInput] = useState(false);
  // const [enteredemailTouched, setEnteredemailTouched] = useState(false);

  // const enteredNameisValid = enteredName.trim() !== '';
  // const nameInputisInvalid = !enteredNameisValid && enterednameTouched;

  // const enteredEmailisValid = enteredEmail.includes('@');
  // const emailInputisInvalid = !enteredEmailisValid && enteredemailTouched;

  let formisValid = false;

  if(enteredNameisValid && enteredEmailisValid) {
    formisValid = true;
  }
  // useEffect(() => {
  //   if(isValidinput) {
  //     console.log('Name input is invalid')
  //   }

  // }, [isValidinput]);

  // const nameInputHandler = (event) => {
  //   setEnteredname(event.target.value)

  //   // if(event.target.value.trim() !== '') {
  //   //   setIsValidInput(true);
  //   // }
  // }

  // const emailInputHandler = (event) => {
  //   setEnteredEmail(event.target.value)

  //   // if(event.target.value.trim() !== '') {
  //   //   setIsValidInput(true);
  //   // }
  // }

  // const blurInputHandler = (event) => {
  //   setEnterednameTouched(true);

  //   // if(enteredName.trim() === '') {
  //   //   setIsValidInput(false);
  //   // }
  // }

  // const bluremailInputHandler = (event) => {
  //   //setEnterednameTouched(true);

  //   // if(enteredName.trim() === '') {
  //   //   setIsValidInput(false);
  //   // }
  // }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // setEnterednameTouched(true);

    if(!enteredNameisValid) {
      // setIsValidInput(false);
      return;
    }
    console.log(enteredName); 
    // setIsValidInput(true)

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
    // setEnteredname('');
    // setEnterednameTouched(false);

    resetInputs();

    // setEnteredEmail('');
    // setEnteredemailTouched(false)
  }

  const isInValidClasses = nameInputhasError ? 'form-control invalid' : 'form-control';
  const isemailInValidClasses = emailInputhasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={isInValidClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        //  ref={nameInputRef} 
         type='text' 
         id='name' 
         value={enteredName} 
         onChange={nameChangedHandler} 
         onBlur={nameBlurHandler} />
      </div>
      {nameInputhasError && <p className="error-text">Name cannot be empty.</p>}
      <div className={isemailInValidClasses}>
        <label htmlFor='email'>Email</label>
        <input 
        //  ref={nameInputRef} 
         type='email' 
         id='email' 
         value={enteredEmail} 
         onChange={emailChangedHandler} 
         onBlur={emailBlurHandler} />
      </div>
      {emailInputhasError && <p className="error-text">Please enter a valid email.</p>}
      <div className="form-actions">
        <button disabled={!formisValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
