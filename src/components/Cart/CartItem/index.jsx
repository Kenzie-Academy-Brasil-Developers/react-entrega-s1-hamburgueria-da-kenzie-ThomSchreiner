/* eslint-disable eqeqeq */
import { StyledCartItem } from "./style"
import { HiTrash } from "react-icons/hi"
import { RiSubtractFill, RiAddFill } from "react-icons/ri"

export function CartItem({ item, currentSale, setCurrentSale }) {
    function limitCaractere(string) {
        if (string.length > 20) {
            return string.split("", 18).concat("...").join("")
        }
        return string
    }

    function normalizePrice() {
        const normalizedPrice = (item.price * item.quantity).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
        })
        return `R$ ${normalizedPrice}`
    }

    function removeCartItem() {
        const newSale = currentSale.filter((sale) => sale.id !== item.id)
        setCurrentSale(newSale)
    }

    function decreseCartItem() {
        const newSale = currentSale
            .map((sale) => {
                if (sale.id == item.id) {
                    return sale.quantity > 1 && { ...sale, quantity: sale.quantity - 1 }
                }
                return sale
            })
            .filter((item) => item)

        setCurrentSale(newSale)
    }

    function increseCartItem() {
        const newSale = currentSale.map((sale) =>
            sale.id == item.id ? { ...sale, quantity: sale.quantity + 1 } : sale
        )

        setCurrentSale(newSale)
    }

    return (
        <StyledCartItem>
            <figure>
                <img src={item.img} alt={item.name} />
            </figure>
            <div>
                <h4 className="title four">{limitCaractere(item.name)}</h4>
                <p className="text three">{normalizePrice()}</p>
            </div>
            <div className="div-counter">
                <button onClick={removeCartItem} type="button">
                    Remover
                </button>
                <div>
                    <button onClick={decreseCartItem}>
                        {item.quantity == 1 ? <HiTrash /> : <RiSubtractFill />}
                    </button>
                    <span className="text three">{item.quantity}</span>
                    <button onClick={increseCartItem}>
                        <RiAddFill />
                    </button>
                </div>
            </div>
        </StyledCartItem>
    )
}
