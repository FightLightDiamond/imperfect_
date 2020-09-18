import React from "react";
import {QUESTION_TYPES_NAME} from "../../../config/Question";


const FilterComponent = props => {
    const {
        time,
        handleType, handleTime, handleStatus, handleLevel
    } = props

    return (
        <div className={'row'}>
            <div className={'col-lg-3 form-group'}>
                <label>Type</label>
                <select
                    onChange={(e) => handleType(parseInt(e.target.value))}
                    className={'form-control'}>
                    {QUESTION_TYPES_NAME.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                </select>
            </div>
            <div className={'col-lg-3 form-group'}>
                <label>Time</label>
                <input onChange={(e) => handleTime(e.target.value)}
                       value={time} className={'form-control'}/>
            </div>
            <div className={'col-lg-3 form-group'}>
                <label>Status</label>
                <select
                    onChange={(e) => handleStatus(e.target.value)}
                    className={'form-control'}>
                    <option value="1">Inactive</option>
                    <option value="2">Active</option>
                </select>
            </div>
            <div className={'col-lg-3 form-group'}>
                <label>Level</label>
                <select
                    onChange={(e) => handleLevel(e.target.value)}
                    className={'form-control'}>
                    <option value="1">Newbie</option>
                    <option value="2">Middle</option>
                    <option value="3">Senior</option>
                </select>
            </div>
        </div>
    )
}

export default FilterComponent