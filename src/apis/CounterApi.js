import axios from 'axios';

class CounterApi {

    static getCounterSize(){
        const GET_URL ="https://5e9ed3a0fb467500166c47b3.mockapi.io/counters";
        return axios.get(GET_URL);

    }

    static putCounterSize(){
        const PUT_URL ="https://5e9ed3a0fb467500166c47b3.mockapi.io/counters/1";
        return axios.put(PUT_URL);

    }
}

export default CounterApi;