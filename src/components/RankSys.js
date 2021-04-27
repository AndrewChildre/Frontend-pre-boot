import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(3),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		marginLeft: 10,
		marginRight: 10,
		
	},
	toptitle: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: 'blue',
		background: 'red',

	},
	bodyColors: {
		background: 'blue',
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid item xs={12}>
				<Paper className={classes.toptitle}>
					<Typography variant='h3'>Rank Structure</Typography>
				</Paper>
			</Grid>
			<Grid spacing={2} className={classes.bodyColors} container>
				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images02.military.com/sites/default/files/styles/full/public/2019-01/marines-insignia-pfc.png.jpg?itok=7E9oF3cN'
							alt=''
						/>
						<Divider />
						<p>
							PFC
							<br />
							Private First Class
						</p>
					</Paper>
				</Grid>

				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images03.military.com/sites/default/files/styles/full/public/2019-01/marines-insignia-lcpl.png.jpg?itok=QTUWS5Ak'
							alt=''
						/>
						<Divider />
						<p>
							LCPL
							<br />
							Lance Corporal
						</p>
					</Paper>
				</Grid>

				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images03.military.com/sites/default/files/styles/full/public/2019-01/marines-insignia-cpl.png.jpg?itok=twvWQFQX'
							alt=''
						/>
						<Divider />
						<p>
							CPL
							<br />
							Corporal
						</p>
					</Paper>
				</Grid>

				<Grid item xs={3}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images01.military.com/sites/default/files/styles/full/public/2019-01/marines-insignia-sgt.png.jpg?itok=aCUhYaG7'
							alt=''
						/>
						<Divider />
						<p>
							SGT
							<br />
							Sargent
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images03.military.com/sites/default/files/styles/full/public/2019-01/marines-insignia-ssgt.png.jpg?itok=zmeOPKXz'
							alt=''
						/>
						<Divider />
						<p>
							SSGT
							<br />
							Staff Sargent
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images05.military.com/sites/default/files/styles/full/public/2019-01/marines-insignia-gysgt.png.jpg?itok=QLnPI7pm'
							alt=''
						/>
						<Divider />
						<p>
							GYSGT
							<br />
							Gunnery Sargent
						</p>
					</Paper>
				</Grid>

				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '50%', height: 'auto', paddingBottom: 20 }}
							src='https://images03.military.com/sites/default/files/styles/full/public/2019-01/marines-insignia-msgt.png.jpg?itok=K60N281j'
							alt=''
						/>
						<img
							style={{ width: '50%', height: 'auto', paddingBottom: 20 }}
							src='https://images05.military.com/sites/default/files/styles/full/public/2019-01/marines-insignia-1stsgt.png.jpg?itok=ZYnM8zv6'
							alt='fst'
						/>
						<Divider />
						<p>
							MSGT
							<br />
							Master Sargent
							<br /> FSGT
							<br />
							First Sargent
						</p>
					</Paper>
				</Grid>

				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '50%', height: 'auto', paddingBottom: 20 }}
							src='https://images05.military.com/sites/default/files/styles/full/public/2019-01/marines-insignia-mgysgt.png.jpg?itok=Ld_gzw-S'
							alt=''
						/>
						<img
							style={{ width: '50%', height: 'auto', paddingBottom: 20 }}
							src='https://images05.military.com/sites/default/files/styles/full/public/2019-01/marines-insignia-sgtmaj.png.jpg?itok=0oZXFcdN'
							alt='fst'
						/>
						<Divider />
						<p>
							MGySgt
							<br />
							Master Gunnery Sargent
							<br />
							SgtMaj
							<br />
							Sargent Major
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images01.military.com/sites/default/files/styles/full/public/2019-01/marines-insignia-smmc.png.jpg?itok=DYh3a8he'
							alt=''
						/>
						<Divider />
						<p>
							SgtMaj USMC
							<br />
							Sargent Major if the Marine Corps
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 80 }}
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_r3zpNoVzQXYs7fcJ9_g79UG9H8WSJWSkSw&usqp=CAU'
							alt=''
						/>
						<Divider />
						<p>
							Enlisted
							<br />
							Dress Blues
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images04.military.com/sites/default/files/styles/full/public/2019-01/2nd-lieutenant-insignia.jpg?itok=lW4SOrqz'
							alt=''
						/>
						<Divider />
						<p>
							2ndLt
							<br />
							Second Lieutenant
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images05.military.com/sites/default/files/styles/full/public/2019-01/1st-lieutenant-insignia.jpg?itok=_xMXDKgs'
							alt=''
						/>
						<Divider />
						<p>
							1stLt
							<br />
							First Lieutenant
						</p>
					</Paper>
				</Grid>

				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images02.military.com/sites/default/files/styles/full/public/2019-01/captain-insignia.jpg?itok=W2kWb6tz'
							alt=''
						/>
						<Divider />
						<p>
							Capt
							<br />
							Captain
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images02.military.com/sites/default/files/styles/full/public/2019-01/major-insignia.jpg?itok=07vwDjLu'
							alt=''
						/>
						<Divider />
						<p>
							Maj
							<br />
							Major
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images05.military.com/sites/default/files/styles/full/public/2019-01/lieutenant-colonel-insignia.jpg?itok=FGbanJr-'
							alt=''
						/>
						<Divider />
						<p>
							LtCol
							<br />
							Lieutenant Colonel
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images02.military.com/sites/default/files/styles/full/public/2019-01/colonel-insignia.jpg?itok=6ODgPfwU'
							alt=''
						/>
						<Divider />
						<p>
							Col
							<br />
							Colonel
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images05.military.com/sites/default/files/styles/full/public/2019-01/brigadier-general-insignia.jpg?itok=6f6PLq1i'
							alt=''
						/>
						<Divider />
						<p>
							BGen
							<br />
							Brigadier General
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images01.military.com/sites/default/files/styles/full/public/2019-01/major-general-insignia.jpg?itok=MwBSSrAw'
							alt=''
						/>
						<Divider />
						<p>
							MajGen
							<br />
							Major General
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images02.military.com/sites/default/files/styles/full/public/2019-01/lieutenant-general-insignia.jpg?itok=9QJf_2om'
							alt=''
						/>
						<Divider />
						<p>
							LtGen
							<br />
							Lieutenant General
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://images05.military.com/sites/default/files/styles/full/public/2019-01/general-insignia.jpg?itok=0gRyEBXh'
							alt=''
						/>
						<Divider />
						<p>
							Gen
							<br />
							General
						</p>
					</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper className={classes.paper}>
						<img
							style={{ width: '100%', height: 'auto', paddingBottom: 20 }}
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuFEgFauzsGY6kFoZVURSr--VK087C_Xkehg&usqp=CAU'
							alt=''
						/>
						<Divider />
						<p>Warrant Officer</p>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
