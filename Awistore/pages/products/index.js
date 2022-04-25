import { useRouter } from 'next/router';
import NewProductForm from '../../components/awistore/NewProductForm';





function ProductsPage() {
    const router = useRouter();
    async function AddProductHandler(enteredProductData) {
        const response = await fetch(' /api/new-product', {
            method: 'POST',
            body: JSON.stringify(enteredProductData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        router.push('/');
    }
    return <NewProductForm onAddProduct={AddProductHandler} />



}



export default ProductsPage;