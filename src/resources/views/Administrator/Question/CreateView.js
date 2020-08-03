import React from "react";

export default class CreateView extends React.Component {
    render() {
        return (
            <div>
                <h2>Question CreateView</h2>

                <div className={'row'}>
                    <div className={'col-lg-3'}>
                        <label htmlFor="">Type</label>
                        <select name="" className={'form-control'} id="">
                            <option value="1">True False</option>
                            <option value="2">Multiple Choice</option>
                            <option value="3">Choose many answers</option>
                        </select>
                    </div>
                    <div className={'col-lg-3'}>
                        <label htmlFor="">Time</label>
                        <input type="text" className={'form-control'}/>
                    </div>
                    <div className={'col-lg-3'}>
                        <label htmlFor="">Status</label>
                        <select name="" className={'form-control'} id="">
                            <option value="1">Inactive</option>
                            <option value="2">Active</option>
                        </select>
                    </div>
                    <div className={'col-lg-3'}>
                        <label htmlFor="">Level</label>
                        <select name="" className={'form-control'} id="">

                        </select>
                    </div>

                    <div className={'col-lg-12'}>
                        <label htmlFor="">Question</label>
                    </div>
                    <div className={'col-lg-12'}>
                        <table className={'table'}>
                            <thead>
                            <tr>
                                <th>Answer</th>
                                <th>Reply</th>
                                <th className={'text-right'}>
                                    <button className={'btn btn-sm btn-primary'}>Add</button>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <input type="checkbox"/>
                                </td>
                                <td></td>
                                <td className={'text-right'}>
                                    <button className={'btn btn-sm btn-danger'}>Remove</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>


            </div>
        );
    }
}
