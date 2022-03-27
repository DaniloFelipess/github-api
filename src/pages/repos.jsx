import React, { useContext } from "react";

import ReposContainer from "../components/reposContainer";
import "./styles.css";
import { context } from "../context";

function Repos() {
  const contexto = useContext(context);

  return (
    <div className="ContainerRepos">
      <ReposContainer name={contexto.userData?.name} repos={contexto.repos} />
    </div>
  )
}

export default Repos;
