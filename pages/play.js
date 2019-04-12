import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Page from 'components/root/Page';
import Button from 'components/shared/Button';

const Content = styled.div``;

const Index = () => (
	<Page>
		<Content>
			<iframe src="/static/game/index.html" title="Game" />
		</Content>
	</Page>
);

export default Index;
