import React, { useState } from "react";
import ContactsList from "./ContactsList";
import inputs from "../constants/inputs.js";
import { v4 } from "uuid";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
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
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-slate-400 h-[200px] rounded-[1rem] ">
        <div className="grid grid-cols-2 gap-4 grid-rows-2 pb-5 ">
          {inputs.map((input, index) => (
            <input
              className="rounded-[.3rem] w-[430px] h-9 border-[3px] hover:outline-none focus:outline-none focus:border-[#0a20a0] pl-4"
              key={index}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={contact[input.name]}
              onChange={changeHandler}
            />
          ))}
        </div>
        <div>
          <button
            className="w-full bg-[#0a21a7] text-white cursor-pointer px-[390px] py-2 rounded-[10px] "
            onClick={addHandler}
          >
            Add Contact
          </button>
        </div>
      </div>
      <div>{alert && <p className="text-red-700 font-medium">{alert}</p>}</div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
    </>
  );
}

export default Contacts;
