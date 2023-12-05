import React from "react";

function ContactsList({ contacts }) {
  return (
    <div className="mt-16 ">
      <h3 className="text-[#304ffe] font-bold">Contacts List</h3>
      {contacts.length ? (
        <ul className=" p-6 m-4 rounded-[10px] border-gray-400 border-[1px]">
          {contacts.map((contact) => (
            <li
              className="rounded-[8px] grid grid-cols-5 grid-rows-1 mb-3 p-3  bg-slate-200"
              key={contact.id}
            >
              <p className=" mt-1 ml-2">
                {contact.name} {contact.lastName}
              </p>
              <p className="flex col-span-2">
                <span className="bg-white rounded-[100%]  p-1 mr-2  ">📧</span>
                <p className="mt-1">{contact.email} </p>
              </p>
              <p className="flex align-middle">
                <span className="bg-white rounded-[100%] p-1 mr-2 ">📞</span>
                <p className=" mt-1">{contact.phone}</p>
              </p>
              <p>
                <span className="bg-white rounded-[50%] py-1 px-2 float-right mr-2 cursor-pointer ">
                  🗑
                </span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="bg-slate-300 text-black p-6 text-center mt-4 rounded-[10px]">No Contacts Yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
