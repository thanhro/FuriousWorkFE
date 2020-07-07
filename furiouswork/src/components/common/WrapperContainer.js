import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import { Container, Grid, CssBaseline, Typography } from '@material-ui/core'
import Styles from './WrapperContainer.module.scss'

const WrapperContainer = ({ children }) => {
    if (!children) return null

    return (
        <Container maxWidth="lg" fixed="false" classes="root" className={Styles.container}>
            <Typography component="div" style={{ backgroundColor: '#cfe8fc' }}>
                {children}
            </Typography>
        </Container>
    )
}

WrapperContainer.propTypes = {
    children: PropTypes.element.isRequired,
}

export default WrapperContainer
