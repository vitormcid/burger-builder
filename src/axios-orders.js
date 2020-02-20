import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-2b6e6.firebaseio.com/'
});

export default instance;