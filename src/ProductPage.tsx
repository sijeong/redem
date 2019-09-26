import React from 'react'
import { __Product, products } from './ProductData'
import { RouteComponentProps, Prompt } from 'react-router-dom'

const ProductPage: React.FC<__Props> = (props, __State) => {
    // const [id, setId] = React.useState("")
    const navAwayMessage = () => {
        return "Are you sure you leave without buying this products?"
    }
    const [state, setState] = React.useState<__State>({
        added: false
    });

    React.useEffect(() => {
        if (props.match.params.id) {
            const id: number = parseInt(props.match.params.id, 10);
            const product = products.filter(p => p.id === id)[0];
            setState({
                product: product,
                added: false
            });
        }
    }, [state])

    const product = state.product;

    const handleAddClick = () => {
        setState({
            added: true
        })
    }
    return (

        <div className="page-container">
            <Prompt when={!state.added} message={navAwayMessage} />
            {product ? (
                <React.Fragment>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p className="product-price">
                        {new Intl.NumberFormat("en-US", {
                            currency: "USD",
                            style: "currency"
                        }).format(product.price)}
                    </p>
                    {
                        !state.added && (
                            <button onClick={handleAddClick}>Add to basket</button>
                        )
                    }
                </React.Fragment>
            ) : (
                    <p>Product not found</p>
                )}
        </div>
    )
}

type __State = {
    product?: __Product;
    added: boolean
}

type __Props = RouteComponentProps<{ id: string }>;

export default ProductPage;