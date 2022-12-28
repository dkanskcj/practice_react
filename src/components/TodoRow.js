import React from "react";
import styled from "styled-components";

const TodoRow = ({ todo, index, handleClickRemove }) => {
    return (
        <Container onClick={() => handleClickRemove(index)}>
            { index }. { todo }
        </Container>
    );
}

const Container = styled.div`
`;

export default TodoRow;