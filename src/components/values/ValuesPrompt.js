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
    valueOneWhy: "",
    valueTwoWhy: "",
    valueThreeWhy: "",
}

const ValuesPrompt = () => {
    const [values, setValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState(initialErrors)
    const [disabled, setDisabled] = useState(true)

    const onInputChange = (evt) => {
        const { name } = evt.target;
        const { value } = evt.target;

        //add yup validation here
    }

    const userValues = {
        valuesList: values.valuesList,
        valueOne: values.valueOne,
        valueTwo: values.valueTwo,
        valueThree: values.valueThree,
        valueOneWhy: values.valueOneWhy.trim(),
        valueTwoWhy: values.valueTwoWhy.trim(),
        valueThreeWhy: values.valueThreeWhy.trim(),
    }


    return (
        <div>
            <h2>Value Prompt</h2>
            <p>Ponam in culpa idiota aliis pravitatis. Principium ponere culpam in se justum praeceptum.
            Neque improperes et aliis qui non perfecte ipse docuit.
        Quod Enchiridion Epictetus stoici scripsit. Rodrigo Abela et Technologiae</p>
            <select name="valueOne" value={values.valueOne} onChange={onInputChange}>
                <option value="">{values.valuesList}</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="extra-large">Extra Large</option>
            </select>
        </div>
    )
}

export default ValuesPrompt