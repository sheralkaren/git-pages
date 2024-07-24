import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://sheralkaren.github.io/git-pages/public/BBG/images/dee-bbg.jpeg" />
      {contacts.map(createCard)}
      {/* {contacts.map((contact) => {
        return (
          <Card
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
          />
        );
      })} */}
    </div>
  );
}

export default App;
