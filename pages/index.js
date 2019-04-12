import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Modal from 'react-responsive-modal';

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
			max-width: 500px;
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

const Index = () => {
	const [isModalOpen, setModalIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState(<div />);

	const openModal = content => {
		setModalContent(content);
		setModalIsOpen(true);
	};

	const Screenshot = ({ index, title }) => {
		const img = (
			<img
				src={`/static/screenshots/${index}.png`}
				alt={`Screenshot ${index}`}
			/>
		);

		return (
			<a
				href={`/static/screenshots/${index}.png`}
				title={title}
				onClick={e => {
					e.preventDefault();

					openModal(img);
				}}
			>
				{img}
			</a>
		);
	};

	return (
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
						onClick={e => {
							e.preventDefault();

							const content = (
								<div className="video-wrapper">
									<div className="video-container">
										<iframe
											width="853"
											height="400"
											src="https://www.youtube.com/embed/8bLh3u9IckA?autoplay=1"
											frameBorder="0"
											allowFullScreen
											title="Youtube Embed Video"
										/>
									</div>
								</div>
							);

							openModal(content);
						}}
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
					<Screenshot index={1} title="Play as a newborn planet!" />
					<Screenshot index={2} title="Build cool stuff on your surface!" />
					<Screenshot index={3} title="Train your Derek!" />
					<Screenshot index={4} title="Beat tons of jerks in the dungeons!" />
					<Screenshot index={5} title="Smell the Space Broccoli!" />
					<Screenshot index={6} title="Find new friends in weird dungeons!" />
				</div>
			</Content>
			<Modal
				open={isModalOpen}
				onClose={() => setModalIsOpen(false)}
				classNames={{ modal: 'modal' }}
			>
				{modalContent}
			</Modal>
		</Page>
	);
};

export default Index;
