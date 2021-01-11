import React from 'react';
import { Button } from 'antd';
import './Intro.css';
import './Montserrat.css';
import Footer from './Footer';
import About from './About';
import { Link } from 'react-router-dom';

class Intro extends React.Component {
	state = { visible: false };

	showSummer = () => {
		this.setState({
			visible: true
		});
	};

	handleSummerOk = (e) => {
		console.log(e);
		this.setState({
			visible: false
		});
	};

	handleSummerCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false
		});
	};

	render() {
		//

		return (
			<div>
				<div className="container" style={{ width: '100%' }}>
					<img id="gif" alt="example" src={require('../assets/flyer2.jpg')} />
				</div>
				<div className="container" style={{ width: '100%', height: 300 }}>
					<img
						id="gif"
						alt="example"
						src={
							'https://media2.giphy.com/media/hHS0p5IpvMhos/giphy.gif?cid=790b76111ab149ffe558d3f2500e9880c0748abc8723a096&rid=giphy.gif'
						}
					/>
					<div id="opacity1" style={{ width: '90%', height: '90%', backgroundColor: '#00000050' }} />

					<div
						className="program"
						style={{ top: '15%', left: '50%', fontWeight: 900, fontSize: 32, color: 'white' }}
					>
						Purchase a Ticket
					</div>
					<div className="program" style={{ top: '45%', left: '50%', width: 200 }}>
						<Button type="primary" size="large" block>
							<Link to="/tabling">Purchase in Person</Link>
						</Button>
					</div>

					<div className="program" style={{ top: '70%', left: '50%', width: 200 }}>
						<Button type="primary" size="large" block>
							<a
								href="https://sabo.tix.com/Event.aspx?EventCode=1165215"
								target="_blank"
								rel="noopener noreferrer"
							>
								Purchase Online
							</a>
						</Button>
					</div>
				</div>

				<div className="container">
					<About />
				</div>

				<Footer />
			</div>
		);
	}
}

export default Intro;
