import PropTypes from 'prop-types';

export const childrenType = PropTypes.node;

export const buttonType = PropTypes.shape({
	backgroundColor: PropTypes.string,
	primaryColor: PropTypes.string,
	text: PropTypes.string,
	icon: PropTypes.node,
	href: PropTypes.string,
	as: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['button', 'submit']),
	isLink: PropTypes.bool,
	title: PropTypes.string,
});
export const buttonDefaults = {
	backgroundColor: 'var(--color-gray-light)',
	primaryColor: '#fff',
	text: null,
	icon: null,
	href: null,
	as: null,
	onClick: null,
	type: 'button',
	isLink: false,
	title: null,
};
