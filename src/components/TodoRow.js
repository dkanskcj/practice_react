import React from "react";
import styled from "styled-components";

const TodoRow = ({ todo, index }) => {
    return (
        <Container>
            { index }. { todo }
        </Container>
    );
}

const Container = styled.div`
`;

export default TodoRow;