import React from 'react'
import { Image as ImageBase } from 'rebass'
import { Flex, Box, Card, Heading } from 'rebass'
import Typography from '@material-ui/core/Typography'
import BackgroundImage from 'rebass'
import { withStyles } from '@material-ui/core/styles'

import mjPic1 from "../../images/JumbotronPics/mj1.jpg";
import mjPic2 from "../../images/JumbotronPics/mj2.jpg";
import mjPic3 from "../../images/JumbotronPics/mj3.jpg";
import mjPic4 from "../../images/JumbotronPics/mj4.jpg";
import mjPic5 from "../../images/JumbotronPics/mj5.jpg";

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

function ImagePicker(props) {
    const mjPic = props.mjPic;
    switch (mjPic) {
        case "carousel1":
            return (
                <Card
                    p={1}
                    py={[7, 7, 8]}
                    width={[1, 1, 1]}
                    backgroundImage='url(https://www.denverpost.com/wp-content/uploads/2018/12/Marijuana007.jpg)'
                    backgroundSize='cover'
                    backgroundPosition='center'
                    color='white'
                    bg='orange'
                >
                    <Box
                        my={0}
                        p={2}
                        width={[ 3/4, 1/2, 1/4 ]}
                        bg="hsla(0, 0%, 0%, 0.34)" 
                        // css={{
                        //     marginTop: '-14em',
                        //     marginLeft: '1em',
                        // }}
                    >
                        <Heading
                            textAlign='center'
                            fontSize={[4, 5, 6]}
                            >
                            Learn More About Production
                        </Heading>
                    </Box>
                </Card>
            );
        case "carousel2":
            return (
                <Card
                    p={5}
                    py={[8, 7, 8]}
                    width={[1, 1, 1]}
                    backgroundImage='url(https://www.gannett-cdn.com/-mm-/dc8c471a194a6e11d95130f1cf23c3262647d422/c=0-54-580-380/local/-/media/2019/01/17/USATODAY/usatsports/MotleyFool-TMOT-61d3e8b8-3bdcf30d.jpg?width=3200&height=1680&fit=crop)'
                    backgroundSize='cover'
                    color='white'
                    bg='orange'
                    backgroundPosition='center'

                >
                </Card>
            );
        case "carousel3":
            return (
                <Card
                    p={5}
                    py={[8, 7, 8]}
                    width={[1, 1, 1]}
                    backgroundImage='url(https://media.wired.com/photos/5be0db79ec3a5f54b04d33b2/master/pass/marijuana-1036610200.jpg)'
                    backgroundSize='cover'
                    color='white'
                    bg='orange'
                    backgroundPosition='center'

                >
                </Card>
            );
        case "carousel4":
            return (
                <Card
                    p={5}
                    py={[8, 7, 8]}
                    width={[1, 1, 1]}
                    backgroundImage='url(https://www.rollingstone.com/wp-content/uploads/2018/07/oregon-has-too-much-weed.jpg?crop=900:600&width=440)'
                    backgroundSize='cover'
                    color='white'
                    bg='orange'
                    backgroundPosition='center'

                >
                </Card>
            );
        case "carousel5":
            return (
                 <Card
                    p={5}
                    py={[8, 7, 8]}
                    width={[1, 1, 1]}
                    backgroundImage='url(https://www.denverpost.com/wp-content/uploads/2016/12/ap16351816800464.jpg)'
                    backgroundSize='cover'
                    color='white'
                    bg='orange'
                    backgroundPosition='center'
                >
                </Card>
            );
        default:
            return (
                <ImageBase 
                    src={mjPic2}
                    my={0}
                    width={[1, 1, 1]}
                    borderRadius={2}
                    height='100%'
                />
            )
    }
}

class CarouselSlides extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <Flex
                width={[1, 1, 1]}
                mx='auto'
                flexWrap='wrap' 
            >
                <ImagePicker mjPic={data.name} />
            </Flex>
        )
    }
}

export default withStyles(styles, { withTheme: true })(CarouselSlides);