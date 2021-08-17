import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Nav from './Nav';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		paddingBottom: 0,
	},

	titleHome: {
		flexGrow: 1,
		color: '#D4AF37',
		fontFamily: 'STIX Two Text, serif',
		fontSize: 50,
	},
	title2: {
		color: 'silver',
		paddingBottom: 10,
		fontSize: 14,
	},
	barColor: {
		background: 'black',
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.barColor} position='static'>
				<Toolbar>
					<Nav />

					<Typography variant='h4' className={classes.titleHome}>
						United States Marine Corps
					</Typography>
					<Typography variant='h6' className={classes.title2}>
						Before <br /> Bootcamp
						<br />
						Guide
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
