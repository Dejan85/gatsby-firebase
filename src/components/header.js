import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, navigate } from "gatsby";
import { FirebaseContext } from "./Firebase";
import styled from "styled-components";

const LogoutLink = styled.span`
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderWrapper = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const HeaderContext = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;

  > h1 {
    margin: 0;
    flex-grow: 1;

    > a {
      color: white;
      text-decoration: none;
    }
  }

  > div {
    margin: auto 0;
    text-align: right;
  }
`;

const UserInfo = styled.div`
  text-align: right;
  color: white;
`;

const LoginLink = styled.div`
  margin: auto 0;
  a {
    color: white;
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => {
  const { firebase, user } = useContext(FirebaseContext);

  const handleLogoutClick = async () => {
    firebase.logout().then(() => navigate("/login"));
  };

  return (
    <HeaderWrapper>
      <HeaderContext>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>

        <div>
          {!!user && !!user.email && (
            <UserInfo>
              Hello {user.email}
              <div>
                <LogoutLink onClick={handleLogoutClick}>Logout</LogoutLink>
              </div>
            </UserInfo>
          )}

          {(!user || !user.email) && (
            <LoginLink>
              <Link to="/login">Login</Link>
            </LoginLink>
          )}
        </div>
      </HeaderContext>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
