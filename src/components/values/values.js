import React, { useState, useEffect} from "react";
import "../../App.css";
import { useHistory } from "react-router-dom";

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
        //postValues(userValues);
        history.push("/valuesprompt")
    }

    return (
        <div>
            <h1>Values</h1>
            <h2>List of Values</h2>
            <div className="values-list">
                Add Values
                <div className="value1">
                    <div className="values-column">
                        <label>
                            Adventure
                            <input
                                type="checkbox"
                                name="adventure"
                                checked={values.valuesList.adventure}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value2">
                    <div className="values-column">
                        <label>
                            Balance
                            <input
                                type="checkbox"
                                name="balance"
                                checked={values.valuesList.balance}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value3">
                    <div className="values-column">
                        <label>
                            Compassion
                            <input
                                type="checkbox"
                                name="compassion"
                                checked={values.valuesList.compassion}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value4">
                    <div className="values-column">
                        <label>
                            Community
                            <input
                                type="checkbox"
                                name="community"
                                checked={values.valuesList.community}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value5">
                    <div className="values-column">
                        <label>
                            Creativity
                            <input
                                type="checkbox"
                                name="creativity"
                                checked={values.valuesList.creativity}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value6">
                    <div className="values-column">
                        <label>
                            Curiosity
                            <input
                                type="checkbox"
                                name="curiosity"
                                checked={values.valuesList.curiosity}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value7">
                    <div className="values-column">
                        <label>
                            Faith
                            <input
                                type="checkbox"
                                name="faith"
                                checked={values.valuesList.faith}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value8">
                    <div className="values-column">
                        <label>
                            Fame
                            <input
                                type="checkbox"
                                name="fame"
                                checked={values.valuesList.fame}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value9">
                    <div className="values-column">
                        <label>
                            Friendship
                            <input
                                type="checkbox"
                                name="friendship"
                                checked={values.valuesList.friendship}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value10">
                    <div className="values-column">
                        <label>
                            Fun
                            <input
                                type="checkbox"
                                name="fun"
                                checked={values.valuesList.fun}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value11">
                    <div className="values-column">
                        <label>
                            Growth
                            <input
                                type="checkbox"
                                name="growth"
                                checked={values.valuesList.growth}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value12">
                    <div className="values-column">
                        <label>
                            Happiness
                            <input
                                type="checkbox"
                                name="hapiness"
                                checked={values.valuesList.happiness}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value13">
                    <div className="values-column">
                        <label>
                            Inner Harmony
                            <input
                                type="checkbox"
                                name="innerHarmony"
                                checked={values.valuesList.innerHarmony}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value14">
                    <div className="values-column">
                        <label>
                            Justice
                            <input
                                type="checkbox"
                                name="justice"
                                checked={values.valuesList.justice}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value15">
                    <div className="values-column">
                        <label>
                            Kindness
                            <input
                                type="checkbox"
                                name="kindness"
                                checked={values.valuesList.kindness}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value16">
                    <div className="values-column">
                        <label>
                            Knowledge
                            <input
                                type="checkbox"
                                name="knowledge"
                                checked={values.valuesList.knowledge}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value17">
                    <div className="values-column">
                        <label>
                            Leadership
                            <input
                                type="checkbox"
                                name="leadership"
                                checked={values.valuesList.leadership}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value18">
                    <div className="values-column">
                        <label>
                            Love
                            <input
                                type="checkbox"
                                name="love"
                                checked={values.valuesList.love}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value19">
                    <div className="values-column">
                        <label>
                            Peace
                            <input
                                type="checkbox"
                                name="peace"
                                checked={values.valuesList.peace}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value20">
                    <div className="values-column">
                        <label>
                            Prosperity
                            <input
                                type="checkbox"
                                name="prosperity"
                                checked={values.valuesList.prosperity}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value21">
                    <div className="values-column">
                        <label>
                            Security
                            <input
                                type="checkbox"
                                name="security"
                                checked={values.valuesList.security}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value22">
                    <div className="values-column">
                        <label>
                            Spirituality
                            <input
                                type="checkbox"
                                name="spirituality"
                                checked={values.valuesList.spirituality}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value23">
                    <div className="values-column">
                        <label>
                            Stability
                            <input
                                type="checkbox"
                                name="stability"
                                checked={values.valuesList.stability}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value24">
                    <div className="values-column">
                        <label>
                            Success
                            <input
                                type="checkbox"
                                name="success"
                                checked={values.valuesList.success}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value25">
                    <div className="values-column">
                        <label>
                            Wealth
                            <input
                                type="checkbox"
                                name="wealth"
                                checked={values.valuesList.wealth}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
                <div className="value26">
                    <div className="values-column">
                        <label>
                            Wisdom
                            <input
                                type="checkbox"
                                name="wisdom"
                                checked={values.valuesList.wisdom}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                </div>
            </div>
            <button>Next</button>
        </div>
    )
}

export default Values;