import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from './config.js';
import FitnessForm from './Forms.js';
import FitnessGet from './FitnessGet';
const FitnessCreate = () => {
	const initialFitnessState = {
		name: '',
		pullups: '',
	};
	const [fitness, setFitness] = useState(initialFitnessState);
	const [createdId, setCreatedId] = useState(null);
	const [error, setError] = useState(false);

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
				setCreatedId(data.id);
			})
			.catch(() => {
				setError(true);
			});
	};

	if (createdId) {
		return <Redirect to={`/results/${createdId}`} />;
	}
	return (
		<>
			<h1 class='title'>Physical Fitness Results</h1>
			{error && <p>Something went wrong... Please try again!</p>}
			<FitnessForm
				fitness={fitness}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
			<FitnessGet />
			{/* <FitnessUD /> */}
		</>
	);
};

export default FitnessCreate;
