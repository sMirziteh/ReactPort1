import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={4} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url('https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png') center / cover"
              }}
            >
              React Project
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ornare consequat nibh non fermentum. Nullam aliquet mi
              vel lectus tincidunt.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={4} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url('https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png') center / cover"
              }}
            >
              React Project
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ornare consequat nibh non fermentum. Nullam aliquet mi
              vel lectus tincidunt.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={4} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url('https://cdn-images-1.medium.com/max/945/1*aYD002x4UBQ4iJCRbiKJrg.png') center / cover"
            }}
          >
            Angular Project
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ornare consequat nibh non fermentum. Nullam aliquet mi vel lectus
            tincidunt.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>Website</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={4} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              textShadow:
                "-1px 0 #6bba51, 0 1px #6bba51, 1px 0 #6bba51, 0 -1px #6bba51",
              height: "176px",
              background:
                "url('https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_1527020223/spring-boot.png') center / cover"
            }}
          >
            Java/Spring Project
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ornare consequat nibh non fermentum. Nullam aliquet mi vel lectus
            tincidunt.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{ color: "black" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <Card shadow={4} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              textShadow:
                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
              background:
                "url('http://www.sclance.com/pngs/python-logo-png/python_logo_png_1124086.png') center / cover"
            }}
          >
            Python/Django Project
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ornare consequat nibh non fermentum. Nullam aliquet mi vel lectus
            tincidunt.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{ color: "black" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <Card shadow={4} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url('https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png') center / cover"
            }}
          />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ornare consequat nibh non fermentum. Nullam aliquet mi vel lectus
            tincidunt.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>Java/Spring</Tab>
          <Tab>Python/Django</Tab>
          <Tab>C++</Tab>
        </Tabs>

        <Grid>
          <Cell col={3} />
          <Cell col={6}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
