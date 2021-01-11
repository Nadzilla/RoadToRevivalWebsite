import React from 'react';
import { Row, Col } from 'antd';
import './NavBar.css';
import { Table } from 'antd';
import Footer from './Footer';

const dataSource = [
	{
		key: '4',
		Date: '1/22 Wednesday',
		Time: '6pm - 8pm',
		Location: 'Livi Student Center',
		Person: 'Several'
	},
	{
		key: '9',
		Date: '1/22 Wednesday',
		Time: '6pm - 8pm',
		Location: 'Busch Student Center',
		Person: 'Sajeelah Rahman'
	},
	{
		key: '5',
		Date: '1/23 Thursday',
		Time: '6pm - 8pm',
		Location: 'Busch Student Center',
		Person: 'Mohammed Alnadi'
	},
	{
		key: '8',
		Date: '1/23 Thursday',
		Time: '6pm - 8pm',
		Location: 'Livi Student Center',
		Person: 'Merriam Youssef'
	},
	{
		key: '8',
		Date: '1/23 Friday',
		Time: 'After Jumuah',
		Location: 'SAC',
		Person: 'Several'
	}
];

const columns = [
	{
		title: 'Date',
		dataIndex: 'Date',
		key: 'Date'
	},
	{
		title: 'Time',
		dataIndex: 'Time',
		key: 'Time'
	},
	{
		title: 'Location',
		dataIndex: 'Location',
		key: 'Location'
	},
	{
		title: 'Person',
		dataIndex: 'Person',
		key: 'Person'
	}
];

class Tabling extends React.Component {
	render() {
		return (
			<div>
				<Row>
					<Col span={24}>
						<div className="container" style={{ height: 300 }}>
							<img id="gif" alt="example" src={require('../assets/water.gif')} />
							<div
								className="program"
								style={{ top: '50%', left: '50%', fontWeight: 900, fontSize: 72, color: 'white' }}
							>
								Tabling Times
							</div>
						</div>
					</Col>
				</Row>

				<div style={{ fontSize: 24, fontFamily: 'Rubik', margin: 20 }}>Schedule for 1/21 - 1/24</div>
				<div style={{ fontSize: 16, fontFamily: 'Rubik', margin: 20 }}>
					<span style={{ fontWeight: 'bold' }}>Ticket Price before 1/25: </span>$12
				</div>
				<div style={{ fontSize: 16, fontFamily: 'Rubik', margin: 20 }}>
					<span style={{ fontWeight: 'bold' }}>At Door: </span>$15
				</div>

				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Table
						dataSource={dataSource}
						columns={columns}
						pagination={false}
						style={{ background: 'white', color: 'white', width: '80%' }}
					/>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Tabling;
