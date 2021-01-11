import React from 'react';
import { Icon } from 'antd';
import './Montserrat.css';
import './Intro.css';

const IconFont = Icon.createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
});

class Footer extends React.Component {
	render() {
		return (
			<div>
				<div className="container" style={{ height: 100, backgroundColor: 'black' }}>
					<div style={{ color: 'white', paddingTop: 12 }}>
						Contact <span style={{ fontWeight: 'bold' }}>ru.msa.r2r@gmail.com </span> for any questions!
					</div>

					<div className="program" style={{ top: '60%', left: '35%' }}>
						<a
							href="https://www.facebook.com/Road2Revival/?eid=ARBU3VkeKgGD7zEyAqy-MgKB7Z5KvS3HvFTolwLudYQJHYfT4ZBpq1-6sIh_YjgZLI1_RQQ65ks0jxpe"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IconFont type="icon-facebook" style={{ fontSize: '50px' }} />
						</a>
					</div>

					<div className="program" style={{ top: '60%', left: '50%' }}>
						<a href="https://twitter.com/road2revival?lang=en" target="_blank" rel="noopener noreferrer">
							<IconFont type="icon-twitter" style={{ fontSize: '50px' }} />
						</a>
					</div>

					<div className="program" style={{ top: '60%', left: '65%' }}>
						<a
							href="https://www.instagram.com/road2revival/?hl=en"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon type="instagram" style={{ fontSize: '50px' }} />
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
