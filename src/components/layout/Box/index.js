/* eslint-disable linebreak-style */
import styled from 'styled-components';
import { propToStyle } from '../../../theme/utils/propToStyle';

// eslint-disable-next-line import/prefer-default-export
export const Box = styled.div`
    ${propToStyle('display')}
    ${propToStyle('flex')}
    ${propToStyle('flexWrap')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    background-image: ${({ theme }) => theme.imageBubbles};
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
`;
