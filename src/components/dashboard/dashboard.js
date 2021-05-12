import React, {useState} from "react";
import "../../App.css";

const Dashboard = () => {
    const [values, setValues] = useState()

    const checkbox = () => {

    }

    handleChange = (e) => {
        e.preventDefault()
    }

    //top 3 values with projects created on projects page

    return (
        <div>
            <label>
                Value 1
            <input
                    name="value1"
                    type="checkbox"
                    checked={checkbox}
                    onChange={handlechange} />
            </label>

            <label>
                Value 2
            <input
                    name="value2"
                    type="checkbox"
                    checked={checkbox}
                    onChange={handlechange} />
            </label>

            <label>
                Value 3
            <input
                    name="value3"
                    type="checkbox"
                    checked={checkbox}
                    onChange={handlechange} />
            </label>
        </div>
    )
}

export default Dashboard;