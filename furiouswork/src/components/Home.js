import React from 'react'
import Styles from './Home.module.scss'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Grid } from '@material-ui/core'
import Header from './common/Header'
import WrapperContainer from './common/WrapperContainer'

const Home = () => {

    return (
        <WrapperContainer>
            <Header />
            <Grid xs="12">
                Day la Body
            </Grid>
        </WrapperContainer>
    )
}

Home.propTypes = {

}

export default Home
