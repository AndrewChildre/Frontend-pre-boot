

import React from 'react';
import { Slide, Fade, Zoom} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import usmc1 from '../assets/usmc1.jpeg';
import usmcsilent from '../assets/usmcsilent.jpeg'
import usmcsymbol from '../assets/usmcsymbol.jpeg'
import Grid from '@material-ui/core/Grid';

const testPage = () => {

  const style = {
		textAlign: 'center',
		background: 'teal',
		// padding: '200px 0',
		fontSize: '30px',
     
	};
     const zoomInProperties = {
				arrows: false,
				scale: 2.4,
			};
         const fadeProperties = {
             arrows: false,
             duration: 3000,
             

         }


    return (
			<div>
				<Zoom {...zoomInProperties}>
					<div>
						<img
							src='https://wallpapercave.com/wp/LUG7jQC.png'
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
							src='https://www.thebalancecareers.com/thmb/iN_LMg4G4D6PjR-4KXt80oPt4ww=/2125x1411/filters:fill(auto,1)/a-red-flag-of-the-united-states-marine-corps-177097072-5a9c640d43a1030037315f99.jpg'
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
									src='https://i.pinimg.com/474x/2c/8d/9d/2c8d9dc29a40f64ce3d55f01280519a5.jpg'
									style={{ objectFit: 'cover', height: 300 }}
									alt='#'
								/>
							</div>
							<div style={{ backgroundColor: 'black' }}>
								<img
									src='https://www.wallpapertip.com/wmimgs/236-2366176_marine-quotes-happy-birthday-united-states-marine-corps.jpg'
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
									src='https://www.decalgirl.com/assets/designs/large/pain.jpg'
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
						<Fade>
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
									src='https://www.teahub.io/photos/full/17-171995_the-united-states-marine-corps-us-marine-full.jpg'
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
									src='https://www.seaforces.org/usmcair/photo19.jpg'
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
									src='https://i2.wp.com/timesofsandiego.com/wp-content/uploads/2017/09/Marine-Corps-Amphibous-Assault-Vehicle.jpg?ssl=1'
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

export default testPage;