import React from 'react';
import FuncContact from './FuncContact';
import UserClass from './ClassContact';

const Contact = () => {
  return (
    <div>
      <div>
        <FuncContact name="Veer (Func)" location="Bang're" />
        <UserClass name="Veer (class)" location="bang (class)" />
      </div>
    </div>
  );
};

export default Contact;
