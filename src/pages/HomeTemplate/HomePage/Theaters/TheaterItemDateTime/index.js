import React from 'react'

export default function TheaterItemDateTime(props) {
    const {} = props

    return (
        <div className="movie row">
            <div className="movie__Img col-3">
                <img alt="John Wick" src="http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-iiisssssssssxxxssssssssssssssssssss_gp09.jpg" />
            </div>
            <div className="col-9">
                <div className="movie__Title">John Wick</div>
                <div className="movie__Body">
                    <button className="btn btn-dark m-1">01-01-2019</button>
                    <button className="btn btn-dark m-1">01-01-2019</button>
                    <button className="btn btn-dark m-1">01-01-2019</button>
                    <button className="btn btn-dark m-1">01-01-2019</button>
                </div>
            </div>
        </div>
    )
}
