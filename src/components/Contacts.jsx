import React, { useState } from "react";

function Contacts() {
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

  const addHandler = (event) => {};
  return (
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
  );
}

export default Contacts;