import React from 'react'
import { Image as ImageBase } from 'rebass'

class ProductCardImage extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <ImageBase
                src={data.img}
                mb={-9}
                width={[2/3]}
                borderRadius={8}
                height={[250, 200, 300]}
            />
        )
    }
}

export default ProductCardImage;