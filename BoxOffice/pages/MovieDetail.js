import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';
import moment from 'moment';


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

const Description = styled.Text`
    font-size: 18px;
    margin: 4px 12px;
    line-height: 28px;
`;

const Back = styled.Button`

`;

function MovieDetail(props) {
    const [info, setInfo] = React.useState(null);
    React.useEffect(() => {
        let url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/company/searchCompanyInfo.json?key=25939726bc7824dd2668cfa62d1bb1a8';
        url += '&movieCd=' + props.route.params.movieCd;
        axios.get(url)
            .then(response => {
                setInfo(response.data.movieInfoResult.movieInfo);
            })
            .catch(error => {
                alert(error.message);
            });
    }, []);
    return (
        <Container>
            <Contents>
                {info === null ? (
                    <ActivityIndicator size={'large'}/>
                ) : (
                    <>
                    <Title>{info.movieNm}</Title>
                    <Description>제작년도 : {info.prdtYear}년</Description>
                    <Description>개봉일 : {moment(info.openDt, 'YYYYMMDD').format('YYYY년 MM월 DD일')}</Description>
                    <Description>상영시간 : {info.showTm}분</Description>
                    <Description>국가 : {info.nations.map(item => item.nationNM).join(', ')}</Description>
                    <Description>감독 : {info.direcotrs.map(item => item.peopleNm).join(', ')}</Description>
                    <Description>배우 : {info.actors.map(item => item.nationNM).join(', ')}</Description>
                    </>
                )}                
                <Back title={'돌아가기'} onPress={() => props.navigation.goBack()}/>
            </Contents> 
        </Container>
    )

}

export default MovieDetail;