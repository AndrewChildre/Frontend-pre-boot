
import { height } from '@material-ui/system';
import React from 'react';
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import usmc1 from '../assets/usmc1.jpeg';
import usmcsilent from '../assets/usmcsilent.jpeg'
import diInspection from '../assets/diInspection.jpeg'
const testPage = () => {

  const style = {
		textAlign: 'center',
		background: 'teal',
		// padding: '200px 0',
		fontSize: '30px',
     
	};


    return (
			<div>
				<Fade>
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
							src='https://wallpapercave.com/wp/wp3511853.jpg'
							style={{
								objectFit: 'cover',
								objectPosition: 'right 47%',
								height: 400,
								width: '100vw',
							}}
							alt='#'
						/>
					</div>
				</Fade>

				{/* <Slide>
					<div style={style}>
						<img
							src={usmcsilent}
							style={{width: '40%',  objectFit: 'scale-down' }}
							alt='#'
						/>
					</div>
					<div style={style}>Second Slide#</div>
					<div style={style}>Third Slide#</div>
				</Slide> */}
			</div>
		);
};

export default testPage;