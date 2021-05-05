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

const Header = ({ siteTitle }) => {
  const { firebase, user } = useContext(FirebaseContext);

  const handleLogoutClick = async () => {
    firebase.logout().then(() => navigate("/login"));
  };

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          display: "flex",
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0, flexGrow: 1 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>

        <div style={{ margin: "auto 0", textAlign: "right" }}>
          {!!user && !!user.email && (
            <div>
              Hello {user.email}
              <div>
                <LogoutLink onClick={handleLogoutClick}>Logout</LogoutLink>
              </div>
            </div>
          )}

          {(!user || !user.email) && (
            <div>
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
