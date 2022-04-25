import classes from './AwiStoreProductDetails.module.css';

function AwiStoreProductDetails(products) {
    return (
    <section className={classes.detail}>
      <img src={products.image}
      alt={products.title}/>
      <h1> {products.title}</h1>
      <p>{products.description}</p>
    </section>
    );
}

export default AwiStoreProductDetails;