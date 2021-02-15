import styled, { css }from 'styled-components'
import get from 'lodash/get'
import {TextStyleVariantMap} from '../../foundation/Text'
const ButtonGhost = css`
    background: transparent;
    color: ${(props) => get(props.theme,`colors.${props.variant}.color`)};
`;

const ButtonDefault = css`
    color:white;
    background-color: ${(props) => get(props.theme,`colors.${props.variant}.color`)};
    color: ${(props) => get(props.theme,`colors.${props.variant}.contrastText`)};
`;
export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    ${TextStyleVariantMap.smallestException}
    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
    &:hover ,
    &:focus{
        opacity:.5;
    }
`
