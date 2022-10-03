/* eslint-disable eqeqeq */
import { StyledButton } from "../../../styles/button"
import { StyledCard } from "./style"
import { RiSubtractFill, RiAddFill } from "react-icons/ri"

export function ProductsCard({ product, setCurrentSale, currentSale }) {
    function normalizePrice(price) {
        const normalizedPrice = price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
        return `R$ ${normalizedPrice}`
    }

    function addToCart() {
        setCurrentSale((prevSales) => {
            let isInTheCart = prevSales.some((prevSale) => prevSale.id == product.id)
            if (isInTheCart) {
                const sales = prevSales.map((prevSale) => {
                    if (prevSale.id == product.id) {
                        return { ...prevSale, quantity: prevSale.quantity + 1 }
                    }
                    return prevSale
                })
                return sales
            } else {
                return [...prevSales, { ...product, quantity: 1 }]
            }
        })
    }

    function decreseCartItem() {
        const newSale = currentSale
            .map((sale) => {
                if (sale.id == product.id) {
                    return sale.quantity > 1 && { ...sale, quantity: sale.quantity - 1 }
                }
                return sale
            })
            .filter((item) => item)

        setCurrentSale(newSale)
    }

    function currentQuantity() {
        return currentSale.find((sale) => sale.id == product.id).quantity
    }

    return (
        <StyledCard>
            <figure>
                <img src={product.img} alt={product.name} />
            </figure>
            <div>
                <h3 className="title three">{product.name}</h3>
                <span className="text three">{product.category}</span>
                <p className="text two bold">{normalizePrice(product.price)}</p>
                {currentSale.some((sale) => sale.id == product.id) ? (
                    <div>
                        <button onClick={decreseCartItem}>
                            <RiSubtractFill />
                        </button>
                        <span className="text three">{currentQuantity()}</span>
                        <button onClick={addToCart}>
                            <RiAddFill />
                        </button>
                    </div>
                ) : (
                    <StyledButton height="medium" color="primary" type="button" onClick={addToCart}>
                        Adicionar
                    </StyledButton>
                )}
            </div>
        </StyledCard>
    )
}
