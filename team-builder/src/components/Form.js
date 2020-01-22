import React, {useState} from 'react';

const Form = (props) => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = event => {
    setMember({...member, [event.target.name]: event.target.value});
  };

  const SubmitForm = event => {
    event.preventDefault();
    props.addNewMember(member);
    setMember({name: "", email: "", role: ""});
  };

  return (
    <div className="Form">
      <form onSubmit={SubmitForm}>

        <label htmlFor='name'> Name: </label>
          <input 
            id="name"
            maxLength="20"
            type="text" 
            name="Name"
            placeholder="Enter Your Name"
            value={member.name}
            onChange={handleChanges}
          />

          <br/>
        <label htmlFor='email'> Email: </label>  
          <input 
            id="email"
            type="text"
            name="Email"
            placeholder="Enter Your Email"
            value={member.email}
            onChange={handleChanges}
          />

          <br/>
        <label htmlFor='role'> Role: </label>  
          <input 
            id="role"
            type="text"
            name="Role"
            placeholder="What is Your Role"
            value={member.role}
            onChange={handleChanges}
          />  

        <br/>
        <button type="submit">Submit!</button>

      </form>
    </div>
  );
}

export default Form;