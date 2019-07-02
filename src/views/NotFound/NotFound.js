import React from "react";

import Container from "components/Container";
import Link from "components/Link";

import { PUBLIC_PATH } from "constants.js";

function NotFound(props) {
  return (
    <Container>
      <h1>Page not found</h1>
      <p>
        Return to <Link to={PUBLIC_PATH}>home page</Link>
      </p>
    </Container>
  );
}

export default NotFound;
