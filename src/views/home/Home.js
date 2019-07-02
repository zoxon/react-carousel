import React from "react";
import Carousel from "components/Carousel";
import Header from "components/Header";
import Footer from "components/Footer";
import Container from "components/Container";

import "./home.css";
import "components/Carousel/styles/core.css";
import "components/Carousel/styles/theme/theme.default.css";

const options = {
  arrows: true,
  bullets: true,
  autoplay: 3000
};

function Home(props) {
  return (
    <div className="home-page">
      <Header className="home-page__header" />

      <main className="home-page__body">
        <Carousel {...options}>
          <img
            src={require("./slides/image1.jpg")}
            alt="North shore (Author 翔音)"
          />
          <img
            src={require("./slides/image2.jpg")}
            alt="Orange clouds over mountains (Author Nitish Meena)"
          />
          <img
            src={require("./slides/image3.jpg")}
            alt="Icy blue mountain range (Author Elena Prokofyeva)"
          />
          <img
            src={require("./slides/image4.jpg")}
            alt="Blue lake and green shore (Author Andreas Gücklhorn)"
          />
        </Carousel>

        <Container className="home-page__text">
          <section>
            <h2 id="get-started">Installation</h2>
            <h3>Download</h3>
            <p>
              Download latest files from the Github:
              <br />
              <a
                href="https://github.com/zoxon/react-carousel/archive/master.zip"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download latest release
              </a>
            </p>
          </section>

          <section>
            <h2>Initialization</h2>
            <pre className="code">
              <code className="code__container">{`import React from "react";
import ReactDOM from "react-dom";
import Carousel from "components/Carousel";

import "components/Carousel/styles/core.css";
import "components/Carousel/styles/theme/theme.default.css";

function App(props) {
  return (
    <Carousel arrows bullets autoplay={3000}>
      <img src="/images/slide1.jpg" alt="Slide 1" />
      <img src="/images/slide2.jpg" alt="Slide 2" />
      <img src="/images/slide3.jpg" alt="Slide 3" />
    </Carousel>
  );
}

ReactDOM.render(<App />, appElement);`}</code>
            </pre>
          </section>

          <section>
            <h2>Props</h2>

            <table>
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>children</td>
                  <td>Node</td>
                  <td>Required</td>
                  <td>Slides, is required prop</td>
                </tr>
                <tr>
                  <td>arrows</td>
                  <td>Boolean</td>
                  <td>false</td>
                  <td>Toggle arrows visibility</td>
                </tr>
                <tr>
                  <td>bullets</td>
                  <td>Boolean</td>
                  <td>false</td>
                  <td>Toggle bullets visibility</td>
                </tr>
                <tr>
                  <td>autoplay</td>
                  <td>Number</td>
                  <td>0</td>
                  <td>Autoplay interval in milliseconds</td>
                </tr>
              </tbody>
            </table>
          </section>
        </Container>
      </main>

      <Footer className="home-page__footer" />
    </div>
  );
}

export default Home;
