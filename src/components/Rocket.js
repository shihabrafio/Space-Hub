import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRockets,
  reserveRocket,
  cancelRocket,
} from '../redux/rockets/rocketsSlice';

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

  const handleCancel = (rocketId) => {
    dispatch(cancelRocket(rocketId));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'failed') {
    return <div>{error}</div>;
  }
  return (
    <section className="container">
      {rockets.map((rocket) => (
        <div className="card" key={rocket.id}>
          <div className="img">
            <img src={rocket.flickr_images} alt="123" />
          </div>
          <div className="card-content">
            <h3>{rocket.name}</h3>
            <p className="desc">
              {rocket.reserved && <span className="badge">Reserved</span>}
              {rocket.description}
            </p>
            {!rocket.reserved ? (
              <button
                className="btn primary-btn"
                onClick={(e) => {
                  e.preventDefault();
                  reserveButton(rocket.id);
                }}
                type="button"
              >
                Reserve Rocket
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleCancel(rocket.id);
                }}
                className="btn secondary-outline-btn"
                type="button"
              >
                Cancel Reservation
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
export default Rocket;
