import React from 'react';
import { Fade, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import usmcAnphib from '../assets/usmcAnphib.jpeg';
import usmcsilent from '../assets/usmcsilent.jpeg';
import usmcHelo from '../assets/usmcHelo.jpeg';
import Grid from '@material-ui/core/Grid';
import usmcCombat from '../assets/usmcCombat.jpeg';
import usmcPain from '../assets/usmcPain.jpeg';
import usmcReagan from '../assets/usmcReagan.jpeg';
import usmcSemper from '../assets/usmcSemper.jpeg';
import usmcFlag from '../assets/usmcFlag.jpeg';
import usmcFront from '../assets/usmcFront.webp';
const Home = () => {
	const zoomInProperties = {
		arrows: false,
		scale: 2.4,
	};
	const fadeProperties = {
		arrows: false,
		duration: 3000,
	};
	const fadeProperties2 = {
		arrows: false,
		duration: 3500,
	};

	return (
		<div>
			<Zoom {...zoomInProperties}>
				<div>
					<img
						src={usmcFront}
						alt='#'
						style={{
							objectFit: 'cover',

							height: 400,
							width: '100vw',
						}}
					/>
				</div>
				<div>
					<img
						src={usmcsilent}
						style={{
							objectFit: 'cover',
							height: 400,
							width: '100vw',
							objectPosition: 'left 38%',
						}}
						alt='#'
					/>
				</div>
				<div>
					{' '}
					<img
						src={usmcFlag}
						style={{
							objectFit: '',

							height: 400,
							width: '100vw',
						}}
						alt='#'
					/>
				</div>
			</Zoom>

			<Grid container spacing={0}>
				<Grid item xs={12} md={4}>
					<Fade {...fadeProperties}>
						<div style={{ backgroundColor: 'black' }}>
							<img
								src={usmcSemper}
								style={{ objectFit: 'cover', height: 300 }}
								alt='#'
							/>
						</div>
						<div style={{ backgroundColor: 'black' }}>
							<img
								src={usmcReagan}
								style={{
									objectFit: 'cover',

									height: 300,
								}}
								alt='#'
							/>
						</div>
						<div style={{ backgroundColor: 'black' }}>
							{' '}
							<img
								src={usmcPain}
								style={{
									objectFit: 'cover',

									height: 300,
								}}
								alt='#'
							/>
						</div>
					</Fade>
				</Grid>
				<Grid item xs={12} md={8}>
					{' '}
					<Fade {...fadeProperties2}>
						<div>
							<img
								src='https://www.stripes.com/news/migrated.image.Image_69200221.jpg/alternates/LANDSCAPE_910/U.S.%20Marines%20of%20Charlie%20Company%2C%201st%20Battalion%2C%203r'
								style={{
									objectFit: 'cover',
									width: '50vh',
									height: 300,
								}}
								alt='#'
							/>
						</div>

						<div>
							{' '}
							<img
								src={usmcCombat}
								style={{
									objectFit: 'cover',
									objectPosition: '10% 50%',
									width: '50vh',
									height: 300,
								}}
								alt='#'
							/>
						</div>
						<div>
							{' '}
							<img
								src={usmcHelo}
								style={{
									objectFit: 'cover',

									width: '50vh',
									height: 300,
								}}
								alt='#'
							/>
						</div>
						<div>
							{' '}
							<img
								src={usmcAnphib}
								style={{
									objectFit: 'cover',
									borderRadius: 10,
									width: '50vh',
									height: 300,
								}}
								alt='#'
							/>
						</div>
					</Fade>
				</Grid>
			</Grid>
		</div>
	);
};

export default Home;
