import React from 'react';
import Aux from '../../../HOC/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredientSummary)
        .map(igKey => {
            return <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        })

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with these ingredients</p>
            <ul>
            {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong> </p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    )
};

export default orderSummary;