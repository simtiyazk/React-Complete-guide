import { useState } from "react";

const useInput = (validateValue) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouced, setIsTouched] = useState(false);

    const valueisValid = validateValue(enteredValue);
    const hasError = !valueisValid && isTouced;

    const valuecHangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }

    const resetInputs = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        hasError,
        isValid: valueisValid,
        valuecHangeHandler,
        inputBlurHandler,
        resetInputs,
    }
}

export default useInput;