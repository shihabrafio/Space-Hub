import '../styles/missions.css';
import React from 'react';
import { useSelector } from 'react-redux';

const MyMissions = () => {
  const missions = useSelector((state) => state.missions.missions);

  const filterMissions = missions.filter((mission) => mission.status === true);
  return (
    <table className="mymissions">
      <thead className="missionsheader">
        <tr>
          <th>My Missions</th>
        </tr>
      </thead>
      <tbody className="missionstable">
        {filterMissions.map((mission) => (
          <tr key={mission.id}>
            <td>{mission.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyMissions;
