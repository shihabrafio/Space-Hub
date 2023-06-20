import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons } from '../redux/dragons/dragonsSlice';
import '../styles/dragons.css';

const Dragons = () => {
  const { dragons, status, error } = useSelector((state) => state.dragons);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDragons());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <h3 style={{ textAlign: 'center' }}>Loading...</h3>;
  }

  if (status === 'failed') {
    return <h3 style={{ textAlign: 'center' }}>{error}</h3>;
  }

  return (
    <section>
      {dragons.map((dragon) => (
        <div key={dragon.id}>
          <div className="dragon-img">
            <img src={dragon.flickr_images} alt="123" />
          </div>
          <div>
            <h3>{dragon.name}</h3>
            <p>
              <span>Reserved</span>
              {dragon.description}
            </p>
            <button type="button">Reserve Dragon</button>
            <button type="button">Cancel Reservation</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Dragons;
