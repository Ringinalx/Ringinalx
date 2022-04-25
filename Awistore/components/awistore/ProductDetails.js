import classes from './ProductDetails.module.css';

function ProductDetails(props){
    return(
    <section className={classes.details}>

        <img src={props.image}
        alt={props.productType}
        />
        <h1>{props.price}</h1>
        <description>{props.description}</description>
        <address>{props.address}</address>
        <price>{props.price}</price>
    </section>

    );
}
export default ProductDetails;




