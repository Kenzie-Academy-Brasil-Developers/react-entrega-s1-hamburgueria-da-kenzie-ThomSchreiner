import { StyledButton } from "../button"

export function Input({ className, inputValue, setInputValue, callback }) {
    function hundleInput(value) {
        if (setInputValue) {
            setInputValue(value)
        }
    }

    return (
        <form className={className} onSubmit={(event) => callback(event)}>
            <input
                onChange={(event) => hundleInput(event.target.value)}
                value={inputValue}
                type="text"
                placeholder="Digitar Pesquisa"
            />
            <StyledButton type="submit" height="medium" color="primary">
                Pesquisar
            </StyledButton>
        </form>
    )
}
