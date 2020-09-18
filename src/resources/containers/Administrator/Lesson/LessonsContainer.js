import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getLessonsAction, destroyLessonAction} from "../../../../stores/redux/lesson/actions";
import ReactPaginate from 'react-paginate';
import {Link} from "react-router-dom";
import Loading from "../../../components/common/Loading";
import ButtonLoading from "../../../components/common/ButtonLoading";


const LessonsContainer = (props) => {
    const [pageSelected, setPageSelected] = useState(0)
    const {getLessonsAction, destroyLessonAction, loading, lessons, history} = props

    useEffect(() => {
        getLessonsAction({page: pageSelected + 1}, history)
    }, [getLessonsAction, pageSelected, history]);


    const handlePageClick = (e) => {
        setPageSelected(e.selected)
    };

    const onDelete = id => {
        const ok = window.confirm('Are you sure?')

        if (ok) {
            destroyLessonAction(id)
        }
    }

    const receivedData = (data) => {
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
                                loading={loading}
                                event={() => onDelete(item.id)}
                                size={'sm'}
                                color={'danger'}
                                title={'Delete'}
                            />
                        </div>
                    </td>
                </tr>)
    }

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
                    {receivedData(lessons.data)}
                    </tbody>

                </table>

                <ReactPaginate
                    forcePage={pageSelected}
                    breakClassName={"break-me"}
                    pageCount={lessons.last_page}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
            </div>
            : <Loading/>
    );
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
