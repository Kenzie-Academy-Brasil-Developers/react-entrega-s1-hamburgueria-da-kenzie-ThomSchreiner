import styled from "styled-components"
import { Header } from "."

export const StyledHeader = styled(Header)`
    height: 80px;
    width: 100%;
    background-color: var(--grey-0);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    
    div {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width:768px) {
        height: 140px;
        position: absolute;

        div {
            flex-direction: column;
            justify-content: space-around;

            form {
                width: 100%;
                max-width: 500px;

                input {
                    width: 100%;
                }
            }
        }
    }
`