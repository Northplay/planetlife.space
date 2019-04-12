import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Meta = ({ title, description, image, children, canonical }) => (
	<>
		<Head>
			{title && (
				<>
					<title>{title}</title>
					<meta property="og:title" content={title} />
				</>
			)}
			{description && (
				<>
					<meta name="description" content={description} />
					<meta property="og:description" content={description} />
					<meta name="twitter:description" content={description} />
				</>
			)}
			{image && (
				<>
					<meta property="og:image" content={image} />
					<meta name="twitter:image" content={image} />
				</>
			)}
			{canonical && <link rel="canonical" href={canonical} />}
		</Head>
		{children}
	</>
);

Meta.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	canonical: PropTypes.string,
	children: PropTypes.node,
};

Meta.defaultProps = {
	title: null,
	description: null,
	image: null,
	canonical: null,
};

export default Meta;
