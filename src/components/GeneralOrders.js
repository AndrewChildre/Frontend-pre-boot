import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	toptitle: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: 'blue',
		background: 'red',
	},
	bodyColors: {
		color: 'white',
		background: 'blue',
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid
				alignItems='stretch'
				className={classes.bodyColors}
				container
				spacing={3}>
				<Grid item xs={12}>
					<Typography variant='h3'>
						<Paper className={classes.toptitle}>General Orders</Paper>
					</Typography>
				</Grid>
				<Grid item sm={6}>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WqmuMQUO-h-M59CM1XnE3hbDEJjBSVbIpw&usqp=CAU'
						alt='moto'
					/>
				</Grid>
				<Grid item sm={6}>
					<Typography variant='h5'>
						Take charge of this post and all government property in view. When
						on duty as a guard or sentry, you are in charge of your area and
						have the authority to stop and question any rank who seeks to pass
						your area.
					</Typography>
				</Grid>
				<Grid item sm={6}>
					<Typography variant='h5'>
						Walk my post in a military manner, keeping always on the alert and
						observing everything that takes place within sight or hearing. Stay
						observant with keen attention to details. It is easy to get
						complacent after many hours on duty - especially if you have not had
						many people to deal with. But your ability to pay attention to your
						surroundings will save your life and others.
					</Typography>
				</Grid>
				<Grid item sm={6}>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHuQ-zgd6_Jfdct4NrdYqraSVcqgQeJWaFg&usqp=CAU'
						alt='moto'
					/>
				</Grid>
				<Grid item sm={6}>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsqhg5K5EJnTahobqO4LDqqGD1d7i6dWSJJg&usqp=CAU'
						alt='moto'
					/>
				</Grid>
				<Grid item sm={6}>
					<Typography variant='h5'>
						Report all violations of orders I am instructed to enforce. You will
						have a written log to keep track of all events that occurred while
						on watch. Record everything, but report anyone not following the
						rules.
					</Typography>
				</Grid>
				<Grid item sm={6}>
					<Typography variant='h5'>
						To repeat all calls from posts more distant from the guardhouse than
						my own. Pass the word to your fellow members of the guard either by
						radio, land line, signal, or vocal.
					</Typography>
				</Grid>
				<Grid item sm={6}>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJSoQVS7W6R2ywENCKUeTm4dgRioNX2iIHhA&usqp=CAU'
						alt='moto'
					/>
				</Grid>
				<Grid item sm={6}>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpVNzCMwM8oJ8txpIeT-2Yj5e8Q0ckQBa8g&usqp=CAU'
						alt='moto'
					/>
				</Grid>

				<Grid item sm={6}>
					<Typography variant='h5'>
						Quit my post only when properly relieved. Do not leave your post,
						until someone has arrived to take your place.
					</Typography>
				</Grid>

				<Grid item sm={6}>
					<Typography variant='h5'>
						To receive, obey, and pass on to the sentry who relieves me, all
						orders from the Commanding Officer, Officer of the Day, Officers,
						and Non-Commissioned Officers of the guard only. Make sure you pass
						down all details of the watch and any special orders given during
						your duty day to the person who relieves you.
					</Typography>
				</Grid>
				<Grid item sm={6}>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZY6o9tB9mdHkYLDBH_jJfBzSNEV0Qk9Fow&usqp=CAU'
						alt='moto'
					/>
				</Grid>
				<Grid item sm={6}>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4navTR4gMnG7rL_4pNXntp_QMQN52k2erNg&usqp=CAU'
						alt='moto'
					/>
				</Grid>
				<Grid item sm={6}>
					<Typography variant='h5'>
						Talk to no one except in the line of duty. It is all business when
						on duty. No cellphones, texting, or other business but protecting
						and guarding your area is what you do.
					</Typography>
				</Grid>

				<Grid item sm={6}>
					<Typography variant='h5'>
						Give the alarm in case of fire or disorder. Anytime a major
						disruption or danger occurs, sound the alarm and call for back up.
					</Typography>
				</Grid>
				<Grid item sm={6}>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9Qz3RwCSv-mIiW5GmwcINaDKXkHZInzGsw&usqp=CAU'
						alt='moto'
					/>
				</Grid>
				<Grid item sm={6}>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH1bqiOIZHB-Q9s_iLbOul7ZmcZQyQ15qong&usqp=CAU'
						alt='moto'
					/>
				</Grid>
				<Grid item sm={6}>
					<Typography variant='h5'>
						To call the Corporal of the Guard in any case not covered by
						instructions. When not sure of a situation, ask your superiors to
						confirm.
					</Typography>
				</Grid>

				<Grid item sm={6}>
					<Typography variant='h5'>
						Salute all officers and all colors and standards not cased. Standard
						military courtesy applies as senior members and color guard pass.
					</Typography>
				</Grid>
				<Grid item sm={6}>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH1bqiOIZHB-Q9s_iLbOul7ZmcZQyQ15qong&usqp=CAU'
						alt='moto'
					/>
				</Grid>
				<Grid item sm={6}>
					<Typography variant='h5'>
						Be especially watchful at night and during the time for challenging,
						to challenge all persons on or near my post, and to allow no one to
						pass without proper authority. Stay vigilant! Make sure everyone who
						enters the area you protect are authorized.
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
}
