import React from 'react';
import { Text } from 'react-native';
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';


// 구조 분해 할당, Destructuring Assignment
function List( { navigation } ) {
    return (
        <Container>
            <Text>List</Text>
            <Button 
                title="디테일 페이지로"
                onPress={ () => navigation.navigate("Detail") }
            />
            <Button 
                title="작성 페이지로"
                onPress={ () => navigation.navigate("Form") }
            />
        </Container>
    )
}

export default List;