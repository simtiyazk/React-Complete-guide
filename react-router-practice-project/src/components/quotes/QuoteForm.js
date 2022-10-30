import { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const formFocusedHandler = () => {
    setIsEntering(true);
  }

  const finishedEnteringHadler = () => {
    setIsEntering(false);
  }
  return (
    <Fragment>
      {/* Prompt hook is basiaclly like an alert that prevents the unwanted routing tranistion happens such as pressing back button or any other link within page */}
      <Prompt when={isEntering} message={()=> 'Are you sure wants to leave the page?, all data would be lost!!'} />
      <Card>
        <form onFocus={formFocusedHandler} className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishedEnteringHadler} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
