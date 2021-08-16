import { width } from '@material-ui/system';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import usmc1 from '../assets/usmc1.jpeg';
import usmcsilent from '../assets/usmcsilent.jpeg'


const testPage = () => {

  const style = {
		textAlign: 'center',
		background: 'teal',
		// padding: '200px 0',
		fontSize: '30px',
     
	};

    return (
			<div>
				<Slide>
					<div>
						<img
							src={usmc1}
							alt='#'
							style={{ width: '100%', height: '100%', objectFit: 'fill' }}
						/>
					</div>
					<div style={style}>Second Slide</div>
					<div style={style}>Third Slide</div>
				</Slide>

				<Slide>
					<div style={style}>
						<img
							src={usmcsilent}
							style={{ width: '100%', height: '100%', objectFit: 'fill' }}
							alt='#'
						/>
					</div>
					<div style={style}>Second Slide#</div>
					<div style={style}>Third Slide#</div>
				</Slide>
			</div>
		);
};

export default testPage;