/* eslint-disable eqeqeq */
import { useEffect, useRef, useState } from "react"
import { CartItem } from "../CartItem"
import { CartPrice } from "../CartPrice"
import { StyledCart } from "./style"

export function CartList({ currentSale, setCurrentSale }) {
    const [cartTotal, setCartTotal] = useState(0)
    const [ulHeight, setUlHeight] = useState("0px")
    const ulRef = useRef()

    useEffect(() => {
        setCartTotal(currentSale.reduce((acc, act) => acc + act.price * act.quantity, 0))
        if (ulRef.current) {
            const ulHeight = getComputedStyle(ulRef.current).height.replace("px", "")
            setUlHeight(`${+ulHeight + 23}px`)
        } else {
            setUlHeight("0px")
        }
    }, [currentSale])

    return (
        <StyledCart ulHeight={ulHeight}>
            <div>
                <h3 className="title three">Carrinho de compras</h3>
            </div>
            {currentSale.length ? (
                <>
                    <ul ref={ulRef}>
                        {currentSale.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                setCurrentSale={setCurrentSale}
                                currentSale={currentSale}
                            />
                        ))}
                    </ul>
                    <CartPrice cartTotal={cartTotal} setCurrentSale={setCurrentSale} />
                </>
            ) : (
                <div className="cart-empty">
                    <h3 className="title three">Sua sacola está vazia</h3>
                    <p className="text two">Adicione itens</p>
                </div>
            )}
        </StyledCart>
    )
}
