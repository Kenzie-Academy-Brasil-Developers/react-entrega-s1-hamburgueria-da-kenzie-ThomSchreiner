import logo from "../../assets/logo.svg"
import { StyledInput } from "../../styles/input"
import { Container } from "../../styles/container"
import { useState } from "react"

export function Header({ className, filterProduct }) {
    const [inputValue, setInputValue] = useState("")

    function handleFilter(event) {
        event.preventDefault()
        filterProduct(inputValue)
        setInputValue("")
    }

    return (
        <header className={className}>
            <Container>
                <img src={logo} alt="Burger Kenzie" />
                <StyledInput
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    callback={handleFilter}
                />
            </Container>
        </header>
    )
}
