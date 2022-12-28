import React from "react";
import styled from "styled-components";
import Clock from "./Clock";
import TodoList from "./Todo";

const Content = () => {
    return (
        <Container>
            <Clock />
            <TodoList />
        </Container>
    )
};

const Container = styled.div`
    position: absolute;
    right: 0;
    top: 33px;
    width: 500px;
    height: calc(100% - 33px);
    color: white;
    /* background-color: white; */
`
export default Content;