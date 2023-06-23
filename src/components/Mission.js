import '../App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { reverse } from '../redux/missions/missionsSlice';

const MissionOne = (props) => {
  const {
    name, description, id, status,
  } = props;
  const dispatch = useDispatch();
  return (
    <>
      <td className="nameData">{ name }</td>
      <td className="onemission_description">{ description }</td>
      <td className="notmember">
        {(status && (<span className="active">Active Member</span>))}
        {(!status && (<span>NOT A MEMBER</span>))}
      </td>
      <td>
        {(!status && (<button type="button" className="joinmission" onClick={() => dispatch(reverse(id))}>Join Mission</button>))}
        {(status && (<button type="button" className="leavemission" onClick={() => dispatch(reverse(id))}>Leave Mission</button>))}
      </td>
    </>
  );
};
export default MissionOne;
