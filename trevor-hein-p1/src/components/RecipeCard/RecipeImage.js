import React from 'react'
import { Image as ImageBase } from 'rebass'

//Image files
import appleDip from"../../images/RecipePics/appleDip.jpg";
import baconAndEggs from"../../images/RecipePics/baconAndEggs.jpg";
import chickenFingers from"../../images/RecipePics/chickenFingers.jpg";
import chickenParmesan from"../../images/RecipePics/chickenParmesan.jpg";
import chickenStirFry from"../../images/RecipePics/chickenStirFry.jpg";
import chimichurriSauce from"../../images/RecipePics/chimichurriSauce.jpg";
import guacamole from"../../images/RecipePics/guacamole.jpg";
import picoDeGallo from"../../images/RecipePics/picoDeGallo.jpg";
import shrimpAlfredo from"../../images/RecipePics/shrimpAlfredo.jpg";
import shrimpCeviche from"../../images/RecipePics/shrimpCeviche.jpg";
import shrimpCurry from"../../images/RecipePics/shrimpCurry.jpg";
import shrimpSpinachSalad from"../../images/RecipePics/shrimpSpinachSalad.jpg";
import shrimpTacos from"../../images/RecipePics/shrimpTacos.jpg";
import sweetSourSandwich from"../../images/RecipePics/sweetSourSandwich.jpg";
import turkeyBreakfastBurger from"../../images/RecipePics/turkeyBreakfastBurger.jpg";
import turkeyChili from"../../images/RecipePics/turkeyChili.jpg";
import turkeySloppyJoes from"../../images/RecipePics/turkeySloppyJoes.jpg";


function RecipeImage(props) {
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

class RecipeImage extends React.Component {

    render() {
        const { data } = this.props;

        return (
            <RecipeImage ingredient={data.name} />
        )
    }
}

export default RecipeImage;
