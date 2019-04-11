import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import Paper from '@material-ui/core/Paper'
import CarouselSlides from '../Carousel/CarouselSlides'
import { Box } from 'rebass'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const carouselSlides = [
    {
        name: 'carousel1',
        title: 'Slide 1',
        text: 'This is sample text for slide 1.'
    },
    {
        name: 'carousel2',
        title: 'Slide 2',
        text: 'This is sample text for slide 2.'
    },
    {
        name: 'carousel3',
        title: 'Slide 3',
        text: 'This is sample text for slide 3.'
    },
    {
        name: 'carousel4',
        title: 'Slide 4',
        text: 'This is sample text for slide 4.'
    },
    {
        name: 'carousel5',
        title: 'Slide 5',
        text: 'This is sample text for slide 5.'
    },
];

const styles = theme => ({
    root: {
        flexGrow:1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    tester: {
        display: 'block',
        zIndex: 25,
    }
});

class Carousel extends React.Component {
    state = {
        activeSlide: 0,
    };

    nextSlide = () => {
        this.setState(prevState => ({
            activeSlide: prevState.activeSlide + 1,
        }));
    };

    prevSlide = () => {
        this.setState(prevState => ({
            activeSlide: prevState.activeSlide - 1,
        }));
    };

    handleSlideChange = activeSlide => {
        this.setState({ activeSlide });
    };

    render() {
        const { classes, theme } = this.props;
        const { activeSlide } = this.state;
        const maxSlides = carouselSlides.length;

        return (
            <div className={classes.root}>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>{carouselSlides[activeSlide].name}</Typography>
                </Paper>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeSlide}
                    onChangeIndex={this.handleSlideChange}
                    enableMouseEvents
                >
                    {carouselSlides.map((slide, index) => (
                        <div key={slide.name}>
                            {Math.abs(activeSlide - index) <= 2 ? (
                                <CarouselSlides data={slide} />
                            ) : null}
                        </div>
                    ))}
                </SwipeableViews>
            </div>
        )
    }
}

Carousel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Carousel);