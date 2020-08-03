import React from "react";

export default class TrueFalseComponent extends React.Component {
    render() {
        return (
            <table className="table">
                <tr>
                    <th>Answer</th>
                </tr>
                <tr>
                    <td>
                        <input type={'radio'}  value="1">True</input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type={'radio'}  value="1">False</input>
                    </td>
                </tr>
            </table>
        );
    }
}
