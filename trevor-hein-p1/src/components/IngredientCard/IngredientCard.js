import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import gridTheme from '../../themes/gridTheme';

import RebassImage from "../IngredientCard/RebassImage";
import IngredientLabel from "../IngredientCard/IngredientLabel";

// const dialogText = "Some random filler";

const styles = theme => ({
    actions: {
        display: "flex"
    },
    card: {
        [theme.breakpoints.down("xs")]: {
          maxWidth: 250,
          marginLeft: "auto",
          marginRight: "auto"
        },
    },
    noPadding: {
      padding: 0,
    }
});

class IngTypeNumber extends React.Component {
  render() {
    return (
      <button className="ingNumType">
        {this.props.value}
      </button>
    );
  }
}

class IngredientCard extends React.Component {

      renderTypeNumber(i) {
        return (
          <div>
            <IngTypeNumber value={i} />
          </div>
        )
      }

      state = {
        expanded: false,
        open: false
      };

      handleClose = () => {
        this.setState({
          open: false
        });
      };
    
      handleClick = () => {
        // this.setState({
        //   open: true
        // });
        // console.log(this.state.name);
        alert("Clicked");
      };
    
      handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
      };
    
      render() {
        const { classes } = this.props;
        // const { open } = this.state;
        const { data } = this.props;
    
        return (
          <div>
            <Card className={classes.card}>
              {/* <div>
                {this.renderTypeNumber(data.type)}
              </div> */}
              <CardActionArea
                // onClick={this.handleClick}
                // data={data}
              >

                <CardContent className={classes.noPadding}>
                  <RebassImage data={data} />
                </CardContent>
              </CardActionArea>
              <IngredientLabel>
                {data.name}
              </IngredientLabel>
            </Card>
          </div>
        );
      }
}


IngredientCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default gridTheme(withStyles(styles)(IngredientCard));