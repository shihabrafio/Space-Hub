import '../styles/rockets.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserveRocket } from '../redux/rockets/rocketsSlice';

const Rocket = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const status = useSelector((state) => state.rockets.status);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  const reserveButton = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

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
              <span className={rocket.reserved === true ? 'display' : 'hidden'}>
                Reserved
              </span>
              {rocket.description}
            </p>
            {!rocket.reserved && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  reserveButton(rocket.id);
                }}
                type="button"
              >
                Reserve Rocket
              </button>
            )}
            <button type="button">Cancel Reservation</button>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Rocket;
