import { useRouter } from 'next/router';
import { useState } from 'react';

import Card from '../ui/Card';
import classes from "./AwiStoreItem.module.css";

function AwiStoreItem(props) {
  const router = useRouter();
  const [product, setProduct] = useState(props || {});

  function showFavoritesHandler() {
    router.push('/' + props.id);
  }

  console.log(('item page ===', props));

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={classes.content}>
          <h3>{product.productType}</h3>
          <h5>{product.description}</h5>
          <h5>{product.location}</h5>
          <price>{product.price}</price>
          <tags>{product.tags}</tags>
        </div>
        <div className={classes.action}>
          <button onClick={showFavoritesHandler}>TO Favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default AwiStoreItem;
