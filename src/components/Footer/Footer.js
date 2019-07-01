import React from "react";

import Container from "components/Container";

import "./footer.css";

function Footer(props) {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__copyright">
          &copy;&nbsp;{new Date().getFullYear()} Velichko Konstantin
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
