import React from 'react';

const FitnessForm = ({ fitness, handleSubmit, handleChange }) => (
	<form onSubmit={handleSubmit}>
		<label htmlFor='name'>Name</label>
		<input
			placeholder='Name'
			value={fitness.name}
			name='name'
			onChange={handleChange}
			required
			id='name'
		/>

		<label htmlFor='pullups'>Pullups</label>
		<input
			placeholder='pullups'
			value={fitness.pullups}
			name='pullups'
			onChange={handleChange}
			id='pullups'
		/>

		<button type='submit'>Submit</button>
	</form>
);

export default FitnessForm;
