import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Nav from './Nav';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: 'red',
	},
	title: {
		flexGrow: 1,
	},
	barColor: {
		background: 'blue',
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.barColor} position='static'>
				<Toolbar>
					<Nav />

					<Typography variant='h4' className={classes.title}>
						United States Marine Corps
					</Typography>
					<Typography variant='h6'>
						Before Bootcamp
						<br />
						Study Guide
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
