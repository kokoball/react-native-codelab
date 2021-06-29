import React from 'react';
import styled from 'styled-components';

const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background: #000000;
    justift-content: center;
    align-items: center;
`;

const Label = styled.Text`
    font-size: 16px'
    font-weight: bold;
    color: #ffffff;
`;

function Button(props) {
    return (
        <Container onPress={ props.onPress }>
            <Label>{props.children}</Label>
        </Container>
    )
}

export default Button;