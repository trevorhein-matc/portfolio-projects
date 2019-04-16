import React from 'react'
import { Card, Flex } from 'rebass'
import ProductCardHeading from '../ProductCards/ProductCardHeading'
import ProductCardText from '../ProductCards/ProductCardText'
import ProductCardImage from '../ProductCards/ProductCardImage'


class ProductCard extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <Card
                fontSize={1}
                fontWeight='bold'
                width={[ 1, 1, 1]}
                p={0}
                my={2}
                bg='#f6f6ff'
                borderRadius={8}
                boxShadow='0 15px 16px rgba(0, 0, 0, 0.25)'
            >

                <ProductCardImage data={data}>

                </ProductCardImage>
            </Card>
        )
    }
}

export default ProductCard;