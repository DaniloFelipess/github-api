import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function UserSocial(props) {
  const navigate = useNavigate();

  return (
    <div className="ContainerUserSocial">
      <div className="ItemUserSocial" onClick={() => navigate("/repos")}>
        <h1>{props?.repos}</h1>
        <h2>Repositórios</h2>
      </div>

      <div className="ItemUserSocial" onClick={() => navigate("/starred")}>
        <h1>{props?.starred}</h1>
        <h2>Favoritos</h2>
      </div>
    </div>
  );
}

export default UserSocial;
