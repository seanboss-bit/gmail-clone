import React from 'react';
import Email from './Email'
import SideBar from './SideBar'
import SocialMedia from './SocialMedia'

const Body = () => {
    return (
        <div className='wrapper'>
          <SideBar />
          <Email />
          <SocialMedia />
        </div>
    );
}

export default Body;
