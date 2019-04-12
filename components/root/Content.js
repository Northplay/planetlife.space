import styled from 'styled-components';

export default styled.div`
	max-width: var(--site-max-width);
	margin: var(--site-content-vertical-margin) auto;

	@media (max-width: var(--site-break-max)) {
		padding-left: var(--site-content-horizontal-padding);
		padding-right: var(--site-content-horizontal-padding);
	}
`;
