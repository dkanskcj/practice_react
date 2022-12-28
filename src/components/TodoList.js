import React from "react";
import styled from "styled-components";

class TodoList extends React.Component{
    state = {
        todoList: []
    }
    render() {
        console.log(this.state.todoList)
        return(
            <Container>
                <Input placeholder="오늘의 할 일" onKeyPress={this.handleInputKeyPress}></Input>
            </Container>
        );
    }

    handleInputKeyPress = event => {
        const { target: { value }} = event;
        if(event.key === "Enter"){
            console.log(value)
            this.setState(
                state => ({ todoList: [...state.todoList, value]}),
                () => localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
            );
            event.target.value = "";
        }
    }
}

const Container = styled.div`
    margin-top: 44px;
    text-align: center;
`;

const Input = styled.input`
    width: 80%;
    height: 33px;
    padding: 7px;
    outline: none;
    border: 1px solid silver;
    border-radius: 11px;
    background: transparent;
    font-size: 22px;
    color: white;
`;

export default TodoList;