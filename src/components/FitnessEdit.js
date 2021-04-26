import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from './config.js';
import FitnessForm from './Forms.js';

const FitnessEdit = ({ match }) => {
	const [fitness, setFitness] = useState(null);
	const [createdId, setCreatedId] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		const url = `${APIURL}/results/${match.params.id}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setFitness({ name: data.name, title: data.pullups });
			})
			.catch(() => {
				setError(true);
			});
	}, []);

	const handleChange = (event) => {
		event.persist();

		setFitness({
			...fitness,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `${APIURL}/results/`;

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(fitness),
		})
			.then((response) => response.json())

			.then((data) => {
				setCreatedId(data._id);
			})
			.catch(() => {
				setError(true);
			});
	};

	if (createdId) {
		return <Redirect to={`/fitness/${createdId}`} />;
	}
	return (
		<>
			<h3>Create a Movie</h3>
			{error && <p>Something went wrong... Please try again!</p>}
			{fitness && (
				<FitnessForm
					fitness={fitness}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			)}
		</>
	);
};

export default FitnessEdit;
