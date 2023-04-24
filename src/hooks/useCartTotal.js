import { useEffect, useState } from "react";

import { useAuthStore } from "./";

export const useCartTotal = () => {
    const { user } = useAuthStore();
    const myCart = user.cart;

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const initialValue = 0;
        const subTotal = myCart.reduce((acc,item) => acc + item.price * item.quantity, initialValue);
        setTotal(subTotal);
    }, [myCart]);

    return total;
}
