/* eslint-disable eqeqeq */
import styled from "styled-components";

export const StyledCart = styled.section`
    background: var(--grey-0);
    border-radius: 5px;
    position: sticky;
    top: 110px;
    left: 0;
    
        
    &::before{
        content: "";
        position: absolute;
        top: ${({ ulHeight }) => ulHeight};
        z-index: ${({ ulHeight }) => ulHeight == "0px" ? -1 : 1};
        left: 0;
        width: 94%;
        height: 40px;
        background: linear-gradient(0deg, var(--grey-0), transparent);

        @media (max-width:768px) {
            & {
                width: 98%;
            }
        }
    }

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    & > div:nth-child(1) {
        height: 65px;
        background-color: var(--primary);
        border-radius: 5px 5px 0px 0px;

        h3 {
            color: var(--white);
        }
    }

    div.cart-empty {
        height: 160px;
        gap: 16px;

        h3 {
            color: var(--grey-100);
        }

        p {
            color: var(--grey-50);
        }
    }

    ul {
        max-height: 350px;
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-bottom: 2px solid var(--grey-20);
        overflow: auto;
        position: relative;
        inset: 0;
    }
    
`