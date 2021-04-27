import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Nav from './Nav';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		paddingBottom: 0,
	},
	menuButton: {
		marginRight: theme.spacing(1),
		color: 'white',
	},
	titleHome: {
		flexGrow: 1,
		color: 'red',
	},
	title2: {
		color: 'red',
		paddingBottom: 10
	},
	barColor: {
		background: '#0d24ae',
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.barColor} position='static'>
				<Toolbar >
					<Nav />

					<Typography variant='h4' className={classes.titleHome}>
						United States Marine Corps
					</Typography>
					<Typography variant='h6' className={classes.title2} >
						Before Bootcamp
						<br />
						Study Guide
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
