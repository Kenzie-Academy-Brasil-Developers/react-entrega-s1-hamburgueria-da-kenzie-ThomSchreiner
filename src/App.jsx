import "./App.css"
import { useEffect, useState } from "react"
import { StyledHeader } from "./components/Header/style"
import { ProductsList } from "./components/Products/ProductsList"
import { api } from "./services/api"
import { Container } from "./styles/container"
import { CartList } from "./components/Cart/CartList"
import { StyledButton } from "./styles/button"
import "react-toastify/dist/ReactToastify.min.css"

export function App() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [filterName, setFilterName] = useState("")
    const [currentSale, setCurrentSale] = useState([])

    useEffect(() => {
        api.get("/products")
            .then((resp) => setProducts(resp.data))
            .catch((erro) => console.log(erro))
    }, [])

    function filterProduct(value) {
        value = value.trim().toLowerCase().replace("í", "i").replace("-", " ")
        const newProducts = products.filter((product) => {
            const name = product.name.toLowerCase().replace("-", " ")
            const category = product.category.toLowerCase().replace("í", "i").replace("-", " ")

            return name.includes(value) || category.includes(value)
        })
        setFilterName(value)
        setFilteredProducts(newProducts)
    }

    return (
        <div className="App">
            <StyledHeader filterProduct={filterProduct} />
            <Container>
                <main>
                    {filteredProducts.length ? (
                        <>
                            <div className="searchResult">
                                <div>
                                    <h1 className="title one">
                                        Resultados para: <span>{filterName}</span>
                                    </h1>
                                    <StyledButton
                                        height="medium"
                                        color="primary"
                                        onClick={() => setFilteredProducts([])}
                                    >
                                        Limpar busca
                                    </StyledButton>
                                </div>
                            </div>
                            <ProductsList
                                products={filteredProducts}
                                setCurrentSale={setCurrentSale}
                                currentSale={currentSale}
                            />
                        </>
                    ) : (
                        <ProductsList
                            products={products}
                            setCurrentSale={setCurrentSale}
                            currentSale={currentSale}
                        />
                    )}
                </main>
                <aside>
                    <CartList currentSale={currentSale} setCurrentSale={setCurrentSale} />
                </aside>
            </Container>
        </div>
    )
}
