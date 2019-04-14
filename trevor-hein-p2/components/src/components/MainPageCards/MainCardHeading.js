import React from 'react'
import HeadingBase from '../Heading/HeadingBase'

const MainCardHeading = props => (
    <HeadingBase
        as='h1'
        p='.5em'
        fontSize={[3, 3, 5]}
        fontFamily='roboto'
        textAlign='left'
        {...props}
    />
)

export default MainCardHeading