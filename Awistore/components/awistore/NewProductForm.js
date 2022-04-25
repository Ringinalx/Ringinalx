
import Card from '../ui/Card';
import {useRef} from 'react';


import classes from './NewProductForm.module.css';

function NewProductForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const priceInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const productData = {
      
      title: enteredTitle,
      price:  enteredPrice,
      image: enteredImage,
      location: enteredAddress,
      description: enteredDescription,
    };

    props.onAddProduct(productData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Product Type</label>
          <input type='text' required id='title' ref= {titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Product Image</label>
          <input type='url' required id='image'  ref= {imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='price'>Product Price</label>
          <input type='price' required id='price'  ref= {priceInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address'  ref= {addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5' ref= {descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button> Add Product</button>
        </div>
      </form>
    </Card>
    
  );
  
}

export default NewProductForm;