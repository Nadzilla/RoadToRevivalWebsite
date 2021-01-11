import React from 'react';
import { Avatar } from 'antd';
import './Intro.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Montserrat.css';
import Footer from './Footer';
import shadee from '../assets/shadee.jpg';
import sisteryusra from '../assets/sisteryusra.jpg';
import majed from '../assets/majed.jpg';
import shinawy from '../assets/shinawy.jpg';
import anj from '../assets/ANJ.png';
import kaiser from '../assets/kaiser.jpg';
import ismael from '../assets/ismael.jpg';

import qa from '../assets/QA.jpg';

import salah from '../assets/salah.jpg';
import presentation from '../assets/presentation.jpg';
import quran from '../assets/Quran.jpg';
import registration from '../assets/registration.png';
import conclusion from '../assets/conclusion.jpg';

const images = [
	registration,
	quran,
	kaiser,
	shinawy,
	presentation,
	salah,
	sisteryusra,
	anj,
	salah,
	salah,
	ismael,
	majed,
	presentation,
	shadee,
	qa,
	conclusion,
	salah
];

const times = [
	'10:00am to 11:00am',
	'11:15am to 11:20am',
	'11:25am to 11:45am',
	'11:50am to 12:35pm',
	'12:40pm to 12:50pm',
	'12:55pm to 1:20pm',
	'1:25pm to 2:10pm',
	'2:20pm to 3:05pm',
	'3:10pm to 5:15pm',
	'5:15pm to 5:30pm',
	'5:35pm to 5:45pm',
	'5:45pm to 6:30pm',
	'6:30pm to 6:40pm',
	'6:45pm to 7:30pm',
	'7:30pm to 7:55pm',
	'7:55pm to 8:00pm',
	'8:15pm'
];

const events = [
	'Sign In',
	'Quran Recitation',
	'Introduction to Purification of the Heart',
	'What Makes a Heart Diseased',
	'Presentation',
	'Dhur Salah',
	'It’s Not Too Late to Turn Back to Allah (SWT)',
	'Balance Between the Dunya and Akhirah',
	'Break (Asr 3:30pm)',
	'Maghrib Salah',
	'Quran Recitation',
	'A Successful Transaction',
	'Presentation',
	'Practical Tips to Purify the Heart',
	'Q&A',
	'Closing Remarks',
	'Ishaa Salah'
];

const speakers = [
	'',
	'Mashhud Hussain',
	'Chaplain Kaiser',
	'Shaykh Mohammad Elshinawy',
	'',
	'',
	'Youssra Kandil',
	'Shaykh Abdul Nasir Jangda',
	'Islamic Kahoot Game at 4:45pm',
	'',
	'Shaykh Ismael Eesa',
	'Ustadth Majed Mahmood',
	'',
	'Dr. Shadee Elmasry',
	'With Dr. Shadee Elmasry',
	'Arshad Vohra',
	''
];

class Program extends React.Component {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	render() {
		//

		return (
			<div>
				<div className="container" style={{ height: 250 }}>
					<img id="gif" alt="example" src={require('../assets/water7.gif')} />
					<div
						className="program"
						style={{ top: '50%', left: '50%', fontWeight: 900, fontSize: 72, color: 'white' }}
					>
						Program
					</div>
				</div>
				<div className="container">
					<div className="container">
						<VerticalTimeline layout="1-column">
							{times.map((time, i) => {
								const event = events[i];
								const speaker = speakers[i];
								const image = images[i];
								let left = -(this.state.width / 10);
								let size = 0;
								if (this.state.width >= 1476) {
									left = -(this.state.width / 10);
									size = 150;
								} else if (this.state.width >= 1270) {
									left = -50;
									size = 100;
								} else if (this.state.width >= 1000) {
									left = -30;
									size = 80;
								} else if (this.state.width >= 700) {
									left = -12;
									size = 70;
								} else if (this.state.width >= 500) {
									left = -12;
									size = 70;
								} else {
									left = -7;
									size = 60;
								}
								return (
									<VerticalTimelineElement
										className="vertical-timeline-element--work"
										contentStyle={{ background: 'white', color: 'black' }}
										contentArrowStyle={{ borderRight: '7px solid  black' }}
										date={time}
										icon={<Avatar size={size} src={image} />}
										iconStyle={{
											background: 'white',
											left: left
										}}
									>
										<h2 style={{ fontSize: '26px', fontWeight: 'bold' }}>{event}</h2>
										<p>{speaker}</p>
									</VerticalTimelineElement>
								);
							})}
						</VerticalTimeline>
						<Footer />
					</div>
				</div>
			</div>
		);
	}
}

export default Program;
