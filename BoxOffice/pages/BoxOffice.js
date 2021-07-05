import React from 'react'
import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
    flex: 1;
`;

const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
`;

const ListItem = styled.View`

`;

const MovieName = styled.Text`
    font-size: 10px;
    font-weight: bold;
`;

function BoxOffice(props) {
    return (
        <Container>
            <Title>박스 오피스</Title>
            <ListItem>
                <MovieName>반도</MovieName>
            </ListItem>
            <ListItem>
                <MovieName>#살아있다</MovieName>
            </ListItem>
        </Container>
    )
}