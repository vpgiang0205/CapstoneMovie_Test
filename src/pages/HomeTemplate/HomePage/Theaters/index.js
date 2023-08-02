import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actTheaters } from './duck/actions';
import TheatersItem from './TheaterItem';
import { actTheatersItem } from './TheaterItem/duck/actions';
import TheaterItemDateTime from './TheaterItemDateTime';
import './style.css'

export default function Theaters() {
  const dispatch = useDispatch();
  const theaterData = useSelector((state) => state.theatersReducer.data);
  const theaterByItemData = useSelector((state) => state.theatersItemReducer.data);

  useEffect(() => {
    dispatch(actTheaters());

    if (theaterData && theaterData.length > 0 && (!theaterByItemData || theaterByItemData.length === 0)) {
      handleTheaterItemClick(theaterData[0].maHeThongRap);
    }
  }, []);

  const renderTheaters = () => {
    if (theaterData && theaterData.length > 0) {
      return theaterData.map((item, index) => (
        <TheatersItem key={index} theater={item} onTheaterItemClick={handleTheaterItemClick} />
      ));
    } else {
      return <div>No data available.</div>;
    }
  };

  const handleTheaterItemClick = (maHeThongRap) => {
    dispatch(actTheatersItem(maHeThongRap));
  };

  const renderTheatersByItem = () => {
    if (theaterByItemData && theaterByItemData.length > 0) {
      return theaterByItemData.map((item, index) => (
        <button className='w-100 p-2' key={index}>
          <h4>{item.tenCumRap}</h4>
          <h6>{item.diaChi}</h6>
          <a className="jss167" href="/">
            [chi tiết]
          </a>
        </button>
      ));
    } else {
      return <div>Loading data...</div>;
    }
  };

  const renderTheaterItemDateTime = () => {
    if (theaterData && theaterData.length > 0) {
      return theaterData.map((item, index) => (
        <TheaterItemDateTime key={index} theaterDateTime = {item}/>
      ));
    } else {
      return <div>No data available.</div>;
    }
  }

  return (
    <section id="theaters">
      <div className="container theaters__Container d-flex">
        <div className="theaters__Avatas col-1 flex-column text-center" role="tablist">{renderTheaters()}
        </div>

        <div className="theaters col-4">{renderTheatersByItem()}</div>

        <div className="theaters col-7">{renderTheaterItemDateTime()}
        </div>
      </div>
    </section>
  );
}
