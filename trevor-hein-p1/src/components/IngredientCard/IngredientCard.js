import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import classnames from "classnames";
import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
// import Collapse from "@material-ui/core/Collapse";
import gridTheme from '../../themes/gridTheme';
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import red from "@material-ui/core/colors/red";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Button from "@material-ui/core/Button";

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