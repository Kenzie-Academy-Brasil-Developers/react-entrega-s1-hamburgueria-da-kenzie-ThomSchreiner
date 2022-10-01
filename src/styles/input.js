import styled from "styled-components";
import { Input } from "./components/input";

export const StyledInput = styled(Input)`
    height: 60px;
    position: relative;
    top: 0;
    left: 0;

    input {
        width: 360px;
        height: 100%;
        padding-left: 15px;
        padding-right: 130px;
        border: 2px solid var(--grey-20);
        border-radius: 8px;
        color: var(--grey-20);
    }

    input::placeholder {
        color: var(--grey-20);
    }

    input:focus {
        border: 2px solid var(--primary);
        color: var(--grey-50);

        &::placeholder {
            color: var(--grey-50);
        }
    }

    button {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
`