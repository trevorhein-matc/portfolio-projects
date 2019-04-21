import React from 'react'
import CustomTextBase from '../CustomText/CustomTextBase'

const ProductCardText = props => (
    <CustomTextBase
        fontSize={[2, 3, 3]}
        py={1}
        mx={[2, 1, 3]}
        fontFamily='roboto'
        {...props}
    />
)

export default ProductCardText