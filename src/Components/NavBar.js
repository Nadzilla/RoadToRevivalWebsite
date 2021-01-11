import React from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: this.props.location.pathname
		};
	}

	handleClick = (e) => {
		console.log('click ', e);
		this.setState({
			current: e.key
		});
	};

	render() {
		console.log(this.props.location.pathname);
		return (
			<div>
				<Menu onClick={this.handleClick} selectedKeys={[ this.state.current ]} mode="horizontal">
					<Menu.Item key="/" style={{ fontWeight: 'bold' }}>
						<Link to="/">
							<Icon type="home" />Home
						</Link>
					</Menu.Item>

					<Menu.Item key="/tabling" style={{ fontWeight: 'bold' }}>
						<Link to="/tabling">
							<Icon type="eye" />Tabling
						</Link>
					</Menu.Item>
					<Menu.Item key="/program" style={{ fontWeight: 'bold' }}>
						<Link to="/program">
							<Icon type="schedule" />Program
						</Link>
					</Menu.Item>
					<Menu.Item key="/sponsors" style={{ fontWeight: 'bold' }}>
						<Link to="/sponsors">
							<Icon type="fund" />Sponsors
						</Link>
					</Menu.Item>
					<Menu.Item key="/vendors" style={{ fontWeight: 'bold' }}>
						<Link to="/vendors">
							<Icon type="shop" />Vendors & Food
						</Link>
					</Menu.Item>
				</Menu>
			</div>
		);
	}
}

export default withRouter(NavBar);
