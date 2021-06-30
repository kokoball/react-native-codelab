import React from 'react';
import Container from '../components/Container';
import Contents from '../components/Contents';
import styled from 'styled-components/native';

const Text = styled.Text`
    font-size:  20px;
    line-height: 20px;
`;

function Detail( { navigation }) {
    return (
            <Container>
                <Contents>
                    <Text>{ 'Lorem ~~'}</Text>
                </Contents>
            </Container>
    )
}

export default Detail;