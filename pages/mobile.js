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
			line-height: 3rem;

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

	@media (max-width: 644px) {
		.links a:first-child {
			display: none;
		}
	}

	@media (max-width: 1100px) {
		pading: 0 10px;
	}

	@media (max-width: 520px) {
		header img {
			max-width: 90%;
		}

		a.button,
		button {
			margin: 0 10px;
		}

		.links {
			flex-wrap: wrap;
			justify-content: center;

			a {
				margin: 5px 0;
			}
		}

		.behold {
			flex-wrap: wrap;
			justify-content: center;
			text-align: center;

			img {
				margin: 0 0 25px 0;
			}
		}

		.screenshots {
			grid-template-columns: 1fr;

			padding: 0 20px;
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
						src="/static/gifs/apple.gif"
						alt="Telephone"
						width="90"
						height="90"
					/>
					<span>Download for your iPhone</span>
				</Button>
				<br />
				<Button
					isLink
					href="https://play.google.com/store/apps/details?id=co.northplay.planetlife"
				>
					<img
						src="/static/gifs/burger.gif"
						alt="Telephone"
						width="90"
						height="90"
					/>
					<span>Download for your Android</span>
				</Button>
				<div className="links">
						<a href="/static/game/index.html" className="play">
							<img
								src="/static/gifs/playinbrowser.gif"
								alt="Arcade"
								width="60"
								height="60"
							/>
							<span>Play In Browser!</span>
						</a>
					<a
						href="https://www.youtube.com/watch?v=M64h79ruqgM"
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
											src="https://www.youtube.com/embed/M64h79ruqgM?autoplay=1"
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
