import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { dragons } = useSelector((state) => state.dragons);
  const filteredDragons = dragons.filter((dragon) => dragon.reserved);

  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <section className="profile-container">
      <div className="dragons-wrapper">
        <h2>My Dragons</h2>
        <table>
          <tbody>
            {filteredDragons.map((dragon) => (
              <tr key={dragon.id}>
                <td>{dragon.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rockets-wrapper">
        <h2>My Rockets</h2>
        <table>
          <tbody>
            {reservedRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Profile;
