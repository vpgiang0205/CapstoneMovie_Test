import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { actFetchDetailMovie } from './duck/actions';
import { useDispatch, useSelector } from 'react-redux';
import "./style.css"

function DetailMoviePage(props) {
    const params = useParams();
    const loading = useSelector((state) => state.detailMovieReducer.loading)
    const data = useSelector((state) => state.detailMovieReducer.data)
    const dispatch = useDispatch();


    useEffect(() => {
        // props.fetchData(params.id)
        dispatch(actFetchDetailMovie(params.id))
    }, []);

    if (loading) {
        return <div>loading...</div>
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <img src={data && data.hinhAnh} className='detail-img' />
                </div>

                <div className='col-8'>
                    <table className="table">
                        <thead >
                            <tr>
                                <td>Tên Phim</td>
                                <td>{data && data.tenPhim}</td>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td>Mô tả</td>

                                <td>{data && data.moTa}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>




        </div>
    )

}

export default DetailMoviePage

// const mapStateToProps = (state) => {
//     return {
//         loading: state.detailMovieReducer.loading,
//         data: state.detailMovieReducer.data,
//         error: state.detailMovieReducer.error
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchData: (id) => {
//             dispatch(actFetchDetailMovie(id))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage)