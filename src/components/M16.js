// import React from 'react';

// const M16 = () => {
//     return (
//         <div>
//             <h1>fgf</h1>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz2mjilUje5jsFSpYUkX58zyRIGSAOYHsStw&usqp=CAU" alt="#"/>
//         </div>
//     );
// };

// export default M16;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
	root: {
		width:551,
        margin: 'auto'
	
	},
	media: {
		height: 480,
        width: 550,
	},
});

export default function MediaCard() {
	const classes = useStyles();

	return (
		<Container maxWidth='sm'>
			<Card className={classes.root}>
				<CardActionArea
				// style={{ minHeight: '50vh' }}
				>
					<CardMedia
						className={classes.media}
						image='https://qph.fs.quoracdn.net/main-qimg-8cfbde9de0ced9868b6bfa926efe2e44.webp'
						title='Contemplative Reptile'
					/>
					<CardContent>
						<Typography gutterBottom variant='h4' component='h2'>
							M16A4
						</Typography>
						<Typography variant='h6' color='textSecondary' component='p'>
							CALIBER: 5.56x45 NATO (.223 Rem.) WEIGHT: 7.18 lbs (3.26 kg)
							OVERALL LENGTH: 39.5 in. (100.33 cm) BARREL LENGTH: 20 in. (50.8
							cm) RATE OF FIRE: 700-950 RPM EFFECTIVE RANGE: 600 m
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Container>
	);
}
