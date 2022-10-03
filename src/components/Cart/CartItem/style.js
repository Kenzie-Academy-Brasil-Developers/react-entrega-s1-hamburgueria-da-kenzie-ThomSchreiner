import styled from "styled-components";

export const StyledCartItem = styled.li`
    display: flex;
    height: 80px;
    /* align-items: center; */
    justify-content: space-between;

    figure {
        width: 80px;
        min-width: 80px;
        height: 100%;
        padding: 5px;
        background: var(--grey-20);
        border-radius: 5px;
    }

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex: 1 1 auto;
        align-items: start;
        padding: 0 10px;
    }

    h4 {
        color: var(--grey-100);
    }

    p {
        color: var(--grey-50);
    }

    .div-counter {
        align-items: center;
        flex: 0 0 auto;

        div {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 4px;
            border-radius: 5px;
            border: 2px solid var(--grey-20);

            button {
                width: 24px;
                height: 24px;
                font-size: 17px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--primary);
            }
        }
    }

    button {
        background-color: transparent;
    }

`