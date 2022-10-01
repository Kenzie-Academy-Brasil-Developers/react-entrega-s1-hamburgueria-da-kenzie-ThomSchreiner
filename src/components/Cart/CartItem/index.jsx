import { StyledCartItem } from "./style"

export function CartItem({ item, removeCartItem }) {
    function limitCaractere(string) {
        if (string.length > 20) {
            return string.split("", 18).concat("...").join("")
        }
        return string
    }

    return (
        <StyledCartItem>
            <figure>
                <img src={item.img} alt={item.name} />
            </figure>
            <div>
                <h4 className="title four">{limitCaractere(item.name)}</h4>
                <p className="text three">{item.category}</p>
            </div>
            <div className="div-counter">
                <button onClick={() => removeCartItem(item.id)} type="button">
                    Remover
                </button>
                <span className="text three">{item.quantity}</span>
            </div>
        </StyledCartItem>
    )
}
