import { StyledButton } from "../../../styles/button"
import { StyledCardPrice } from "./style"

export function CartPrice({ cartTotal, setCurrentSale }) {
    function normalizePrice() {
        const normalizedPrice = cartTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
        return `R$ ${normalizedPrice}`
    }

    return (
        <StyledCardPrice>
            <div>
                <p className="text two bold">Total</p>
                <p className="text two bold">{normalizePrice()}</p>
            </div>
            <StyledButton height="default" color="secondary" onClick={() => setCurrentSale([])}>
                Remover todos
            </StyledButton>
        </StyledCardPrice>
    )
}
