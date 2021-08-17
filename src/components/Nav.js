import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	drw: {
		color: 'silver',
		height: 48,
		padding: '20px 30px',
		'&:hover': {
			color: '#D4AF37',
		},
	},
	drawerBtn: {
		background: 'black',
		paddingBottom: 70,
		color: '#D4AF37',
		fontFamily: 'STIX Two Text, serif',
		fontSize: 50,
		'&:hover': {
			color: 'red',
		},
	},
	fonts: {
		color: 'silver',
		'&:hover': {
			color: '#D4AF37',
		},
		paddingBottom: 17,
	},
});

const Nav = () => {
	const classes = useStyles();
	const [state, setState] = useState(false);
	const ToggleDrawer = (open) => (event) => {
		setState(open);
	};
	const list = () => (
		<div className={classes.drawerBtn} onClick={ToggleDrawer(false)}>
			<List className={classes.drw}>
				<Typography variant='h3'>
					<ListItem className={classes.drawerBtn} button>
						USMC
					</ListItem>
				</Typography>
			</List>
		</div>
	);

	return (
		<div>
			<Button className={classes.drw} onClick={ToggleDrawer(true)}>
				<MenuIcon />
			</Button>

			<Drawer anchor={'left'} open={state} onClose={ToggleDrawer(false)}>
				{list()}

				<List style={{  backgroundColor: 'black'}}>
					<ListItem>
						<Button href='/'>
							<Typography className={classes.fonts} variant='h5'>
								Home
							</Typography>
						</Button>
					</ListItem>

					<ListItem>
						<Button href='/values'>
							<Typography className={classes.fonts} variant='h5'>
								Values
							</Typography>
						</Button>
					</ListItem>
					<ListItem>
						<Button color='primary' href='/fitness'>
							<Typography className={classes.fonts} variant='h5'>
								Fitness
							</Typography>
						</Button>
					</ListItem>

					<ListItem>
						<Button color='primary' href='/leadership'>
							<Typography className={classes.fonts} variant='h5'>
								Leadership
							</Typography>
						</Button>
					</ListItem>

					<ListItem>
						<Button color='primary' href='/orders'>
							<Typography className={classes.fonts} variant='h5'>
								General
								<br />
								Orders
							</Typography>
						</Button>
					</ListItem>

					<ListItem>
						<Button color='primary' href='/rank'>
							<Typography className={classes.fonts} variant='h5'>
								Rank System
							</Typography>
						</Button>
					</ListItem>

					<ListItem>
						<Button color='primary' href='/hymn'>
							<Typography className={classes.fonts} variant='h5'>
								Marine Hymn{' '}
							</Typography>
						</Button>
					</ListItem>

					<ListItem>
						<Button color='primary' href='/M16'>
							<Typography style={{paddingBottom: 100}} className={classes.fonts} variant='h5'>
								M16A4 Rifle
							</Typography>
						</Button>
					</ListItem>
				</List>
			</Drawer>
		</div>
	);
};

export default Nav;
