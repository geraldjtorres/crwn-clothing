import React from 'react';
import './Homepage.scss';
import Directory from '../../components/directory/Directory';

const Homepage = ({ match }) => {
  console.log(match);
  return (
    <div className='homepage'>
      <Directory />
    </div>
  );
};

export default Homepage;
