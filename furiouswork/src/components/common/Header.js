import React from 'react'
import {
    Grid,
    Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Styles from './Header.module.scss'
import WrapperContainer from './WrapperContainer'

const useStyles = makeStyles({
    fixContainerHeader: {
        padding: '15px',
    },
    image: {
        width: '50px',
        height: '50px',
        float: 'left',
        borderRadius: '50%',
        border: '1px solid #333',
    },
    text_logo: {
        marginLeft: '10px',
        float: 'left',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
    },
})

const Header = () => {
    const classes = useStyles()

    return (
        <WrapperContainer className={classes.fixContainerHeader}>
            <Grid container spacing={0} xs="12">
                <Grid item xs="4" style={{ display: 'flex' }}>
                    <Box>
                        <img className={classes.image} src="https://s3.amazonaws.com/creativetim_bucket/new_logo.png" alt="logo" />
                    </Box>
                    <Box className={classes.text_logo}>
                        Furious Work
                    </Box>
                </Grid>
                <Grid item xs="8">
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="baseline"
                    >
                        <ul>
                            <li>item 1</li>
                            <li>item 2</li>
                            <li>item 3</li>
                            <li>item 4</li>
                            <li>item 5</li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </WrapperContainer>
    )
}

export default Header
