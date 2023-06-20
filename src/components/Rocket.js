// import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';

const Rocket = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getRockets());
    }
  }, [status, dispatch]);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'failed') {
    return <div>{error}</div>;
  }
  return (
    <section>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <div>
            <img src={rocket.flickr_images} alt="123" />
          </div>
          <div>
            <h3>{rocket.name}</h3>
            <p>
              <span>Reserved</span>
              {rocket.description}
            </p>
            <button type="button">Reserve Rocket</button>
            <button type="button">Cancel Reservation</button>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Rocket;
