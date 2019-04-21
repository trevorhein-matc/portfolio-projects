import React from "react"
import GridLayout from '../GridLayout/GridLayout'
import Grid from '@material-ui/core/Grid'
import ProductCard from '../ProductCards/ProductCard'

const productData = [
    { 
        title: "Hard Candies",
        img: "https://www.twoguysplayingzelda.com/wp-content/uploads/2018/01/Rupee-Candy.jpg",
        desc: "Great taste in a wide variety of flavors."
    },
    {
        title: "Fudge",
        img: "https://assets.marthastewart.com/styles/video-preview-1280x720-highdpi/d24/easy_walnut_fudge_recipe/easy_walnut_fudge_recipe_horiz.jpg?itok=4b9qvgCI",
        desc: "Delicious, decadent fudge with a variety of nuts."
    },
    {
        title: "Peanut Brittle",
        img: "http://www.cookingmamas.com/wp-content/uploads/2012/03/Peanut-Brittle.jpg",
        desc: "A satisfying crunch."
    }
]

class ProductCardDeck extends React.Component {
    render() {
        return (
            <GridLayout>
                {productData.map((data, index)=> (
                    <Grid item xs={12} sm={12} md={6} key={data.title}>
                        <ProductCard data={data} />
                    </Grid>
                ))}
            </GridLayout>
        )
    }
}


export default ProductCardDeck