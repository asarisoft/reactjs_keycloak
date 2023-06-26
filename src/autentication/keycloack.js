import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "https://keycloak.bawana.com/auth/",
  realm: "bawana",
  clientId: "imam-test",
});


export default keycloak;
