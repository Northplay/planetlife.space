import React, { useState } from 'react';
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
			max-width: 500px;
			margin: 0 auto;
		}
	}

	h1 {
		margin: var(--site-content-vertical-margin) 0;
	}

    p {
        margin: 50px 0;
    }

	.links {
		margin: 40px 0;
		display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        text-align: center;

		a {
            flex: 0 0 auto;
			display: flex;
			align-items: center;
			margin: 0 20px;
			line-height: 3rem;
            margin-bottom: 20px;

			&:hover {
				color: #fff;
			}

			img {
				margin-right: 20px;
			}
		}

		.steam {
			color: #00ABFF;
		}

		.switch {
			color: #FF0000;
			cursor: default;
			pointer-events: none;
		}

		.phones {
			color: #FF0063;
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
					<img src="/static/super-planetlife.gif" alt="Super Planet Life" />
					<h1>
						A game about friendship,
						<br />
						adventure and being a planet
					</h1>
				</header>
                <div className='video-embed'>
                <div className='video-container'>
                    <iframe
                        width="800"
                        height="400"
                        src="https://www.youtube.com/embed/sOjbIFYA8UQ?autoplay=1"
                        frameBorder="0"
                        allowFullScreen
                        title="Youtube Embed Video"
                    />
                </div>
                </div>
                                <p>
						The definitive edition of the cult classic is
						<br />
						coming to real computers and a real console.
                        <br />
                        This december.
					</p>
				<div className="links">
						<a href="https://store.steampowered.com/app/2177260/Super_Planet_Life" className="steam">
							<img
								src="/static/steam.png"
								alt="Arcade"
								width="40"
								height="40"
							/>
							<span>Coming to Steam</span>
						</a>
                        <a href="#" className="switch">
							<img
								src="/static/switch.png"
								alt="Arcade"
								width="40"
								height="40"
							/>
							<span>Coming to Switch (soon)</span>
						</a>
                        <a href="/mobile" className="phones">
							<img
								src="/static/gifs/playinbrowser.gif"
								alt="Arcade"
								width="40"
								height="40"
							/>
							<span>Don&lsquo;t you guys have phones?</span>
						</a>
				</div>
			</Content>
		</Page>
	);
};

export default Index;
