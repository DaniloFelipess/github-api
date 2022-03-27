import React from "react";
import './styles.css'

function StarredContainer(props) {
  return (
    <section className="sectionRepos">
      
      <h1 className="titleRepos">
        Favoritos de {(props.name)?.split(" ")[0]}
      </h1>
      <h1 className="repoList">
        {(props?.starred).map((starred) => (
          <h2 className="list"
            onClick={() => window.location.href(starred?.html_url)}
            key={starred?.id}
          >
            <h2>{starred?.name}</h2>
            <p>{starred?.description}</p>
          </h2>
        ))}
      </h1>
    </section>
  );
}

export default StarredContainer;
