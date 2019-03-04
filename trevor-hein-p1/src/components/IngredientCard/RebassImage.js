import React from 'react'
import { Image as ImageBase } from 'rebass'

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
    // console.log(props.ingredient)
    switch (ingredient) {
        case "Apple":
            return (
                <ImageBase 
                    src={appleBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
        case "Avocado":
            return (
                <ImageBase 
                    src={avocadoBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
        case "Bacon":
            return (
                <ImageBase 
                    src={baconBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
        case "Banana":
            return (
                <ImageBase 
                    src={bananaBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
        case "Beans":
            return (
                <ImageBase 
                    src={beanBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
        case "Bread":
            return (
                <ImageBase 
                    src={breadBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Broccoli":
            return (
                <ImageBase 
                    src={broccoliBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Carrots":
            return (
                <ImageBase 
                    src={carrotBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Cheddar Cheese":
            return (
                <ImageBase 
                    src={cheddarBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Chicken Breast":
            return (
                <ImageBase 
                    src={chickenBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Cilantro":
            return (
                <ImageBase 
                    src={cilantroBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Coconut Milk":
            return (
                <ImageBase 
                    src={coconutMilkBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Egg":
            return (
                <ImageBase 
                    src={eggBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Feta Cheese":
            return (
                <ImageBase 
                    src={fetaBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Garlic":
            return (
                <ImageBase 
                    src={garlicBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Graham Crackers":
            return (
                <ImageBase 
                    src={grahamCrackerBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Greek Yogurt":
            return (
                <ImageBase 
                    src={greekYogurtBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Jalapeno Pepper":
            return (
                <ImageBase 
                    src={jalapenoPepperBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Ketchup":
            return (
                <ImageBase 
                    src={ketchupBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Mozzerella Cheese":
            return (
                <ImageBase 
                    src={mozzBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );            
            case "Lime":
            return (
                <ImageBase 
                    src={limeBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Onion":
            return (
                <ImageBase 
                    src={onionBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Panko":
            return (
                <ImageBase 
                    src={pankoBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Parmesan Cheese":
            return (
                <ImageBase 
                    src={parmBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Peanut Butter":
            return (
                <ImageBase 
                    src={peanutButterBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Penne Pasta":
            return (
                <ImageBase 
                    src={penneBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Potato":
            return (
                <ImageBase 
                    src={potatoBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Rice":
            return (
                <ImageBase 
                    src={riceBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Shrimp":
            return (
                <ImageBase 
                    src={shrimpBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Spaghetti Pasta":
            return (
                <ImageBase 
                    src={spaghettiBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Spinach":
            return (
                <ImageBase 
                    src={spinachBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Sweet Potato":
            return (
                <ImageBase 
                    src={sweetPotatoBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Tomato":
            return (
                <ImageBase 
                    src={tomatoBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Tortilla":
            return (
                <ImageBase 
                    src={tortillaBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Ground Turkey":
            return (
                <ImageBase 
                    src={turkeyBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Bell Pepper":
            return (
                <ImageBase 
                    src={bellPepperBox}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            )
      default:
        return (
            <img src={bellPepperBox} alt={props.ingredient} />
        );
    }
  }

class RebassImage extends React.Component {

    render() {
        const { data } = this.props;

        return (
            <IngredientImage ingredient={data.name} />
        )
    }
}

export default RebassImage;
