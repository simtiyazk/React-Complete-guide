import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams();
    console.log(params);

    return (
        <section>
            <h1>Products Details</h1>
            <p>{params.productId}</p>
            {/* // productId is key used in App.js for ProductDetail  */}
        </section>
    )
}

export default ProductDetails;