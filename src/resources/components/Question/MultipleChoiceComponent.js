import React from "react";

export default class MultipleChoiceComponent extends React.Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Answer</th>
                        <th>Reply</th>
                        <th className="text-right">
                            <button className={'btn btn-primary btn-sm'}>add</button>
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>
                            <input type="checkbox"/>
                        </td>
                        <td>

                        </td>
                        <td>
                            <button className={'btn btn-danger btn-sm'}>x</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
