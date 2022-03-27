import React, { useContext } from "react";
import Container from "../components/container";
import Header from "../components/header";
import UserContainer from "../components/userContainer";
import UserPicture from "../components/userPicture";
import UserDetails from "../components/userDetails";
import UserSocial from "../components/userSocial";

import { context } from "../context";

function Home() {
  const contexto = useContext(context);

  return (
    <Container>
      <Header />
      <UserContainer>
        {contexto.userData?.name ? (
          <React.Fragment>
            <UserPicture
              url={contexto.userData?.avatar_url}
              alternativeText={contexto.userData?.login}
            />
            <UserDetails
              name={contexto.userData?.name}
              login={`#${contexto.userData?.name}`}
              bio={contexto.userData?.bio}
              followers={contexto.userData?.followers}
              following={contexto.userData?.following}
            />
            <UserSocial
              repos={contexto.userData?.public_repos}
              starred={contexto.userData?.starred}
            />
          </React.Fragment>
        ) : (
          ""
        )}
      </UserContainer>
    </Container>
  );
}

export default Home;
