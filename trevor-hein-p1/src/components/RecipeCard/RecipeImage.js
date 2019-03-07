import React from 'react'
import { Image as ImageBase } from 'rebass'

//Image files
import AppleDip from"../../images/RecipePics/appleDip.jpg";
import BaconAndEggs from"../../images/RecipePics/baconAndEggs.jpg";
import ChickenFingers from"../../images/RecipePics/chickenFingers.jpg";
import ChickenParmesan from"../../images/RecipePics/chickenParmesan.jpg";
import ChickenStirFry from"../../images/RecipePics/chickenStirFry.jpg";
import ChimichurriSauce from"../../images/RecipePics/chimichurriSauce.jpg";
import Guacamole from"../../images/RecipePics/guacamole.jpg";
import PicoDeGallo from"../../images/RecipePics/picoDeGallo.jpg";
import ShrimpAlfredo from"../../images/RecipePics/shrimpAlfredo.jpg";
import ShrimpCeviche from"../../images/RecipePics/shrimpCeviche.jpg";
import ShrimpCurry from"../../images/RecipePics/shrimpCurry.jpg";
import ShrimpSpinachSalad from"../../images/RecipePics/shrimpSpinachSalad.jpg";
import ShrimpTacos from"../../images/RecipePics/shrimpTacos.jpg";
import SweetSourSandwich from"../../images/RecipePics/sweetSourSandwich.jpg";
import TurkeyBreakfastBurger from"../../images/RecipePics/turkeyBreakfastBurger.jpg";
import TurkeyChili from"../../images/RecipePics/turkeyChili.jpg";
import TurkeySloppyJoes from"../../images/RecipePics/turkeySloppyJoes.jpg";


function RecipePic(props) {
    const recipe = props.recipe;
    // console.log(props.ingredient)
    switch (recipe) {
        case "Apple Dip":
            return (
                <ImageBase 
                    src={AppleDip}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
        case "Bacon and Eggs":
            return (
                <ImageBase 
                    src={BaconAndEggs}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Chicken Fingers":
            return (
                <ImageBase 
                    src={ChickenFingers}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Chicken Parmesan":
            return (
                <ImageBase 
                    src={ChickenParmesan}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Stir Fry":
            return (
                <ImageBase 
                    src={ChickenStirFry}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Chimichurri Sauce":
            return (
                <ImageBase 
                    src={ChimichurriSauce}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Guacamole":
            return (
                <ImageBase 
                    src={Guacamole}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Pico de Gallo":
            return (
                <ImageBase 
                    src={PicoDeGallo}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Shrimp Alfredo":
            return (
                <ImageBase 
                    src={ShrimpAlfredo}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Shrimp Ceviche":
            return (
                <ImageBase 
                    src={ShrimpCeviche}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Shrimp Curry":
            return (
                <ImageBase 
                    src={ShrimpCurry}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Shrimp Spinach Salad":
            return (
                <ImageBase 
                    src={ShrimpSpinachSalad}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Shrimp Tacos":
            return (
                <ImageBase 
                    src={ShrimpTacos}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Sweet Sour Sandwich":
            return (
                <ImageBase 
                    src={SweetSourSandwich}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Turkey Breakfast Burger":
            return (
                <ImageBase 
                    src={TurkeyBreakfastBurger}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Turkey Chili":
            return (
                <ImageBase 
                    src={TurkeyChili}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            case "Turkey Sloppy Joe":
            return (
                <ImageBase 
                    src={TurkeySloppyJoes}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
            default:
            return (
                <ImageBase 
                    src={null}
                    my={0}
                    width={[1]}
                    borderRadius={2}
                />
            );
    }
  }

class RecipeImage extends React.Component {

    render() {
        const { data } = this.props;

        return (
            <RecipePic recipe={data.name} />
        )
    }
}

export default RecipeImage;
