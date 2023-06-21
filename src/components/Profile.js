import { useSelector } from 'react-redux';
import MyMissions from './Mymission';

const Profile = () => {
  const { dragons } = useSelector((state) => state.dragons);
  const filteredDragons = dragons.filter((dragon) => dragon.reserved);

  return (
    <>
      <div>
        {filteredDragons.map((dragon) => (
          <h3 key={dragon.id}>{dragon.name}</h3>
        ))}
      </div>
      <MyMissions />
    </>
  );
};

export default Profile;
