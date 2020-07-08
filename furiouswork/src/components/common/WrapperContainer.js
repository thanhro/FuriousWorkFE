import React from 'react'
import PropTypes from 'prop-types'
import { Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Styles from './WrapperContainer.module.scss'

const useStyles = makeStyles({
    container: {
        display: 'block',
        flexWrap: 'wrap',
        height: '100%',
        wordBreak: 'break-all',
        // display: 'flex',
    },
})

const WrapperContainer = ({ children }) => {
    const classes = useStyles()
    if (!children) return null

    return (
        <Container maxWidth="lg" fixed="false" classes="root" className={classes.container}>
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
