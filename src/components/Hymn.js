import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper className={classes.paper}>Marines Hymn</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						From the Halls of Montezuma To the shores of Tripoli; We fight our
						country's battles In the air, on land, and sea; First to fight for
						right and freedom And to keep our honor clean; We are proud to claim
						the title Of United States Marine. Our flag's unfurled to every
						breeze From dawn to setting sun; We have fought in every clime and
						place Where we could take a gun; In the snow of far-off Northern
						lands And in sunny tropic scenes, You will find us always on the job
						The United States Marines. Here's health to you and to our Corps
						Which we are proud to serve; In many a strife we've fought for life
						And never lost our nerve. If the Army and the Navy Ever look on
						Heaven's scenes, They will find the streets are guarded By United
						States Marines.
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwpSn7ZiN0SMOPAyQq5YovbWEKC2z3e5d3g&usqp=CAU' alt="#"/>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
