import React, { useState, useContext } from "react";
import "./styles.css";
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

import userResponse from "../../service/github.service";
import { context } from "../../context";

function Header() {
  const contexto = useContext(context);
  const [search, setSearch] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  async function getUser() {
    try {
      const respose = await userResponse.get(`/${search}`);
      const repos = await userResponse.get(`/${search}/repos`);
      const starred = await userResponse.get(`/${search}/starred`);
      contexto.setUserData(respose.data);
      contexto.setRepos(repos.data);
      contexto.setStarred(starred.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <header className="headerSection">
      {console.log(contexto)}
      <p>
        Pesquise por um <b>usuário</b> do Github
      </p>
      <div className="container-search">
        <input
          formAction="true"
          type="search"
          name="termo"
          placeholder="Nome do usuário"
          value={search}
          onChange={handleChange}
        />
        <Link to={`/?username=${search}`}>
          <button onClick={getUser}>
            <FaSearch />
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
