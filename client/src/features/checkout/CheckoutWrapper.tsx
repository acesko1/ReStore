import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch } from "../../app/store/configureStore";
import { setBasket } from "../basket/basketSlice";
import CheckoutPage from "./CheckoutPage";

const stripePromise = loadStripe('pk_test_51KDSLyLpo8mQIn6MGhiIfxbVQVt9CK6x1172gKkUxdNpHbYh2tL6pq4z9Bod1FRC9sgZUH42lBot1xQFWuvABQNS00VhGY5zpA');

export default function CheckoutWrapper(){

    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Payments.createPaymentIntent()
        .then(basket => dispatch(setBasket(basket)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [dispatch]);

    if(loading) return <LoadingComponent message='Loading checkout...' />
    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage />
        </Elements>
    )
}