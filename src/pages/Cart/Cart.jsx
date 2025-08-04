import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-item-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          const quantity = cartItems[item._id] || 0;
          if (quantity > 0) {
            const total = item.price * quantity;

            return (
              <div key={item._id}>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{quantity}</p>
                  <p>${!isNaN(total) ? total.toFixed(2) : '0.00'}</p>
                  <p className='x' onClick={() => removeFromCart(item._id)} style={{cursor: "pointer"}}>x</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
        <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{}</p>
              <p>{getTotalCartAmount()}</p>
        

            </div>
             <hr /> 
            <div className='cart-total-details'>
              <p>Delivery fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
              

            </div>
             <hr /> 
            <div className='cart-total-details'>
              <b>Total</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            <hr /> 
          </div>
           <button onClick={()=>navigate('/order')}>Proceed to checkout</button>
        </div>
          <div className='cart-promocode'>
            <div> If you have a promo code, enter it here.</div>
            <div className='cart-promocode-input'>
              <input type=' text' placeholder='promo code'/>
              <button>Submit</button>

            </div>
          </div>
      </div>
    </div>
  );
};

export default Cart;
