import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => {
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label}
             label={ctrl.label}
             added={() => props.ingredientAdded(ctrl.type)}
             removed={() => props.ingredientRemove(ctrl.type)} />
        ))}
        

    </div>
}

export default buildControls;