/* eslint-disable react/no-danger */
import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { isProduction } from 'lib/env';

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<meta
						name="application-name"
						content="Super Planet Life ~ A game about friendship and being a planet"
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-KLBRVHT');`,
						}}
					/>
					<meta name="robots" content="index,follow" />
					<meta name="googlebot" content="index,follow" />
					<link rel="manifest" href="/static/manifest.json" />
					<meta
						name="msapplication-config"
						content="/static/browserconfig.xml"
					/>
					<link
						rel="icon"
						sizes="64x64"
						href="/static/favicons/favicon-64x64.png"
					/>
					<link
						rel="mask-icon"
						href="/static/favicons/safari-pinned-tab.svg"
						color="#0d0e34"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Press+Start+2P"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href={`/static/global${isProduction() ? '.min' : ''}.css`}
					/>
					{this.props.styleTags}
				</Head>
				<body>
					<noscript
						dangerouslySetInnerHTML={{
							__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KLBRVHT"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						}}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
