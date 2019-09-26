import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { __Product, products } from './ProductData';

const ProductsPage: React.FC<RouteComponentProps> = (props, __State) => {
    // const [search, setSearch] = React.useState(props.location.search);
    const [state, setState] = React.useState<__State>({
        products: [],
        search: ""
    })
    React.useEffect(() => {
        const searchParams = new URLSearchParams(props.location.search);
        const search = searchParams.get("search") || "";
        setState({
            products: products,
            search: search
        })
    }, [state])

    // React.useReducer()
    // React.useRef()
    // React.useCallback()

    return (
        <div className="page-container">
            <p>
                Welcome to React Shop where you can get all your tools for ReactJS!
            </p>
            <ul className="product-list">
                {state.products.map(product => {
                    if (!state.search || (state.search && product.name.toLowerCase().indexOf(state.search.toLowerCase()) > -1)) {
                        return (
                            <li key={product.id} className="product-list-item">
                                <Link to={`/products/${product.id}`}>{product.name}</Link>
                            </li>
                        )
                    } else {
                        return null;
                    }
                })}
            </ul>
        </div>
    )
}

type __State = {
    products: __Product[];
    search: string
}

export default ProductsPage