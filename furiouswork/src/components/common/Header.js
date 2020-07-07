import React from 'react'
import {
    Grid,
    Box,
    Tab,
    Tabs,
    Paper,
} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import { makeStyles } from '@material-ui/core/styles'
import WrapperContainer from './WrapperContainer'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 500,
    },
})

const Header = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <WrapperContainer>
            <Grid container spacing={0} xs="12">
                <Grid xs="4">
                    <Box>
                        <h1>Furious Work</h1>
                    </Box>
                </Grid>
                <Grid xs="8">
                    {/* <Paper square className={classes.root}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="standard"
                            indicatorColor="secondary"
                            textColor="secondary"
                            aria-label="icon label tabs example"
                        >
                            <Tab icon={<PhoneIcon fontSize="small" />} />
                            <Tab icon={<FavoriteIcon fontSize="small" />} />
                            <Tab icon={<PersonPinIcon fontSize="small" />} />
                        </Tabs>
                    </Paper> */}
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
