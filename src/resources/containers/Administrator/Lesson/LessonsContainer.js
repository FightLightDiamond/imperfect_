import React from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import {connect} from "react-redux";
import {getLessonsAction, destroyLessonAction} from "../../../../stores/redux/lesson/actions";
import ReactPaginate from 'react-paginate';
import {Link} from "react-router-dom";


class LessonsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {getLessonsAction} = this.props
        getLessonsAction({page: 1})
    }

    handlePageClick = (e) => {
        const {getLessonsAction} = this.props
        const selectedPage = e.selected;
        getLessonsAction({page: selectedPage + 1})

    };

    receivedData = (data) => {
        if (data)
            return data.map((item, key) =>
                <tr key={key}>
                    <td>{item.id}</td>
                    <td>
                        <Link to={"/lesson/" + item.id} className={'nav-link'}>{item.title}</Link>
                    </td>
                    <td className={'text-right'}>
                        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                            <Link to={"/lesson/" + item.id + "/edit"} className={'btn btn-primary btn-sm'}>Edit</Link>
                            <button onClick={() => this.onDelete(item.id)} className={'btn btn-danger btn-sm'}>Del
                            </button>
                        </div>
                    </td>
                </tr>)
    }

    onDelete = id => {
        const ok = window.confirm('Are you sure?')

        if(ok) {
            const {destroyLessonAction} = this.props
            destroyLessonAction(id)
        }
    }

    render() {
        const {lessons, loading, error} = this.props
        console.log('lessons', lessons)

        return (
            !loading ?
            <div className={'container'}>
                <div className={'form-group'}>
                    <button className={'btn btn-primary'}>Create</button>
                </div>

                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Title
                        </th>
                        <th></th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.receivedData(lessons.data)}
                    </tbody>

                </table>

                <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={lessons.last_page}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
                : 'Loading...'
        );
    }
}

const mapStateToProps = ({Lesson}) => {
    const {lessons, loading, error} = Lesson;
    return {lessons, loading, error};
};

export default connect(
    mapStateToProps,
    {
        getLessonsAction,
        destroyLessonAction
    }
)(LessonsContainer);
