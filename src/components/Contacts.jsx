import React, { useState } from "react";

import ContactsList from "./ContactsList";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
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

  const addHandler = () => {
    setContacts((contacts) => [...contacts, contact]);
    console.log(contacts);
  };
  return (
    <>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={contact.lastName}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
        <input
          type="number"
          placeholder="Phone"
          name="phone"
          value={contact.phone}
          onChange={changeHandler}
        />

        <button onClick={addHandler}>Add Contact</button>
      </div>
      <ContactsList contacts={contacts} />
    </>
  );
}

export default Contacts;
