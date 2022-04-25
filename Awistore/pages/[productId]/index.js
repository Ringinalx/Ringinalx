import { MongoClient } from 'mongodb';
import ProductDetails from '../../components/awistore/ProductDetails';

function DetailsPage() {
  return (
    <ProductDetails image='https://www.thecarconnection.com/overview/mercedes-benz_gl-class_2015#image=100498694'
      productType='Cars'
      address='City'
      price='#54,000000'
      description='My First Product'
    />
  );
}
export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://Ibro4realx:Mezozoyozi5@cluster0.firp8.mongodb.net/Products?retryWrites=true&w=majority');
  const db = client.db();

  const productCollection = db.collection('products');
  const products = await productCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: products.map(products => ({ params: { productId: products._id.toString() }, })),
  };
}

export async function getStaticProps(context) {
  //fetch data from an API
  const productId = context.params.productId;
  console.log(productId);
  return {
    props: {
      products: {
        id: 'p1',
        image: 'https://www.thecarconnection.com/overview/mercedes-benz_gl-class_2015#image=100498694',
        productType: 'Cars',
        address: 'City',
        price: '#54,000000',
        description: 'My First Product',
      },
    },
    revalidate: 3600,
  };
}



export default DetailsPage;