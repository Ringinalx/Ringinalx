import { MongoClient } from "mongodb";
import AwiStoreList from "../components/awistore/AwiStoreList";

function AwilandHomePage(props) {

  return (
    <AwiStoreList products={props.products} />);
}

export async function getStaticProps() {

  //fetch data from an API
  const client = await MongoClient.connect('mongodb+srv://Ibro4realx:Mezozoyozi5@cluster0.firp8.mongodb.net/Products?retryWrites=true&w=majority');
  const db = client.db();

  const productCollection = db.collection('products');

  const products = await productCollection.find().toArray();
  console.log('products', products);
  client.close();

  return {
    props: {
      products: products.map(product => ({
        title: product.title,
        image: product.image,
        id: product._id.toString(),
        location: product.location,
        price: product.price,
        description: product.description,
      })),
    },
    revalidate: 1,
  };
}

export default AwilandHomePage;
