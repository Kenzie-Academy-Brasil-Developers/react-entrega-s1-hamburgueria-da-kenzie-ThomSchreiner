import { ProductsCard } from "../ProductsCard"
import style from "./style.module.css"

export function ProductsList({ products, setCurrentSale, currentSale }) {
    return (
        <ul className={style.productList}>
            {products.map((product) => (
                <ProductsCard
                    key={product.id}
                    product={product}
                    setCurrentSale={setCurrentSale}
                    currentSale={currentSale}
                />
            ))}
        </ul>
    )
}
