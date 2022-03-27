import React, { useContext } from "react";

import "./styles.css";
import { context } from "../context";
import StarredContainer from "../components/starredContainer";

function Starred() {
  const contexto = useContext(context);

  return (
    <div className="ContainerRepos">
      <StarredContainer name={contexto.userData?.name} repos={contexto.starred} />
    </div>
  )
}

export default Starred;
