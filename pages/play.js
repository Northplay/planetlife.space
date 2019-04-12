import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Page from 'components/root/Page';
import Button from 'components/shared/Button';

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Player = styled.div`
	background-image: url(/static/frame.png);
	background-size: cover;
	background-position: center;
	width: 644px;
	height: 1072px;
	position: relative;

	iframe {
		position: absolute;
		top: 220px;
		left: 80px;
	}
`;

const Index = () => (
	<Page>
		<Content>
			<Player>
				<iframe
					src="/static/game/index.html"
					width="500"
					height="800"
					title="Game"
				/>
			</Player>
		</Content>
	</Page>
);

export default Index;
