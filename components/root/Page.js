import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Content from './Content';
import Meta from './Meta';
import Footer from './Footer';

const Container = styled.div``;

const Page = ({ children, withContent, ...rest }) => (
	<Fragment>
		<Meta {...rest} />
		<Container>
			{withContent && <Content>{children}</Content>}
			{!withContent && <Fragment>{children}</Fragment>}
		</Container>
		<Footer />
	</Fragment>
);

Page.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	canonical: PropTypes.string,
	withContent: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

Page.defaultProps = {
	title: 'Planet Life',
	description: 'A game about friendship, adventure and being a planet',
	image: '/static/shareimage.png',
	canonical: 'https://planetlife.space',
	withContent: true,
};

export default Page;
