import React, { useState, useEffect } from "react";
import "../../App.css";
import { useHistory } from "react-router-dom";
import ValuesInput from "./ValuesInput";

const initialValues = {
    valuesList: {
        adventure: false,
        balance: false,
        compassion: false,
        community: false,
        creativity: false,
        curiosity: false,
        faith: false,
        fame: false,
        friendship: false,
        fun: false,
        growth: false,
        happiness: false,
        innerHarmony: false,
        justice: false,
        kindness: false,
        knowledge: false,
        leadership: false,
        love: false,
        peace: false,
        prosperity: false,
        security: false,
        spirituality: false,
        stability: false,
        success: false,
        wealth: false,
        wisdom: false,
    },
}

const initialDisabled = true

const Values = () => {
    const [values, setValues] = useState(initialValues)
    const [disabled, setDisabled] = useState(initialDisabled)
    const history = useHistory()

    const onCheckboxChange = (evt) => {
        const { name } = evt.target;
        const { checked } = evt.target;
        console.log(name, checked)
        setValues({
            ...values,
            valuesList: {
                ...values.valuesList,
                [name]: checked,
            },
        });
        //schema - 3 boxes checked
    };

    const onSubmit = (evt) => {
        evt.preventDefault();

        //add axios call here 
        //include .finally here to change state back to initialValues 
        //postValues(userValues);
        history.push("/valuesprompt")
    }

    return (
        <div>

            <h1>Values</h1>
            <h2>List of Values</h2>
            <div className="values-list">
                {Object.keys(values.valuesList).map(value => (
                    <ValuesInput value={value} onCheckboxChange={onCheckboxChange} valueObj={values.valuesList[value]} key={value}/>
                ))}               
            </div>
            <button>Next</button>
        </div>
    )
}

export default Values;