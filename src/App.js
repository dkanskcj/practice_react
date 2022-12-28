import React from "react";
import styled from "styled-components";
import Content from "./components/Content";
// import React from "react";

// const App = () => <div>App</div>;

// export default App;

class App extends React.Component {
  state = {
    query: "star"
  };
  render() {
    return (
    <Container query={this.state.query}>
      <Content />
    </Container>
    );
  }

  handleInputKeyPress = event => {
    if (event.key === "Enter") {
      // console.log(event.target.value);
      this.setState({
        query: event.target.value
      });
      console.log(event.target.value)
      event.target.value = "";
    }
  };
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/1920x1080?${props => props.query});
  background-size: cover;
`;

export default App;