import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import FitnessGet from './FitnessGet';
import { Link, Route, Switch } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}));

export default function BasicTextFields() {
	const classes = useStyles();

	return (
		<>
		<form>
			<TextField id='filled-basic' label='Name' variant='filled' />
			<TextField id='filled-basic' label='Pullups' variant='filled' />
			<TextField id='filled-basic' label='Situps' variant='filled' />
			<TextField id='filled-basic' label='Run Time' variant='filled' />
		</form>
		<FitnessGet />
		</>
	);
}
