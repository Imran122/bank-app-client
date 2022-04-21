import { useEffect, useState } from 'react';

const useProducts = () => {
    //set data in services
    const [products, setProducts] = useState([])
    //fetch data from fajedb json file
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data.products))
    }, [])

    return [products, setProducts]
}

export default useProducts;