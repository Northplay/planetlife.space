import NextApp, { Container } from 'next/app';
import React from 'react';

class App extends NextApp {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps({ ctx });
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Component {...pageProps} />
			</Container>
		);
	}
}

export default App;
