import React, {  useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from './config.js';
import FitnessForm from './Forms.js';
import FitnessGet from './FitnessGet';
import FitnessUD from './FitnessUD'
const FitnessCreate = () => {
	const initialFitnessState = {
		name: '',
		pullups: '',
	};
	const [fitness, setFitness] = useState(initialFitnessState);
	const [createdId, setCreatedId] = useState(null);
	const [error, setError] = useState(false);

	const handleChange = (event) => {
		// Every time the user types or pastes something
		// inside an input field in the form, the onChange
		// event listener is fired and calls handleChange.
		// In React, when we want to use the event asynchronously
		// we should call event.persist().  Learn more here:
		// https://reactjs.org/docs/events.html#event-pooling
		event.persist();
		// We'll get the value from the input that was changed
		// using event.target.value.
		// We'll use the name of the input to find out which
		// property in our state object to update using
		// event.target.name.  MAKE SURE THE INPUT HAS A NAME
		// and the name matches the property name in the object
		// exactly.
		// With the spread operator (watch this great video if
		// you're not really clear on how spread works:
		// https://www.youtube.com/watch?v=pYI-UuZVtHI) we can
		// spread the current movies properties and values into
		// the new state object and then we override the one
		// with the changed value.
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
			// We're going to update state so there's a re-render
			// By setting updated to true, we use this value to
			// render a Redirect component from react-router-dom
			// and take the user back to the "show" route which will
			// display the newly updated movie.
			.then((data) => {
				setCreatedId(data.id);
			})
			.catch(() => {
				// Update the state if there was an error
				// so we can give feedback to the user!
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
