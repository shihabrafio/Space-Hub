import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchDragons,
  reserveDragon,
  cancelReservation,
} from '../redux/dragons/dragonsSlice';
import '../App.css';

const Dragons = () => {
  const { dragons, status, error } = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDragons());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <h2 style={{ textAlign: 'center' }}>Loading...</h2>;
  }

  if (status === 'failed') {
    return <h3 style={{ textAlign: 'center' }}>{error}</h3>;
  }

  return (
    <section className="container">
      {dragons.map((dragon) => (
        <div className="card" key={dragon.id}>
          <div className="img">
            <img src={dragon.flickr_images} alt="123" />
          </div>
          <div className="card-content">
            <h3>{dragon.name}</h3>
            <p className="desc">
              {dragon.reserved && <span className="badge">Reserved</span>}
              {dragon.description}
            </p>
            {!dragon.reserved ? (
              <button
                className="btn primary-btn"
                type="button"
                onClick={() => dispatch(reserveDragon(dragon.id))}
              >
                Reserve Dragon
              </button>
            ) : (
              <button
                className="btn secondary-outline-btn"
                onClick={() => dispatch(cancelReservation(dragon.id))}
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

export default Dragons;
