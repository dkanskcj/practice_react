import React from "react";
import styled from "styled-components";

class TodoRow extends React.Component {
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.todo === nextProps.todo){
            return false;
        }
        return true;
    }
    render() {
        const { index, todo, handleClickRemove } = this.props;
        console.log(todo ,"랜더링중?");
        return (
            <Container onClick={() => handleClickRemove(index)}>
                {index+1}. {todo}
            </Container>
        );
    }
}

const Container = styled.div`
  margin: 13px 0;
  width: 80%;
  text-align: left;
`;

const Text = styled.div`
  display: inline-block;
  cursor: pointer;
  font-size: 32px;
  &:hover {
    opacity: 0.4;
  }
`;
export default TodoRow;