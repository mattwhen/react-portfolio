import React from 'react';
import myResume_1 from '../../utils/Current-Resume1024_1.jpg';
import myResume_2 from '../../utils/Current-Resume1024_2.jpg';

export default function Resume() {
  return (
    <>
    <div className='resume-container'>
      <img src={myResume_1} alt='My personal resume' className='resume-img'/>
      <img src={myResume_2} alt='My personal resume'className='resume-img'/>
    </div>
    </>
  );

}
