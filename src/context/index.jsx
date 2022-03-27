import React, { createContext, useState } from "react";

export const context = createContext();

export function ContextProvider(props) {
  const [userData, setUserData] = useState({});
  const [repos, setRepos] = useState({});
  const [starred, setStarred] = useState({});
  return (
    <context.Provider
      value={{ userData, setUserData, repos, setRepos, starred, setStarred }}
    >
      {props.children}
    </context.Provider>
  );
}
