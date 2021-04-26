import React from 'react';

const FitnessForm = ({ fitness, handleSubmit, handleChange }) => (
	<form onSubmit={handleSubmit}>
		
		<input
			placeholder='Name'
			value={fitness.name}
			name='name'
			onChange={handleChange}
			required
			id='name'
		/><br/>

		<input
			placeholder='pullups'
			value={fitness.pullups}
			name='pullups'
			onChange={handleChange}
			id='pullups'
		/><br/>
		<input
			placeholder='Situps'
			value={fitness.situps}
			name='situps'
			onChange={handleChange}
			required
			id='situps'
		/><br/>
		<input
			placeholder='Runtime'
			value={fitness.runtime}
			name='runtime'
			onChange={handleChange}
			required
			id='runtime'
		/><br/>

		<button class='btn-1' type='submit'>Submit</button>
	</form>
);

export default FitnessForm;
