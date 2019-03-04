import React from 'react';
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import classnames from "classnames";
// import CardMedia from "@material-ui/core/CardMedia";


//Image files
import appleBox from"../../images/ingredientPics/appleBox.jpg";
// import avocadoBox from"../../images/ingredientPics/avocadoBox.jpg";
// import baconBox from"../../images/ingredientPics/baconBox.jpg";
// import bananaBox from"../../images/ingredientPics/bananaBox.jpg";
// import beanBox from"../../images/ingredientPics/beanBox.jpg";
// import bellPepperBox from "../../images/ingredientPics/bellPepperBox.jpg";
// import breadBox from"../../images/ingredientPics/breadBox.jpg";
// import broccoliBox from"../../images/ingredientPics/broccoliBox.jpg";
// import carrotBox from"../../images/ingredientPics/carrotBox.jpg";
// import cheddarBox from"../../images/ingredientPics/cheddarBox.jpg";
// import chickenBox from"../../images/ingredientPics/chickenBox.jpg";
// import cilantroBox from"../../images/ingredientPics/cilantroBox.jpg";
// import coconutMilkBox from"../../images/ingredientPics/coconutMilkBox.jpg";
// import eggBox from"../../images/ingredientPics/eggBox.jpg";
// import fetaBox from"../../images/ingredientPics/fetaBox.jpg";
// import garlicBox from"../../images/ingredientPics/garlicBox.jpg";
// import grahamCrackerBox from"../../images/ingredientPics/grahamCrackerBox.jpg";
// import greekYogurtBox from"../../images/ingredientPics/greekYogurtBox.jpg";
// import jalapenoPepperBox from"../../images/ingredientPics/jalapenoPepperBox.jpg";
// import ketchupBox from"../../images/ingredientPics/ketchupBox.jpg";
// import mozzBox from"../../images/ingredientPics/mozzBox.jpg";
// import limeBox from"../../images/ingredientPics/limeBox.jpg";
// import onionBox from"../../images/ingredientPics/onionBox.jpg";
// import pankoBox from"../../images/ingredientPics/pankoBox.jpg";
// import parmBox from"../../images/ingredientPics/parmBox.jpg";
// import peanutButterBox from"../../images/ingredientPics/peanutButterBox.jpg";
// import penneBox from"../../images/ingredientPics/penneBox.jpg";
// import potatoBox from"../../images/ingredientPics/potatoBox.jpg";
// import riceBox from"../../images/ingredientPics/riceBox.jpg";
// import shrimpBox from"../../images/ingredientPics/shrimpBox.jpg";
// import spaghettiBox from"../../images/ingredientPics/spaghettiBox.jpg";
// import spinachBox from"../../images/ingredientPics/spinachBox.jpg";
// import sweetPotatoBox from"../../images/ingredientPics/sweetPotatoBox.jpg";
// import tomatoBox from"../../images/ingredientPics/tomatoBox.jpg";
// import tortillaBox from"../../images/ingredientPics/tortillaBox.jpg";
// import turkeyBox from"../../images/ingredientPics/turkeyBox.jpg";

// const styles = theme => ({
//     media: {
//         height: 0,
//         paddingTop: "56.25%",
//         marginTop: "30"
//     }
// })

class IngredientCardImage extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        // const { classes } = this.props;
        const { data } = this.props;

        return (
            <div>
            <img src={appleBox} alt=""/>

            <h1>{data.name}</h1>
            </div>
        )
    }
}

// IngredientCardImage.propTypes = {
//     classes: PropTypes.object.isRequired
// };

export default IngredientCardImage

