import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelReservation } from '../redux/dragons/dragonsSlice';
import { cancelRocket } from '../redux/rockets/rocketsSlice';

const Profile = () => {
  const { dragons } = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);

  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const missions = useSelector((state) => state.missions.missions);
  const filterMissions = missions.filter((mission) => mission.status === true);

  const dispatch = useDispatch();

  return (
    <section className="profile-container">
      <div className="dragons-wrapper">
        <h2>My Dragons</h2>
        <table>
          <tbody>
            {reservedDragons.length ? (
              reservedDragons.map((dragon) => (
                <tr className="profile-tr" key={dragon.id}>
                  <td>{dragon.name}</td>
                  <button
                    className="btn secondary-outline-btn"
                    onClick={() => dispatch(cancelReservation(dragon.id))}
                    type="button"
                  >
                    Cancel Reservation
                  </button>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Dragons reserved!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="rockets-wrapper">
        <h2>My Rockets</h2>
        <table>
          <tbody>
            {reservedRockets.length ? (
              reservedRockets.map((rocket) => (
                <tr className="profile-tr" key={rocket.id}>
                  <td>{rocket.name}</td>
                  <button
                    className="btn secondary-outline-btn"
                    onClick={() => dispatch(cancelRocket(rocket.id))}
                    type="button"
                  >
                    Cancel Reservation
                  </button>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Rockets reserved!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="missions-wrapper">
        <h2>My Mission</h2>
        <table>
          <tbody>
            {filterMissions.length ? (
              filterMissions.map((mission) => (
                <tr key={mission.id}>
                  <td>{mission.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Missions Joined!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Profile;
