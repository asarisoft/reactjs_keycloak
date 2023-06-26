import React from 'react';
import { Link } from 'react-router-dom';
import { useKeycloak } from "@react-keycloak/web";

function HomePage() {
  const { keycloak } = useKeycloak();
  return (
    <div>
      <h1>Welcome Page</h1>
      {keycloak.authenticated ? (
        <Link to="/about">
          <button>About Page</button>
        </Link>
      ) : (
        <Link to="/auth">
          <button>LOGIN</button>
        </Link>
      )}
    </div>
  );
}

export default HomePage;