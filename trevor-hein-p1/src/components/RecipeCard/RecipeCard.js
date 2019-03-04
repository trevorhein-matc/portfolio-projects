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
import red from "@material-ui/core/colors/red";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Button from "@material-ui/core/Button";

const dialogText = "Some random filler";

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
        marginLeft: "auto",
        [theme.breakpoints.up("xs")]: {
        // marginRight: -8
        }
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },
    avatar: {
        backgroundColor: red[500]
    },
    dialog: {
        marginTop: -30,
        marginBottom: -30
    },
    dialogContent: {
        minWidth: "90%",
        maxWidth: "90%"
    },
    card: {
        [theme.breakpoints.down("xs")]: {
          maxWidth: 250,
          marginLeft: "auto",
          marginRight: "auto"
        },
        // [theme.breakpoints.down("sm")]: {
        //   maxWidth: 400,
        //   marginLeft: "auto",
        //   marginRight: "auto"
        // }
        // margin: 12,
    }
});

class RecipeCard extends React.Component {
    state = {
        expanded: false,
        open: false
      };

      // constructor(props) {
      //   super(props);
      //   console.log(this.props);
      // }

      handleClose = () => {
        this.setState({
          open: false
        });
      };
    
      handleClick = () => {
        this.setState({
          open: true
        });
      };
    
      handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
      };
    
      render() {
        const { classes } = this.props;
        const { open } = this.state;
        const { data } = this.props;
    
        return (
          <div>
            <Card className={classes.card}>

              <CardActionArea>
                {/* <CardMedia
                  className={classes.media}
                  image={data.name}
                  title="Sloth!"
                /> */}

                <CardContent>
                </CardContent>
              </CardActionArea>
              {/* <CardActions className={classes.actions} disableActionSpacing>
    
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.handleClick}
                >
                  Click here
                </Button>
    
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

                </CardContent>
              </Collapse> */}
            </Card>
          </div>
        );
      }
}





RecipeCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default gridTheme(withStyles(styles)(RecipeCard));