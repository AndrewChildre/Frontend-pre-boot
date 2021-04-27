import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,

		
	},
	toptitle: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: 'blue',
		background: 'red',
		width: '100vw',
		
		marginBottom: 80,
	},
	bodyColors: {
		color: 'white',
		 background: 'blue',

	
		},
		subTitle: {
			marginTop: 60,
			paddingBottom: 40
			
			
		}
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
		<div className={classes.root}>
			<Grid
				className={classes.bodyColors}
				container
				direction='column'
				alignItems='center'
				justify='center'
				spacing={0}>
				<Grid item xs={12}>
					<Paper className={classes.toptitle}>
						<Typography variant='h3'>Core Values</Typography>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJSoQVS7W6R2ywENCKUeTm4dgRioNX2iIHhA&usqp=CAU'
						alt='moto'
					/>
				</Grid>
				<Grid className={classes.subTitle} item xs={6}>
					<Typography variant='h3'>HONOR</Typography>
					<br />
					<Typography variant='h6'>
						Honor guides Marines to exemplify the ultimate in ethical and moral
						behavior. Never lie, never cheat or steal; abide by an
						uncompromising code of integrity; respect human dignity and respect
						others. Honor compels Marines to act responsibly, to fulfill our
						obligations and to hold ourselves and others accountable for every
						action.
					</Typography>
				</Grid>
				<Grid className={classes.subTitle} item xs={6}>
					<Typography variant='h3'>COURAGE</Typography>
					<br />
					<Typography variant='h6'>
						Courage is the mental, moral and physical strength ingrained in
						Marines. It carries us through the challenges of combat and aids in
						overcoming fear. It is the inner strength that enables us to do what
						is right, to adhere to a higher standard of personal conduct and to
						make tough decisions under stress and pressure.
					</Typography>
				</Grid>

				<Grid className={classes.subTitle} item xs={6}>
					<Typography variant='h3'>COMMITMENT</Typography>
					<br />
					<Typography variant='h6'>
						Commitment is the spirit of determination and dedication found in
						Marines. It leads to the highest order of discipline for individuals
						and units. It is the ingredient that enables constant dedication to
						Corps and country. It inspires the unrelenting determination to
						achieve victory in every endeavor.
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
}
