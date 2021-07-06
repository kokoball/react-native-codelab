import AsyncStorge from '@react-native-async-storage/async-storage';
import axios from 'axios';

async function fetch(url) {
    let result = await AsyncStorge.getItem(url);
    let timestamp = await AsyncStorge.getItem('T' + url);
    if (result !== null) {
        //현재 시간이랑 timestamp
        timestamp = Number(timestamp);
        const now = new Date().getTime();
        if (now - timestamp < 86400000) {
            console.log('캐시 사용됨');
            return JSON.parse(result);
        }
    }

    const response = await axios.get(url);
    result = response.data;
    AsyncStorge.setItem(url, JSON.stringify(result));
    AsyncStorge.setItem('T' + url, new Date().getTime().toString());
    return result;
}

export default fetch;