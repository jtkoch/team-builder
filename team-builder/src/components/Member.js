import React from 'react';

const Member = props => {
  return (
    <div className="member-list">
      {props.member.map(people => (
        <div className="member" key={people.id}>
          <h2>{people.name}</h2>
          <p>{people.email}</p>
          <p>{people.role}</p>  
        </div>  
      ))}
    </div>
  );
}

export default Member;