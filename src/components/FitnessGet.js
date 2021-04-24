
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APIURL } from './config';

const FitnessGet = (props) => {
	const [fitness, setFitness] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
	
		fetch(`${APIURL}/results`)
			.then((response) => response.json())
			.then((data) => {
			
				setFitness(data);
			})
			.catch(() => {
			
				setError(true);
			});
	}, []);
       
	if (error) {
		return <div>Did not get</div>;
	}

	if (fitness.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<ul>
			{fitness.map((fitness) => (
				<li key={fitness.id}>
					<Link to={`/fitness/${fitness.id}`}>{fitness.name}</Link>
				</li>
			))}
		</ul>
	);
};

export default FitnessGet;
