import { useState } from 'react';
const FuncContact = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(10);

  return (
    <div className="user-info">
      <h1>{name}</h1>
      <h3>{location}</h3>
      <h3>contact:12334556777</h3>
      <h3>{count}</h3>
      <h3>{count2}</h3>
    </div>
  );
};

export default FuncContact;
