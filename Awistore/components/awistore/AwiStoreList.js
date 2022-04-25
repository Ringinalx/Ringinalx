import AwiStoreItem from "./AwiStoreItem";
import classes from "./AwiStoreList.module.css";
import React, { useEffect, useState } from "react";

function AwiStoreList(props) {
  const [products, setData] = useState(props.products || []);

  // useEffect(() => {
  //   fetch('/api/data')
  //     .then((res) => res.json())
  //     .then((awistore) => {
  //       setData(awistore);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  console.log('props products ===', products);

  return <ul className={classes.list}>
    {products && products.length && products.map((product) => (<AwiStoreItem
      key={product.id}
      id={product.id}
      image={product.image}
      productType={product.title}
      description={product.description}
      price={product.price}
      location={product.location}
    />
    ))}
  </ul>

}
export default AwiStoreList;