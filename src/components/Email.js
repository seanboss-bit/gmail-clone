import React from 'react';
import TopBar from './TopBar'
import EmailNavbar from './EmailNavbar'
import EmailContent from './EmailContent'

const Email = () => {
    return (
        <div>
            <TopBar />
            <EmailNavbar />
            <EmailContent />
        </div>
    );
}

export default Email;
