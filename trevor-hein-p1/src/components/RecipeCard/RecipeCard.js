import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import gridTheme from '../../themes/gridTheme';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IngredientLabel from "../IngredientCard/IngredientLabel";
import RecipeImage from "../RecipeCard/RecipeImage";

const styles = theme => ({
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    actions: {
        display: "flex"
    },
    expand: {
        transform: "rotate(0deg)",
        transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
        }),
        marginLeft: "auto"
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    card: {
        [theme.breakpoints.down("xs")]: {
          maxWidth: 250,
          marginLeft: "auto",
          marginRight: "auto"
        }
    },
    noPadding: {
      padding: 0,
    }
});

class RecipeCard extends React.Component {
    state = {
        expanded: false,
      };

      handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
      };
    
      render() {
        const { classes } = this.props;
        const { data } = this.props;
    
        return (
          <div>
            <Card className={classes.card}>
              <IngredientLabel>
                {data.name}
              </IngredientLabel>
              <CardContent className= {classes.noPadding} >
                <RecipeImage data={data} />
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <Typography component="h2">
                    Ingredients
                </Typography>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                {data.ingredients.map((ingredient) => (
                  <Typography paragraph key={ingredient}>
                    {ingredient}
                  </Typography>
                ))} 
                </CardContent>
              </Collapse>
            </Card>
          </div>
        );
      }
}





RecipeCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default gridTheme(withStyles(styles)(RecipeCard));