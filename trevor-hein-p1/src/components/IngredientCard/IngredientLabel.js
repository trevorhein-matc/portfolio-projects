import React from 'react'
import HeadingBase from '../Heading/HeadingBase'

const IngredientLabel = props => (
    <HeadingBase 
        as='h1' 
        fontSize={[1, 1, 1]} 
        fontFamily='roboto'
        textAlign='center'
        {...props} 
    />
)
export default IngredientLabel