import React from 'react'
import CustomTextBase from '../CustomText/CustomTextBase'

const ProductCardText = props => (
    <CustomTextBase
        fontSize={[3, 3, 3]}
        py={1}
        mx={5}
        fontFamily='roboto'
        {...props}
    />
)

export default ProductCardText