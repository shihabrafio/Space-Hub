import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';

const Mission = () => {
  const dispatch = useDispatch();
  const { missions, status, error } = useSelector((state) => state.missions);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
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
      {missions.map((mission) => (
        <div key={mission.mission_id}>
          <div>
            <h3>{mission.mission_name}</h3>
            <p>
              <span>Reserved</span>
              {mission.description}
            </p>
            <button type="button">Reserve Dragon</button>
            <button type="button">Cancel Reservation</button>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Mission;
