import React from 'react';

const ValuesInput = (props) => {

    return (
        <div className="values-column">
            <label>
                {props.value}
                <input
                    type="checkbox"
                    name={props.value}
                    checked={props.valueObj}
                    onChange={props.onCheckboxChange}
                />
            </label>
        </div>
    )
}



export default ValuesInput;