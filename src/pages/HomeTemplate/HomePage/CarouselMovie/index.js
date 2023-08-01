import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './style.css';
import { actCarouselMovie } from './duck/actions';
import { useDispatch, useSelector } from 'react-redux';

import CarouselMovieItem from './CarouselMovieItem';

export default function CarouselMovie() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const dispatch = useDispatch();
  const data = useSelector((state) => state.carouselMovieReducer.data); // Replace .caorouselMovieReducer' with the correct name of your reducer

  useEffect(() => {
    dispatch(actCarouselMovie());
  }, []);

  const renderCarouselItems = () => {
    if (data && data.length > 0) {
      return data.map((item, index) => (
        <div key={item.id} className='custom-item'>
          <CarouselMovieItem key={index} movie={item} />
        </div>
      ));
    } else {
      // Handle the case when data is null or an empty array
      return <div>No data available.</div>;
    }
  };


  return (
    <div className='container'>
      <Carousel responsive={responsive}
      autoPlay={true}  
      autoPlaySpeed={2000} infinite = {true}>{renderCarouselItems()}</Carousel>
    </div>
  );
}
