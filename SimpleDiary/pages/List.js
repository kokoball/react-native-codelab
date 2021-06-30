import React from 'react';
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components/native';

const ListItem = styled.TouchableOpacity`
    width: 100%;
    padding: 12px;
    border-bottom-color: #999999;
`;
const Label = styled.Text`
    font-size: 20px; 
`;
// 구조 분해 할당, Destructuring Assignment
function List( { navigation } ) {
    return (
        <Container>
            <Contents>
                <ListItem onPress= {() => navigation.navigate('Detail')}>
                    <Label>2020-07-01</Label>
                </ListItem>
                <ListItem>
                    <Label>2020-07-02</Label>
                </ListItem>
                <ListItem>
                    <Label>2020-07-03</Label>
                </ListItem>
            </Contents>
            <Button onPress={ ()=> navigation.navigate('Form')}>
                새 일기 작성
            </Button>
        </Container>
    )
}

export default List;