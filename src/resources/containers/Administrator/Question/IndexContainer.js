import React from "react";
import {connect} from "react-redux";
import {getLessonsAction, destroyLessonAction} from "../../../../stores/redux/lesson/actions";
import ReactPaginate from 'react-paginate';
import {Link} from "react-router-dom";
import Loading from "../../../components/common/Loading";
import ButtonLoading from "../../../components/common/ButtonLoading";


class IndexContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSelected: 0
        }
    }

    componentWillMount() {
        const {getLessonsAction} = this.props
        getLessonsAction({page: 1})
    }

    handlePageClick = (e) => {
        const {getLessonsAction} = this.props
        const selectedPage = e.selected;
        this.setState({
            selectedPage: selectedPage
        })
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
                            <Link to={"/lesson-edit/" + item.id} className={'btn btn-primary btn-sm'}>Edit</Link>
                            <ButtonLoading
                                loading={this.props.loading}
                                event={() => this.onDelete(item.id)}
                                size={'sm'}
                                color={'danger'}
                                title={'Delete'}
                            />
                        </div>
                    </td>
                </tr>)
    }

    onDelete = id => {
        const ok = window.confirm('Are you sure?')

        if (ok) {
            const {destroyLessonAction} = this.props
            destroyLessonAction(id)

            alert('Delete success')
        }
    }

    render() {
        const {lessons, loading} = this.props

        return (
            !loading ?
                <div className={'container'}>
                    <div className={'form-group'}>
                        <Link to={"/lesson-create"} className={'btn btn-primary'}>Create</Link>
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
                        forcePage={this.state.selectedPage}
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
                : <Loading/>
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
)(IndexContainer);
