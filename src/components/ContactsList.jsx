import React from "react";
import ContactItem from "./ContactItem";
function ContactsList({ contacts }) {
  return (
    <div className="mt-16 ">
      <h3 className="text-[#304ffe] font-bold">Contacts List</h3>
      {contacts.length ? (
        <ul className=" p-6 m-4 rounded-[10px] border-gray-400 border-[1px]">
          {contacts.map((contact) => (
            <ContactItem key={contact.id} data={contact} />
          ))}
        </ul>
      ) : (
        <p className="bg-slate-300 text-black p-6 text-center mt-4 rounded-[10px]">No Contacts Yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
