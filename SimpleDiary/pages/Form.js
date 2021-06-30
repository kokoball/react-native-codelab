import React from 'react';
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components/native';

const Label = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
`;

const Input = styled.TextInput`
    width: 100%;
    border: 1px solid #666666;
    padding: 8px;
    font-size: 20px;
    margin-bottom: 12px;
`;

function Form({ navigation }) {
    const [date, setDate] = React.useState('');
    const [text, setText] = React.useState('');
    return (
        <Container>
            <Contents>
                <Label>날짜</Label>
                <Input
                    placeholder={'YYYY-MM-DD 형식으로 입력하세요'}
                    value={date}
                    onChangeText= {value =>setDate(value)}
                    
                />

                <Label>내용</Label>
                <Input
                    multiline={true}
                    style={{ height: 200 }}
                    value={text}
                    onChangeText={value=>setText(value)}
                />
            </Contents>
            <Button onPress={ () => navigation.goBack() }>
                저장
            </Button>
        </Container>
    )
}

export default Form;