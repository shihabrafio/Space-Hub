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
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {missions.map((mission) => (
            <div key={mission.id}>
              <div>
                <h3>{mission.name}</h3>
                <p>
                  <span>Reserved</span>
                  {mission.description}
                </p>
                <button type="button">Not a Member</button>
                <button type="button">Join Mission</button>
              </div>
            </div>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
export default Mission;
