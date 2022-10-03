/* eslint-disable eqeqeq */
import { toast } from "react-toastify"
import { StyledButton } from "../../../styles/button"
import { StyledCard } from "./style"

export function ProductsCard({ product, setCurrentSale }) {
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
        toast.success(`${product.name} adicionado ao carrinho`)
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
                <StyledButton height="medium" color="primary" type="button" onClick={addToCart}>
                    Adicionar
                </StyledButton>
            </div>
        </StyledCard>
    )
}
