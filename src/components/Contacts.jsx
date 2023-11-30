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
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-slate-400 h-[180px] rounded-[1rem]">
        <div className="grid grid-cols-2 gap-4 grid-rows-2 mb-4">
          <input
            className="rounded-[.3rem] w-[430px] h-9 border-[3px] hover:outline-none focus:outline-none focus:border-[#0a20a0] placeholder:pl-4"
            type="text"
            placeholder="Name"
            name="name"
            value={contact.name}
            onChange={changeHandler}
          />
          <input
            className="rounded-[.3rem] border-[3px] hover:outline-none focus:outline-none focus:border-[#0a20a0] placeholder:pl-4"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={contact.lastName}
            onChange={changeHandler}
          />
          <input
            className="rounded-[.3rem] border-[3px] hover:outline-none focus:outline-none focus:border-[#0a20a0] placeholder:pl-4"
            type="text"
            placeholder="Email"
            name="email"
            value={contact.email}
            onChange={changeHandler}
          />
          <input
            className="rounded-[.3rem] border-[3px] hover:outline-none focus:outline-none focus:border-[#0a20a0] placeholder:pl-4"
            type="number"
            placeholder="Phone"
            name="phone"
            value={contact.phone}
            onChange={changeHandler}
          />
        </div>
        <div>
          <button className="w-full bg-neutral-300" onClick={addHandler}>
            Add Contact
          </button>
        </div>
      </div>
      <ContactsList contacts={contacts} />
    </>
  );
}

export default Contacts;
