import React from 'react';
import './About.css';

import Speakers from './Speakers';
import { intro, intro2, intro3 } from '../bios';

import './Montserrat.css';

class About extends React.Component {
	render() {
		return (
			<div style={{ width: '100%', marginTop: 10 }}>
				<div style={{ marginTop: 40 }}>
					<div style={{ fontSize: 40, fontFamily: 'Rubik', color: 'black', marginTop: 40 }}>Theme</div>
					<div
						style={{
							fontSize: '120%',
							marginRight: '7%',
							marginLeft: '7%',
							marginTop: 10,
							fontFamily: 'Quattrocento Sans'
						}}
					>
						No! Rather, the stain has covered their hearts of that which they were earning. (Surah
						Mutafifeen, verse 14)
					</div>
					<br />

					<div
						style={{
							fontSize: '120%',
							marginRight: '7%',
							marginLeft: '7%',
							marginTop: 10,
							fontFamily: 'Quattrocento Sans'
						}}
					>
						{intro}
					</div>
					<br />
					<div
						style={{
							fontSize: '120%',
							marginRight: '7%',
							marginLeft: '7%',
							marginTop: 10,
							fontFamily: 'Quattrocento Sans'
						}}
					>
						{intro2}
					</div>
					<br />
					<div
						style={{
							fontSize: '120%',
							marginRight: '7%',
							marginLeft: '7%',
							marginTop: 10,
							fontFamily: 'Quattrocento Sans'
						}}
					>
						{intro3}
					</div>
					<br />
					<br />
					<div style={{ fontSize: 40, fontFamily: 'Rubik', color: 'black', marginBottom: 20 }}>Speakers</div>
					<Speakers />
				</div>
			</div>
		);
	}
}

export default About;
