import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Content from './Content';

const Container = styled.div`
	background-color: var(--color-blue-ocean);
`;

const StyledContent = styled(Content)`
	display: flex;
	margin: 0 auto;
	padding: var(--site-content-vertical-margin) 10px;
	text-align: center;
	flex-direction: column;
	align-items: center;

	p {
		margin-top: 25px;
	}

	p,
	a {
		color: var(--color-blue-baby);
	}

	a:hover {
		color: #fff;
	}
`;

const Footer = () => (
	<>
		<Container>
			<StyledContent as="footer">
				<div>
					<Link href="https://northplay.co">
						<a
							href="https://northplay.co"
							title="Northplay"
							alt="Northplay website"
						>
							<img src="/static/gifs/northplay.gif" alt="Northplay Bear" />
						</a>
					</Link>
					<p>
						Made by{' '}
						<a href="https://northplay.co" title="Northplay">
							Northplay
						</a>{' '}
						in Copenhagen
					</p>
				</div>
			</StyledContent>
		</Container>
	</>
);

export default Footer;
