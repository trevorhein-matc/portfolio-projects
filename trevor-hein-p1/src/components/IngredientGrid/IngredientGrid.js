import React from 'react';
import gridTheme from "../../themes/gridTheme";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import classnames from "classnames";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import IngredientData from "../../data/ingredients.json";
import IngredientTileImage from "../IngredientGrid/IngredientTileImage";


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justrifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

// function ChooseType(props) {
//     const typeChoice = props.typeChoice;
//     switch (typeChoice) {
//       case "veggie":
//         return (
//           <div>
//             <h2>It's a veggie!</h2>
//           </div>
//         );
//       default:
//         return (
//           <div>
//             <h3>Beats me!</h3>
//           </div>
//         );
//     }
//   }

class IngredientGrid extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { classes } = this.props;
        // const { data } = this.props;

        return (

          <div className={classes.root}>
            <GridList cellHeight={150} className={classes.gridList}>
              <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
                <ListSubheader component="div">tester</ListSubheader>
              </GridListTile>
              {IngredientData.map(tile => (
                <GridListTile key={tile.name}>

                  <IngredientTileImage data={tile}/>

                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>{tile.name}</span>}
                    actionIcon={
                      <IconButton className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        );
      }
}

IngredientGrid.propTypes = {
    classes: PropTypes.object.isRequired
};

export default gridTheme(withStyles(styles)(IngredientGrid));