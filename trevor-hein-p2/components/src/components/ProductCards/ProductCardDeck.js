import React from "react"
import GridLayout from '../GridLayout/GridLayout'
import Grid from '@material-ui/core/Grid'
import ProductCard from '../ProductCards/ProductCard'

const productData = [
    { 
        name: "Assorted Flavor Hard Candies",
        img: "https://www.twoguysplayingzelda.com/wp-content/uploads/2018/01/Rupee-Candy.jpg",
        desc: ""
    },
    {
        name: "Fudge",
        img: "https://assets.marthastewart.com/styles/video-preview-1280x720-highdpi/d24/easy_walnut_fudge_recipe/easy_walnut_fudge_recipe_horiz.jpg?itok=4b9qvgCI",
        desc: ""
    },
    {
        name: "Peanut Brittle",
        img: "http://www.cookingmamas.com/wp-content/uploads/2012/03/Peanut-Brittle.jpg",
        desc: ""
    }
]

class ProductCardDeck extends React.Component {
    render() {
        return (
            <GridLayout>
                {productData.map((data, index)=> (
                    <Grid item xs={12} sm={12} md={12} key={data.name}>
                        <ProductCard data={data}>
                        </ProductCard>
                    </Grid>
                ))}
            </GridLayout>
        )
    }
}


export default ProductCardDeck