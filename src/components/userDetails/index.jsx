import React from "react";
import { BsPeople } from "react-icons/bs";
import './styles.css'

function UserDetails(props) {
  return (
    <div className="ContainerUser">
      <h1 className="name">{props?.name}</h1>
      <h2 className="userName">{props?.login}</h2>
      <h2 className="description">{props?.bio}</h2>
      <div className="fowlling">
        <span>
          <BsPeople size={16} />
        </span>
        <b>{props?.followers}</b>
        <span>Seguidores</span>
        <span>-</span>
        <b>{props?.following}</b>
        <span>Seguindo</span>
      </div>
    </div>
  );
}

export default UserDetails;
