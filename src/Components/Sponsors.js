import React from 'react';
import { Row, Col, Card, Divider } from 'antd';
import './NavBar.css';
import Footer from './Footer';

import helping from '../assets/helping.png';
import ir from '../assets/IR.jpg';
import maghrib from '../assets/maghrib.png';
import shuhada from '../assets/shuhada.png';
import iscj from '../assets/download.png';
import icmc from '../assets/icmc.png';

class Sponsors extends React.Component {
	render() {
		const cardHeightRow1 = 400;
		const cardHeightRow2 = 400;

		return (
			<div>
				<Col span={24}>
					<div className="container" style={{ height: 250 }}>
						<img id="gif" alt="example" src={require('../assets/water.gif')} />
						<div
							className="program"
							style={{ top: '50%', left: '50%', fontWeight: 900, fontSize: 72, color: 'white' }}
						>
							Sponsors
						</div>
					</div>
				</Col>
				<div>
					<Row>
						<Col xs={24} sm={12} md={12} lg={8}>
							<Card
								title="Islamic Relief"
								extra={
									<a href="http://irusa.org/" target="_blank" rel="noopener noreferrer">
										Website
									</a>
								}
								style={{ margin: 20, height: cardHeightRow1 }}
							>
								<img alt="example" src={ir} style={{ maxWidth: '47.5%', height: 'auto' }} />
								<Divider dashed>Description</Divider>

								<p>
									Islamic Relief is a leading faith-based NGO that is fighting poverty worldwide.
									Islamic Relief is a leading charity working in 40+ countries & helping millions. 25+
									yrs serving humanity.
								</p>
							</Card>
						</Col>
						<Col xs={24} sm={12} md={12} lg={8}>
							<Card
								title="Helping Hand"
								extra={
									<a href="https://www.hhrd.org/" target="_blank" rel="noopener noreferrer">
										Website
									</a>
								}
								style={{ margin: 20, height: cardHeightRow1 }}
							>
								<img alt="example" src={helping} style={{ maxWidth: '70%', height: 'auto' }} />
								<Divider dashed>Description</Divider>

								<p>
									HHRD is a global humanitarian relief and development organization responding to
									human sufferings in emergency and disaster situations around the world.
								</p>
							</Card>
						</Col>
						<Col xs={24} sm={12} md={12} lg={8}>
							<Card
								title="Al-Maghrib Institute"
								extra={
									<a href="https://www.almaghrib.org/" target="_blank" rel="noopener noreferrer">
										Website
									</a>
								}
								style={{ margin: 20, height: cardHeightRow1 }}
							>
								<img alt="example" src={maghrib} style={{ maxWidth: '70%', height: 'auto' }} />
								<Divider dashed>Description</Divider>

								<p>
									Al-Maghrib Institute has classes being offered in over 40 cities around the globe,
									and catering to over 80,000 unique students, AlMaghrib has the largest onsite
									student body, and is the leading institute teaching premier Islamic education in the
									West.
								</p>
							</Card>
						</Col>
						<Col xs={24} sm={12} md={12} lg={8}>
							<Card
								title="Islamic Society of Central Jersey"
								extra={
									<a href="https://iscj.org/" target="_blank" rel="noopener noreferrer">
										Website
									</a>
								}
								style={{ margin: 20, height: cardHeightRow2 }}
							>
								<img alt="example" src={iscj} style={{ maxWidth: '30%', height: 'auto' }} />
								<Divider dashed>Description</Divider>

								<p>
									The Islamic Society of Central Jersey (ISCJ) is an organization of Muslim Americans
									that provides religious, educational and social services to its members, as well as
									to the community at large.
								</p>
							</Card>
						</Col>
						<Col xs={24} sm={12} md={12} lg={8}>
							<Card
								title="Islamic Center of Mercer County"
								extra={
									<a href="https://icmcmasjid.org/" target="_blank" rel="noopener noreferrer">
										Website
									</a>
								}
								style={{ margin: 20, height: cardHeightRow2 }}
							>
								<img alt="example" src={icmc} style={{ maxWidth: '70%', height: 'auto' }} />
								<Divider dashed>Description</Divider>

								<p>
									The Islamic Circle of Mercer County in Lawrenceville, is a non-profit
									religious/social organization that was initiated and established in 1999/1420.
								</p>
							</Card>
						</Col>
						<Col xs={24} sm={12} md={12} lg={8}>
							<Card
								title="Masjid Al-Shuhada"
								extra={
									<a href="http://www.masjidshuhada.com/" target="_blank" rel="noopener noreferrer">
										Website
									</a>
								}
								style={{ margin: 20, height: cardHeightRow2 }}
							>
								<img alt="example" src={shuhada} style={{ maxWidth: '70%', height: 'auto' }} />
								<Divider dashed>Description</Divider>

								<p>
									Masjid Shuhada is incorporated as a non-profit organization and caters to the needs
									of the area's Muslim community by providing educational seminars, and religious
									services.
								</p>
							</Card>
						</Col>
					</Row>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Sponsors;
