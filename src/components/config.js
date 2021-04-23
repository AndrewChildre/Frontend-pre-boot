export const APIURL =
	window.location.hostname === 'localhost'
		? 'http://localhost:8000/api'
		: 'https://pre-boot-backend.herokuapp.com/api';
