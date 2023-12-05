import React, { useState } from "react";

function ContactsBU() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler=()=>{
    const newContact = {...contact , id:v4()}
    setContacts((contacts)=>([...contacts, newContact]))
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="lastName"
          name="lastName"
          value={contact.lastName}
          onChange={changeHandler}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
        <input
          type="number"
          placeholder="phone"
          name="phone"
          value={contact.phone}
          onChange={changeHandler}
        />
      </div>
      <button>Add Contact</button>
    </div>
  );
}

export default ContactsBU;
