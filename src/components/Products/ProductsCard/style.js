import styled from "styled-components";

export const StyledCard = styled.li`
    width: 300px;
    min-width: 300px;
    border: 2px solid var(--grey-20);
    border-radius: 5px;
    
    figure {
        height: 150px;
        text-align: center;
        background-color: var(--grey-0);
        border-radius: 5px 5px 0px 0px;

        img {
            width: 58%;
            height: 100%;
            object-fit: cover;
            object-position: bottom;
        }
    }

    & > div {
        margin: 26px 20px 23px 20px;
        
        span {
            display: inline-block;
            margin-bottom: 14px;
        }
        
        p {
            margin-bottom: 14px;
            color: var(--primary);
        }

        div {
            width: 105px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 8px;
            border: 2px solid var(--grey-20);

            button {
                width: 24px;
                height: 24px;
                font-size: 17px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--primary);
                background-color: transparent;
            }

            span {
                margin: auto 0;
            }
        }
    }

`