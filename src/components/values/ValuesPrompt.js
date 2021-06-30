import React, { useState, useEffect } from "react";
import "../../App.css";


const initialValues = {
    valueOne: "",
    valueTwo: "",
    valueThree: "",
    valueOneWhy: "",
    valueTwoWhy: "",
    valueThreeWhy: "",
}

const initialErrors = {
    valueOne: "",
    valueTwo: "",
    valueThree: "",
    valueOneWhy: "",
    valueTwoWhy: "",
    valueThreeWhy: "",
}

const ValuesPrompt = () => {
    const [values, setValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState(initialErrors)
    const [disabled, setDisabled] = useState(true)
    const [userValues, setUserValues] = useState([])

    // useEffect to get user values from BE, userValues state to change the user values here
    
    const onInputChange = (evt) => {
        const { name } = evt.target;
        const { value } = evt.target;

        //save the value to the approriate state value here
        //add yup validation here for dropdown to only allow unique values
    }


    //get request on values prompt, object values with array, render select with options based on array 

    // const userValues = {
    //     valuesList: values.valuesList,
    //     valueOne: values.valueOne,
    //     valueTwo: values.valueTwo,
    //     valueThree: values.valueThree,
    //     valueOneWhy: values.valueOneWhy.trim(),
    //     valueTwoWhy: values.valueTwoWhy.trim(),
    //     valueThreeWhy: values.valueThreeWhy.trim(),
    // }


    return (
        <div>
            <form>
                <h2>Values Prompt</h2>
                <p>Ponam in culpa idiota aliis pravitatis. Principium ponere culpam in se justum praeceptum.
                    Neque improperes et aliis qui non perfecte ipse docuit.Quod Enchiridion Epictetus stoici scripsit. Rodrigo Abela et Technologiae</p>
                {/* value one drop down */}
                <select name="valueOne" value={values.valueOne} onChange={onInputChange}>
                    <option value="">Value One </option>
                    <option value={values.valueOne}>{values.valuesList}</option>
                    <option value={values.valueTwo}>{values.valuesList}</option>
                    <option value={values.valueThree}>{values.valuesList}</option>
                </select>

                <textarea
                    placeholder="Why do you choose this prompt?"
                >
                </textarea>

                {/* value two drop down */}
                <select name="valueTwo" value={values.valueOne} onChange={onInputChange}>
                    <option value={values.valueOne}>{values.valuesList}</option>
                    <option value={values.valueTwo}>{values.valuesList}</option>
                    <option value={values.valueThree}>{values.valuesList}</option>
                </select>

                <textarea
                    placeholder="Why do you choose this prompt?"
                >
                </textarea>

                {/* value three drop down  */}
                <select name="valueThree" value={values.valueOne} onChange={onInputChange}>
                    <option value={values.valueOne}>{values.valuesList}</option>
                    <option value={values.valueTwo}>{values.valuesList}</option>
                    <option value={values.valueThree}>{values.valuesList}</option>
                </select>

                <textarea
                    placeholder="Why do you choose this prompt?"
                >
                </textarea>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default ValuesPrompt