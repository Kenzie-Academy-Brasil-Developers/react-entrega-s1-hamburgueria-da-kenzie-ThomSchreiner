/* eslint-disable eqeqeq */
import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    ${({ height }) => {
        switch (height) {
            case "medium":
                return css`
                    height: 40px;
                    font-size: 14px;
                    line-height: 17px;
                `

            default:
                return css`
                    height: 60px;
                    font-size: 16px;
                    line-height: 19px;
                `
        }
    }}

    ${({ color }) => {
        if (color == "primary") {
            return css`
                background-color:var(--primary);
                color: var(--white);
            
            &:hover {
                background-color:var(--primary-50);
            }`
        } else {
            return css`
                background-color:var(--grey-20);
                color: var(--grey-50);

            &:hover {
                background-color:var(--grey-50);
                color: var(--grey-20);
            }`
        }
    }}

    padding: 10px 20px;
    font-weight: 600;
    
    border-radius: 8px;
`