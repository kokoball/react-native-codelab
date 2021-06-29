import React from 'react';
import { Button, Text, View} from 'react-native';
import Container from '../components/Container';

function Form( { navigation }) {
    return (
        <Container>
            <Text>Form</Text>
            <Button 
                title="목록으로"
                onPress={ () => navigation.goBack() }  
            />
        </Container>
    )
}

export default Form;