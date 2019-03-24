import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              alt="avatar"
              className="avatar-img"
              src="http://www.newdesignfile.com/postpic/2011/02/male-business-avatar-icons_34179.png"
            />
            <div className="banner-text">
              <h1>Full stack web developer</h1>
              <hr />
              <p>
                HTML/CSS/JS | Java | UX/UI | React | Angular | C++ | SQL |
                Material
              </p>
              <div className="social-links">
                {/*LinkedIn*/}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/*LinkedIn*/}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;
