import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Page from 'components/root/Page';
import Button from 'components/shared/Button';

const Content = styled.div`
	background-color: ${p => p.background};
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	header {
		img {
			max-width: 640px;
			margin: 0 auto;
		}
	}

	h1 {
		margin: var(--site-content-vertical-margin) 0;
	}

	.links {
		margin: 40px 0;
		display: flex;

		a {
			display: flex;
			align-items: center;
			margin: 0 20px;

			&:hover {
				color: #fff;
			}

			img {
				margin-right: 20px;
			}
		}

		.play {
			color: var(--color-pink);
		}

		.watch {
			color: var(--color-green);
		}
	}

	.behold {
		display: flex;
		align-items: center;
		margin-top: var(--site-content-vertical-margin);

		img {
			margin-right: 40px;
		}

		p {
			color: var(--color-red);
		}
	}

	.screenshots {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 40px;
		margin: 70px 0;

		a img {
			max-width: 100%;
		}
	}
`;

const Index = () => (
	<Page>
		<Content>
			<header>
				<img src="/static/gifs/header.gif" alt="Planet Life" />
				<h1>
					A game about friendship,
					<br />
					adventure and being a planet
				</h1>
			</header>
			<Button
				isLink
				href="https://itunes.apple.com/us/app/planet-life/id1389159829?ls=1&mt=8&at=1010lwVg&ct=planetlife-site"
			>
				<img
					src="/static/gifs/phone.gif"
					alt="Telephone"
					width="90"
					height="90"
				/>
				<span>Download for your Telephone</span>
			</Button>
			<div className="links">
				<Link href="/play">
					<a href="/play" className="play">
						<img
							src="/static/gifs/playinbrowser.gif"
							alt="Arcade"
							width="60"
							height="60"
						/>
						<span>Play In Browser!</span>
					</a>
				</Link>
				<a
					href="https://www.youtube.com/watch?v=8bLh3u9IckA"
					className="watch"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="/static/gifs/playtrailer.gif"
						alt="Arcade"
						width="60"
						height="60"
					/>
					<span>Watch Trailer</span>
				</a>
			</div>
			<div className="behold">
				<img
					src="/static/gifs/remuladin.gif"
					alt="Remuladin"
					width="120"
					height="120"
				/>
				<p>Behold this actual in-game footage</p>
			</div>
			<div className="screenshots">
				<a href="/static/screenshots/1.png" title="Play as a newborn planet!">
					<img src="/static/screenshots/1.png" alt="Screenshot 1" />
				</a>

				<a
					href="/static/screenshots/2.png"
					title="Build cool stuff on your surface!"
				>
					<img src="/static/screenshots/2.png" alt="Screenshot 2" />
				</a>

				<a href="/static/screenshots/3.png" title="Train your Derek!">
					<img src="/static/screenshots/3.png" alt="Screenshot 3" />
				</a>

				<a
					href="/static/screenshots/4.png"
					title="Beat tons of jerks in the dungeons!"
				>
					<img src="/static/screenshots/4.png" alt="Screenshot 4" />
				</a>

				<a href="/static/screenshots/5.png" title="Smell the Space Broccoli!">
					<img src="/static/screenshots/5.png" alt="Screenshot 5" />
				</a>

				<a
					href="/static/screenshots/6.png"
					title="Find new friends in weird dungeons!"
				>
					<img src="/static/screenshots/6.png" alt="Screenshot 6" />
				</a>
			</div>
		</Content>
	</Page>
);

export default Index;
