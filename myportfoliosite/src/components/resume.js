import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Shelby Mirziteh</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ornare consequat nibh non fermentum. Nullam aliquet mi
              vel lectus tincidunt.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>1 hacker way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 234-2345</p>
            <h5>Email</h5>
            <p>someone.grmail.com</p>
            <h5>Web</h5>
            <p>asdfasdfasdf.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2014}
              endYear={2020}
              schoolName="University of Washington"
              schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse ornare consequat nibh non fermentum. Nullam aliquet mi
            vel lectus tincidunt."
            />
            <Education
              startYear={2018}
              endYear={2028}
              schoolName="Coding Dojo"
              schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse ornare consequat nibh non fermentum. Nullam aliquet mi
            vel lectus tincidunt."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
              startYear={2013}
              endYear={2018}
              jobName="Massage Therapist"
              jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ornare consequat nibh non fermentum. Nullam aliquet mi
              vel lectus tincidunt."
            />
            <Experience
              startYear={2006}
              endYear={2013}
              jobName="Communications Sergeant"
              jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ornare consequat nibh non fermentum. Nullam aliquet mi
              vel lectus tincidunt."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="HTML/CSS" progress={85} />
            <Skills skill="Java" progress={75} />
            <Skills skill="Python" progress={30} />
            <Skills skill="C++" progress={40} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
