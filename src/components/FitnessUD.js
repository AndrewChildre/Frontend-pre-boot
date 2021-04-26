import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { APIURL } from './config.js';

const Fitness = ({ match }) => {
	const [deleted, setDeleted] = useState(false);
	const [error, setError] = useState(false);
	const [fitness, setFitness] = useState(null);

	useEffect(() => {
		const url = `${APIURL}/results/${match.params.id}`;
		fetch(url)
			.then((response) => response.json())
			.then(setFitness)
			.catch(() => {
				setError(true);
			});
	}, []);

	const onDeleteFitness = (event) => {
		const url = `${APIURL}/results/${match.params.id}`;
		fetch(url, { method: 'DELETE' })
			.then((res) => {
				setDeleted(true);
			})
			.catch(console.error);
	};

	if (deleted) {
		return <Redirect to='/results' />;
	}

	if (error) {
		return <div>Sorry, there was a problem</div>;
	}

	if (!fitness) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h3>Name: {fitness.name}</h3>
			<p>Pullups: {fitness.pillups}</p>
			<button onClick={onDeleteFitness}>Delete Fitness</button>
			<Link to={`/results/${match.params.id}/edit`}>Update Movie</Link>
		</div>
	);
};

export default Fitness;
