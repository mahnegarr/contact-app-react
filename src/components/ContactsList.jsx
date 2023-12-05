import React from "react";

function ContactsList({ contacts }) {
  return (
    <div className="mt-16 ">
      <h3 className="text-[#304ffe] font-bold">Contacts List</h3>
      <ul className=" p-6">
        {contacts.map((contact) => (
          <li className="mb-3 rounded-[8px] grid grid-cols-5 grid-rows-1 p-3 bg-slate-200" key={contact.id}>
            <p>
              {contact.name} {contact.lastName}
            </p>
            <p className="flex col-span-2">
              <span className="bg-white rounded-[100%]  p-1 mr-2 ">📧</span>
              {contact.email}{" "}
            </p>
            <p>
              <span className="bg-white rounded-[100%] p-1 mr-2">📞</span>
              {contact.phone}{" "}
            </p>
            <p>
                <span className="bg-white rounded-[100%] p-1 font-[5rem]">🗑</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;
