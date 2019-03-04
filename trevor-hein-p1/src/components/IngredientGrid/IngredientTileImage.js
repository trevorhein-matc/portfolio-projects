import React from 'react';
// import gridTheme from "../../themes/gridTheme";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";

//Image files
import appleBox from"../../images/ingredientPics/appleBox.jpg";
import avocadoBox from"../../images/ingredientPics/avocadoBox.jpg";
import baconBox from"../../images/ingredientPics/baconBox.jpg";
import bananaBox from"../../images/ingredientPics/bananaBox.jpg";
import beanBox from"../../images/ingredientPics/beanBox.jpg";
import bellPepperBox from "../../images/ingredientPics/bellPepperBox.jpg";
import breadBox from"../../images/ingredientPics/breadBox.jpg";
import broccoliBox from"../../images/ingredientPics/broccoliBox.jpg";
import carrotBox from"../../images/ingredientPics/carrotBox.jpg";
import cheddarBox from"../../images/ingredientPics/cheddarBox.jpg";
import chickenBox from"../../images/ingredientPics/chickenBox.jpg";
import cilantroBox from"../../images/ingredientPics/cilantroBox.jpg";
import coconutMilkBox from"../../images/ingredientPics/coconutMilkBox.jpg";
import eggBox from"../../images/ingredientPics/eggBox.jpg";
import fetaBox from"../../images/ingredientPics/fetaBox.jpg";
import garlicBox from"../../images/ingredientPics/garlicBox.jpg";
import grahamCrackerBox from"../../images/ingredientPics/grahamCrackerBox.jpg";
import greekYogurtBox from"../../images/ingredientPics/greekYogurtBox.jpg";
import jalapenoPepperBox from"../../images/ingredientPics/jalapenoPepperBox.jpg";
import ketchupBox from"../../images/ingredientPics/ketchupBox.jpg";
import mozzBox from"../../images/ingredientPics/mozzBox.jpg";
import limeBox from"../../images/ingredientPics/limeBox.jpg";
import onionBox from"../../images/ingredientPics/onionBox.jpg";
import pankoBox from"../../images/ingredientPics/pankoBox.jpg";
import parmBox from"../../images/ingredientPics/parmBox.jpg";
import peanutButterBox from"../../images/ingredientPics/peanutButterBox.jpg";
import penneBox from"../../images/ingredientPics/penneBox.jpg";
import potatoBox from"../../images/ingredientPics/potatoBox.jpg";
import riceBox from"../../images/ingredientPics/riceBox.jpg";
import shrimpBox from"../../images/ingredientPics/shrimpBox.jpg";
import spaghettiBox from"../../images/ingredientPics/spaghettiBox.jpg";
import spinachBox from"../../images/ingredientPics/spinachBox.jpg";
import sweetPotatoBox from"../../images/ingredientPics/sweetPotatoBox.jpg";
import tomatoBox from"../../images/ingredientPics/tomatoBox.jpg";
import tortillaBox from"../../images/ingredientPics/tortillaBox.jpg";
import turkeyBox from"../../images/ingredientPics/turkeyBox.jpg";

function IngredientImage(props) {
    const ingredient = props.ingredient;
    console.log(props.ingredient)
    switch (ingredient) {
        case "Apple":
            return (
                <img src={appleBox} alt={props.ingredient} />
            );
        case "Avocado":
            return (
                <img src={avocadoBox} alt={props.ingredient} />
            );
        case "Bacon":
            return (
                <img src={baconBox} alt={props.ingredient} />
            );
        case "Banana":
            return (
                <img src={bananaBox} alt={props.ingredient} />
            );
            case "Beans":
            return (
                <img src={beanBox} alt={props.ingredient} />
            );
            case "Bread":
            return (
                <img src={breadBox} alt={props.ingredient} />
            );
            case "Broccoli":
            return (
                <img src={broccoliBox} alt={props.ingredient} />
            );
            case "Carrots":
            return (
                <img src={carrotBox} alt={props.ingredient} />
            );
            case "Cheddar Cheese":
            return (
                <img src={cheddarBox} alt={props.ingredient} />
            );
            case "Chicken Breast":
            return (
                <img src={chickenBox} alt={props.ingredient} />
            );
            case "Cilantro":
            return (
                <img src={cilantroBox} alt={props.ingredient} />
            );
            case "Coconut Milk":
            return (
                <img src={coconutMilkBox} alt={props.ingredient} />
            );
            case "Egg":
            return (
                <img src={eggBox} alt={props.ingredient} />
            );
            case "Feta Cheese":
            return (
                <img src={fetaBox} alt={props.ingredient} />
            );
            case "Garlic":
            return (
                <img src={garlicBox} alt={props.ingredient} />
            );
            case "Graham Crackers":
            return (
                <img src={grahamCrackerBox} alt={props.ingredient} />
            );
            case "Greek Yogurt":
            return (
                <img src={greekYogurtBox} alt={props.ingredient} />
            );
            case "Jalapeno Pepper":
            return (
                <img src={jalapenoPepperBox} alt={props.ingredient} />
            );
            case "Ketchup":
            return (
                <img src={ketchupBox} alt={props.ingredient} />
            );
            case "Mozzerella Cheese":
            return (
                <img src={mozzBox} alt={props.ingredient} />
            );            
            case "Lime":
            return (
                <img src={limeBox} alt={props.ingredient} />
            );
            case "Onion":
            return (
                <img src={onionBox} alt={props.ingredient} />
            );
            case "Panko":
            return (
                <img src={pankoBox} alt={props.ingredient} />
            );
            case "Parmesan Cheese":
            return (
                <img src={parmBox} alt={props.ingredient} />
            );
            case "Peanut Butter":
            return (
                <img src={peanutButterBox} alt={props.ingredient} />
            );
            case "Penne Pasta":
            return (
                <img src={penneBox} alt={props.ingredient} />
            );
            case "Potato":
            return (
                <img src={potatoBox} alt={props.ingredient} />
            );
            case "Rice":
            return (
                <img src={riceBox} alt={props.ingredient} />
            );
            case "Shrimp":
            return (
                <img src={shrimpBox} alt={props.ingredient} />
            );
            case "Spaghetti Pasta":
            return (
                <img src={spaghettiBox} alt={props.ingredient} />
            );
            case "Spinach":
            return (
                <img src={spinachBox} alt={props.ingredient} />
            );
            case "Sweet Potato":
            return (
                <img src={sweetPotatoBox} alt={props.ingredient} />
            );
            case "Tomato":
            return (
                <img src={tomatoBox} alt={props.ingredient} />
            );
            case "Tortilla":
            return (
                <img src={tortillaBox} alt={props.ingredient} />
            );
            case "Ground Turkey":
            return (
                <img src={turkeyBox} alt={props.ingredient} />
            );
      default:
        return (
            <img src={bellPepperBox} alt={props.ingredient} />
        );
    }
  }

class IngredientTileImage extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { data } = this.props;

        return (
            // <img src={bellPepperBox} alt={data.name} />
            <IngredientImage ingredient={data.name} />
        )
    }
}



export default IngredientTileImage

// export default gridTheme(withStyles(styles)(IngredientTileImage));