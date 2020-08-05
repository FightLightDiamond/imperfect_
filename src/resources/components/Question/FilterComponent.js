import React from "react";


export default class FilterComponent extends React.Component {
    render() {
        const {
            // type,
            time,
            // status,
            // level,
            handleType, handleTime, handleStatus, handleLevel
        } = this.props

        return (
            <div className={'row'}>
                <div className={'col-lg-3 form-group'}>
                    <label htmlFor="">Type</label>
                    <select
                        onChange={(e) => handleType(e.target.value)}
                        className={'form-control'} id="">
                        <option value="1">True False</option>
                        <option value="2">Multiple Choice</option>
                        <option value="3">Choose many answers</option>
                    </select>
                </div>
                <div className={'col-lg-3 form-group'}>
                    <label htmlFor="">Time</label>
                    <input onChange={(e) => handleTime(e.target.value)}
                           value={time} className={'form-control'}/>
                </div>
                <div className={'col-lg-3 form-group'}>
                    <label htmlFor="">Status</label>
                    <select
                        onChange={(e) => handleStatus(e.target.value)}
                        className={'form-control'} id="">
                        <option value="1">Inactive</option>
                        <option value="2">Active</option>
                    </select>
                </div>
                <div className={'col-lg-3 form-group'}>
                    <label htmlFor="">Level</label>
                    <select
                        onChange={(e) => handleLevel(e.target.value)}
                        className={'form-control'} id="">
                        <option value="1">Newbie</option>
                        <option value="2">Middle</option>
                        <option value="3">Senior</option>
                    </select>
                </div>
            </div>
        )
    }
}
