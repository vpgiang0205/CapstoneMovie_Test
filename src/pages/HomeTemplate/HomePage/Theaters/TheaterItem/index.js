import React from 'react'
import './style.css'

export default function TheatersItem(props) {
    const { theater, onTheaterItemClick } = props

    const handleTheaterItemOnclick = () => {
        if (onTheaterItemClick) {
          onTheaterItemClick(theater.maHeThongRap);
        }
    }

    return (
        <button tabIndex={0} type="button" className='MuiTab-wrapper' role="tab" aria-selected="true" onClick={handleTheaterItemOnclick}>
            <div className="theater__Avatar-circle"><img alt="bhd-star-cineplex" src={theater.logo} className="MuiAvatar-img" /></div>
        </button>
    )
}
