import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const useSingleOrder = () => {
    //set data in services
    const [orderData, setOrderData] = useState({})

    const { orderId } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/payment/${orderId}`)
            .then(response => response.json())
            .then(data => setOrderData(data))
    }, [orderId])

    return [orderData, setOrderData]
}

export default useSingleOrder;