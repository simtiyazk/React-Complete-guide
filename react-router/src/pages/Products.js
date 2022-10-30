import { Link } from "react-router-dom";

const Products = () => {
    return (
        <section>
        <h1>This is a Products page.</h1>
        <ul>
            <li>
                <Link to='/products/book' >A Book</Link>
            </li>
            <li>
                <Link to='/products/car' >A Car</Link>
            </li>
            <li>
                <Link to='/products/laptop' >Laptop</Link>
            </li>
        </ul>
        </section>
    )
    
 }
 
 export default Products;