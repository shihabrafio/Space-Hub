import '../styles/missions.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';
import MissionOne from './Mission';

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
    <table className="mission_table_wrapper">
      <thead>
        <tr className="mission_table_row">
          <th className="mission_table_head">Mission</th>
          <th className="mission_table_head">Description</th>
          <th className="mission_table_head">Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr className="mission_table_rows" key={mission.id}>
            <MissionOne
              name={mission.name}
              description={mission.description}
              id={mission.id}
              status={mission.status}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Mission;
