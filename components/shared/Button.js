import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import Link from 'next/link';

import { buttonType, buttonDefaults } from 'lib/propTypes';

const Element = styled.button`
	background-color: ${p => p.backgroundColor} !important;
	color: ${p => p.primaryColor} !important;

	svg path {
		fill ${p => p.primaryColor} !important;
	}
`;

const Button = ({
	children,
	text,
	icon,
	backgroundColor,
	primaryColor,
	href,
	as,
	onClick,
	type,
	isLink,
	title,
	router,
}) => {
	const props = { backgroundColor, primaryColor, type };

	const inside = (
		<>
			{text && <span>{text}</span>}
			{icon && <>{icon}</>}
			{children && <>{children}</>}
		</>
	);

	if (isLink) {
		return (
			<Link href={href} as={as} passHref>
				<Element
					className="button"
					as="a"
					title={title}
					{...props}
					onClick={e => {
						if (onClick) {
							e.preventDefault();
							onClick();
						}
					}}
				>
					{inside}
				</Element>
			</Link>
		);
	}

	return (
		<Element
			{...props}
			type={type}
			onClick={e => {
				if (type === 'submit') {
					return;
				}

				e.preventDefault();

				if (onClick !== undefined && typeof onClick === 'function') {
					onClick(router);
				} else if (href !== undefined && href !== null) {
					router.push(href, as);
				}
			}}
		>
			{inside}
		</Element>
	);
};
Button.propTypes = buttonType;
Button.defaultProps = buttonDefaults;

export default withRouter(Button);
