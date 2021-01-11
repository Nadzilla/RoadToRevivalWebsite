import React from 'react';
import { Avatar } from 'antd';
import './About.css';
import shadee from '../assets/shadee.jpg';
import sisteryusra from '../assets/sisteryusra.jpg';
import majed from '../assets/majed.jpg';
import shinawy from '../assets/shinawy.jpg';
import anj from '../assets/ANJ.png';
import kaiser from '../assets/kaiser.jpg';

import { bioShadee, bioShinway, bioYoussra, bioMajed, bioJangda, bioKaiser } from '../bios';

import './Montserrat.css';

class About extends React.Component {
	render() {
		return (
			<div>
				<Avatar size={150} src={majed} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Ustadh Majed Mahmoud</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Al-Maghrib Institute Instructor</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioMajed}
				</div>
				<Avatar size={150} src={shadee} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Dr. Shadee Elmasry</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Scholar in Residence at NBIC</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioShadee}
				</div>
				<Avatar size={150} src={anj} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Shaykh Abdulnasir Jangda</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Founder and Director of Qalam Institute</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioJangda}
				</div>
				<Avatar size={150} src={kaiser} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Chaplain Kaiser Aslam</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Chaplain at Rutgers University</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioKaiser}
				</div>
				<Avatar size={150} src={shinawy} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Shaykh Mohammad Elshinawy</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Religious Director at IECPA</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioShinway}
				</div>

				<Avatar size={150} src={sisteryusra} />
				<div style={{ fontSize: 26, fontFamily: 'Rubik' }}>Youssra Kandil</div>
				<div style={{ fontSize: 18, fontFamily: 'Rubik' }}>Motivational Speaker</div>
				<div
					style={{
						fontSize: '120%',
						marginRight: '7%',
						marginLeft: '7%',
						marginTop: 20,
						marginBottom: 50,
						fontFamily: 'Quattrocento Sans'
					}}
				>
					{bioYoussra}
				</div>
			</div>
		);
	}
}

export default About;
