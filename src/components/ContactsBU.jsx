import React, { useState } from "react";

function ContactsBU() {
    const contact = {} = useState()
  return (
    <div>
      <div>
        <input type="text" placeholder="name" name="name" />
        <input type="text" placeholder="lastName" name="lastName" />
        <input type="email" placeholder="email" name="email" />
        <input type="number" placeholder="phone" name="phone" />
      </div>
      <button>Add Contact</button>
    </div>
  );
}

export default ContactsBU;
