import React from "react";
import './styles.css'

function ReposContainer(props) {
  return (
    <section className="sectionRepos">
      
      <h1 className="titleRepos">
        Repositórios de {(props.name)?.split(" ")[0]}
      </h1>
      <h1 className="repoList">
        {(props?.repos).map((repo) => (
          <h2 className="list"
            onClick={() => window.location.href(repo?.html_url)}
            key={repo?.id}
          >
            <h2>{repo?.name}</h2>
            <p>{repo?.description}</p>
          </h2>
        ))}
      </h1>
    </section>
  );
}

export default ReposContainer;
