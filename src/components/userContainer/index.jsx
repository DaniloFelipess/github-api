import React from "react";
import './styles.css'

const UserContainer = (props) => (
  <section className="card">
      {props.children}
  </section>
);

export default UserContainer;


