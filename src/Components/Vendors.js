import React from 'react';
import './About.css';
import { Row, Col, Card, Divider, Typography } from 'antd';

import burdaclothing from '../assets/burda.png';
import modesty from '../assets/modernmodesty.png';
import misk from '../assets/misk.png';
import crowns from '../assets/crowns.png';

import './Montserrat.css';

class Vendors extends React.Component {
	render() {
		const { Title } = Typography;
		const cardHeightVendors = 300;
		const cardHeightRest = 375;

		return (
			<div>
				<div className="container" style={{ height: 250 }}>
					<img
						id="gif"
						alt="example"
						src={
							'https://media3.giphy.com/media/fibM8iVn2TSKY/giphy.gif?cid=790b76115bdd4ed052ccfe3b342d38682a55a0fc1fad4e53&rid=giphy.gif'
						}
					/>
					<div
						className="program"
						style={{ top: '50%', left: '50%', fontWeight: 900, fontSize: 72, color: 'white' }}
					>
						Vendors & Food
					</div>
				</div>
				<br />
				<Title>Vendors</Title>
				<Divider dashed />

				<Row>
					<Col xs={24} sm={24} md={12} lg={8}>
						<Card
							title="Burda Clothing"
							extra={
								<a href="https://burdaclothing.com/" target="_blank" rel="noopener noreferrer">
									Website
								</a>
							}
							style={{ margin: 20, height: cardHeightVendors }}
						>
							<img alt="example" src={burdaclothing} style={{ maxWidth: '47.5%', height: 'auto' }} />
							<Divider dashed>Description</Divider>

							<p>
								Burda Clothing is a store that sells Thobes, Kufis, Coats, Hijabs, and other products.
							</p>
						</Card>
					</Col>
					<Col xs={24} sm={24} md={12} lg={8}>
						<Card
							title="The Misk Shoppe"
							extra={
								<a href="https://miskshoppe.com/" target="_blank" rel="noopener noreferrer">
									Website
								</a>
							}
							style={{ margin: 20, height: cardHeightVendors }}
						>
							<img alt="example" src={misk} style={{ maxWidth: '50%', height: 'auto' }} />
							<Divider dashed>Description</Divider>

							<p>
								The Misk Shoppe is a family owned business based in New Jersey. We are a group of
								perfume enthusiast, we do not like to call ourselves perfume connoisseurs, but with more
								than a decade of experience in perfumes and accessories we do know a thing or two about
								fragrances.
							</p>
						</Card>
					</Col>
					<Col xs={24} sm={24} md={12} lg={8}>
						<Card title="Modern Modesty" style={{ margin: 20, height: cardHeightVendors }}>
							<img alt="example" src={modesty} style={{ maxWidth: '40%', height: 'auto' }} />
							<Divider dashed>Description</Divider>

							<p>
								Created in 2018 by 2 college students, Modern Modesty, is an online hijab and
								accessories boutique that aims to integrate faith, fashion and culture. Their goal is to
								break the stigma that modesty can not be fashionable.
							</p>
						</Card>
					</Col>
					<Col xs={24} sm={24} md={12} lg={8}>
						<Card title="Mufti Niaz Books" style={{ margin: 20, height: cardHeightVendors }}>
							<Divider dashed>Description</Divider>
							<p>Mufti Niaz Books He will be at Road to Revival from 2pm - 5pm</p>
						</Card>
					</Col>
					<Col xs={24} sm={24} md={12} lg={8}>
						<Card title="Usarabian Perfume" style={{ margin: 20, height: cardHeightVendors }}>
							<img
								alt="example"
								src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/68991265_115057459847957_7271996410906542080_n.jpg?_nc_cat=103&_nc_ohc=VvGNCCLqDP4AX8AYseC&_nc_ht=scontent-lga3-1.xx&oh=02f1b80d803a31ddcb079b99696b1ab4&oe=5E8E987C"
								style={{ maxWidth: '40%', height: 'auto' }}
							/>
						</Card>
					</Col>
				</Row>
				<br />
				<Title>Nearby Restaurants</Title>
				<Divider dashed />
				<Row>
					<Col xs={24} sm={24} md={12} lg={8}>
						<Card
							title="Elevation Burger"
							extra={
								<a href="https://www.elevationburger.com/" target="_blank" rel="noopener noreferrer">
									Website
								</a>
							}
							style={{ margin: 20, height: cardHeightRest }}
						>
							<img
								alt="example"
								src={
									'https://images.squarespace-cdn.com/content/v1/5d094325aa12c40001ab48b9/1565389210171-C24O3TSRWTZVUH3TJ082/ke17ZwdGBToddI8pDm48kNLR0kaSaPDXxtmQ1J8HckYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcWRz69hrbu33ilK0Musm1LWt8VrO4i_5fDFnTtGeOGi5VpNB2NHHdiUM9AqXD-zMz/ElevationBurger_Seal_Black_RGB.png'
								}
								style={{ maxWidth: '35%', height: 'auto' }}
							/>
							<p>
								<span style={{ fontWeight: 'bold' }}>Location: </span> 48 College Ave, New Brunswick, NJ
								08901
							</p>
							<p>
								<span style={{ fontWeight: 'bold' }}>Hours: </span>10 AM - 12 AM
							</p>
							<Divider dashed>Description</Divider>

							<p>
								Elevation Burger is an American fast casual restaurant chain that specializes in organic
								hamburgers. 100% ORGANIC, GRASS-FED, FREE-RANGE BEEF BURGERS AND FRESH FRIES.
							</p>
						</Card>
					</Col>
					<Col xs={24} sm={24} md={12} lg={8}>
						<Card
							title="Zookini Pizza & Restaurant"
							extra={
								<a href="https://www.zookinimenu.com/" target="_blank" rel="noopener noreferrer">
									Website
								</a>
							}
							style={{ margin: 20, height: cardHeightRest }}
						>
							<img
								alt="example"
								src={
									'https://shop-logos.imgix.net/shops/12111/original/12111.png?auto=compress&auto=format'
								}
								style={{ maxWidth: '35%', height: 'auto' }}
							/>
							<p>
								<span style={{ fontWeight: 'bold' }}>Location: </span> 60 Sicard St, New Brunswick, NJ
								08901
							</p>
							<p>
								<span style={{ fontWeight: 'bold' }}>Hours: </span>11 AM - 1 AM
							</p>
							<Divider dashed>Description</Divider>

							<p>
								At Zookini Pizza & Restaurant you can order your favorite pizza, pasta, salad, and more,
								all with the click of a button. Zookini Pizza & Restaurant accepts orders online for
								pickup.
							</p>
						</Card>
					</Col>
					<Col xs={24} sm={24} md={12} lg={8}>
						<Card
							title="Douglass Pizza & Grill"
							extra={
								<a
									href="https://www.douglaspizzaandgrill.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Website
								</a>
							}
							style={{ margin: 20, height: cardHeightRest }}
						>
							<img
								alt="example"
								src={
									'https://shop-logos.imgix.net/shops/9138/original/9138.PNG?auto=compress&auto=format'
								}
								style={{ maxWidth: '50%', height: 'auto' }}
							/>
							<p>
								<span style={{ fontWeight: 'bold' }}>Location: </span> 298 George St, New Brunswick, NJ
								08901
							</p>
							<p>
								<span style={{ fontWeight: 'bold' }}>Hours: </span>11 AM - 11:30 PM
							</p>
							<Divider dashed>Description</Divider>

							<p>
								At Douglas Pizza & Grill you can order your favorite pizza, pasta, salad, and more, all
								with the click of a button. Douglas Pizza & Grill accepts orders online for pickup and
								delivery.
							</p>
						</Card>
					</Col>
					<Col xs={24} sm={24} md={12} lg={8}>
						<Card
							title="Kabab Paradise"
							extra={
								<a
									href="http://kababparadisesbb.com/index.html"
									target="_blank"
									rel="noopener noreferrer"
								>
									Website
								</a>
							}
							style={{ margin: 20, height: cardHeightRest }}
						>
							<img
								alt="example"
								src={'http://kababparadisesbb.com/images/KP-logo.png'}
								style={{ maxWidth: '25%', height: 'auto' }}
							/>
							<p>
								<span style={{ fontWeight: 'bold' }}>Location: </span> 60 Main St, South Bound Brook,NJ
								08880
							</p>
							<p>
								<span style={{ fontWeight: 'bold' }}>Hours: </span>11 AM - 11 PM
							</p>
							<Divider dashed>Description</Divider>

							<p>
								Kabab Paradise's menu offers a wide selection of fine delicacies from Afghanistan, as
								well exceptional American fare, including some of the best halal burgers your money can
								buy.
							</p>
						</Card>
					</Col>
					<Col xs={24} sm={24} md={12} lg={8}>
						<Card title="Crown Fish & Chicken" style={{ margin: 20, height: cardHeightRest }}>
							<img alt="example" src={crowns} style={{ maxWidth: '35%', height: 'auto' }} />
							<p>
								<span style={{ fontWeight: 'bold' }}>Location: </span> 1665 Stelton Rd, Piscataway, NJ
								08854
							</p>
							<p>
								<span style={{ fontWeight: 'bold' }}>Hours: </span>10 AM - 3 AM
							</p>
							<Divider dashed>Description</Divider>

							<p>
								Crown's Fish & Chicken offers a variety of Halal food that everyone enjoys. Come check
								out our place today!.
							</p>
						</Card>
					</Col>
					<Col xs={24} sm={24} md={12} lg={8}>
						<Card
							title="Roses Pizza & Ice Cream"
							extra={
								<a href="https://www.rosespizzeria.com/" target="_blank" rel="noopener noreferrer">
									Website
								</a>
							}
							style={{ margin: 20, height: cardHeightRest }}
						>
							<img
								alt="example"
								src={
									'https://cdn.doordash.com/media/restaurant/cover/RosesPizzaandIceCreamBrunswickAve4EdisonNJ.png'
								}
								style={{ maxWidth: '50%', height: 'auto' }}
							/>
							<p>
								<span style={{ fontWeight: 'bold' }}>Location: </span> 4 Brunswick Ave, Edison, NJ 08817
							</p>
							<p>
								<span style={{ fontWeight: 'bold' }}>Hours: </span>10 AM - 10 PM
							</p>
							<Divider dashed>Description</Divider>

							<p>
								Come enjoy our freshly made Pizzas, Appetizers, Entrees, Pastas, Baked Dishes, Soups,
								Subs, Wraps, Salads, Burgers, Hot Dogs and Ice Creams.
							</p>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Vendors;
