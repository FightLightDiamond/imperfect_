import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getLessonsAction, destroyLessonAction} from "../../../../stores/redux/lesson/actions";
import ReactPaginate from 'react-paginate';
import {Link} from "react-router-dom";
import Loading from "../../../components/common/Loading";
import ButtonLoading from "../../../components/common/ButtonLoading";


const IndexContainer = (props) => {
    const {lessons, loading, getLessonsAction, history} = props
    const [pageSelected, setPageSelected] = useState(0)

    useEffect(() => {
        getLessonsAction({page: pageSelected + 1}, history)
    }, [getLessonsAction, pageSelected, history]);

    const handlePageClick = (e) => {
        setPageSelected(e.selected);
    };

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
                                loading={props.loading}
                                event={() => onDelete(item.id)}
                                size={'sm'}
                                color={'danger'}
                                title={'Delete'}
                            />
                        </div>
                    </td>
                </tr>)
    }

    const onDelete = id => {
        const ok = window.confirm('Are you sure?')

        if (ok) {
            const {destroyLessonAction} = props
            destroyLessonAction(id)

            alert('Delete success')
        }
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
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={lessons.last_page}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
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
)(IndexContainer);
