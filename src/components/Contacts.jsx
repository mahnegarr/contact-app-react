import React, { useState } from "react";

import ContactsList from "./ContactsList";

const inputs = [
  { type: "text", placeholder: "Name", name: "name" },
  { type: "text", placeholder: "last Name", name: "lastName" },
  { type: "email", placeholder: "Email", name: "email" },
  { type: "number", placeholder: "Phone", name: "phone" },
];

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
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
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter a valid data!");
      return;
    }
    setAlert("");
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
          {inputs.map((input) => (
            <input
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={contact[name]}
              onChange={changeHandler}
            />
          ))}
        </div>
        <div>
          <button className="w-full bg-neutral-300" onClick={addHandler}>
            Add Contact
          </button>
        </div>
      </div>
      <div>{alert && <p className="text-red-700 font-medium">{alert}</p>}</div>
      <ContactsList contacts={contacts} />
    </>
  );
}

export default Contacts;
