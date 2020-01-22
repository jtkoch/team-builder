import React, {useState} from 'react';
import './App.css';
import Form from './components/Form.js';
import Member from './components/Member.js';

function App() {
  const [member, setMember] = useState ([
    {
      name: "Jensen", 
      email: "jensen123@gmail.com",
      role: "Front End Web Developer"
    }, 
    {
      name: "Alec",
      email: "alec666@gmail.com",
      role: "Back End Web Developer"
    },
    {
      name: "Maya",
      email: "maya456@gmail.com",
      role: "Senior Software Developer"
    }
  ]);
  

  const addNewMember = people => {
    const newMember = {
      name: people.name,
      email: people.email,
      role: people.role
    };

    setMember([...member, newMember]);

  }

  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <Member member={member} />
    </div>
  );

}

export default App;