import React from 'react'
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

const Container = styled.SafeAreaView`
    flex: 1;
`;

const Contents = styled.ScrollView`
    flex: 1;
`;

const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin: 12px;
`;

const ListItem = styled.TouchableOpacity`
    padding:12px;
    border-bottom-color: #e5e5e5 ;
    border-bottom-width: 1px;
    flex-direction: row;
    align-items: center;
`;

const Rank = styled.Text`
    font-size: 14px;
    color: #999999;
    margin-right: 12px;
`;

const MovieName = styled.Text`
    font-size: 10px;
    font-weight: bold;   
`;

function BoxOffice(props) {
    const [list, setList] = React.useState([]);
    React.useEffect(() => {
        // ajax 비동기 자바스크립트 XML     
        axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=25939726bc7824dd2668cfa62d1bb1a8&targetDt=20210703')
            .then(response => {
                //완료가 되었을 때
                setList(response.data.boxOfficeResult.dailyBoxOfficeList);
            })
            .catch(error => {
                // 예외가 발생했을 때
                alert(error.message);
            });
    }, []);
    return (
        <Container>
            <Contents>
                <Title>박스 오피스</Title>
                {list.length === 0 && (
                    <ActivityIndicator size={'large'}/>
                )}
                {list.map(item => (
                    <ListItem key= {item.movieCd}>
                        <Rank>{item.rank}</Rank>
                        <MovieName>{ item.movieNm }</MovieName>
                    </ListItem>
                ))}
            </Contents>
        </Container>
    )
}

export default BoxOffice;