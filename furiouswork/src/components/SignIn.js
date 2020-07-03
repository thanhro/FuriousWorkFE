import React, { useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'
import _ from 'lodash'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Styles from './SignIn.module.scss'
import history from '../routers/history'

const signInDefault = {
    username: 'lethanh309@gmail.com',
    password: '1234',
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Furious Work ahihi
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

const SignIn = () => {
    const classes = useStyles()
    const [params, setParams] = useState({})
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSetParams = (field, value) => setParams({ ...params, [field]: value })

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
        setParams({ ...params, username: e.target.value })
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
        setParams({ ...params, password: e.target.value })
    }

    const handleSignIn = () => {
        if (params.username === history.location.state.username && params.password === history.location.state.password) {
            alert('dung roi')
        } else {
            alert('sai roi')
        }
    }
    console.log(history.location.state)
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChangeUsername}
                    />
                    {username && <p style={{ color: 'red' }}>Nhap username di thang lz</p>}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChangePassword}
                    />
                    {password && <p style={{ color: 'red' }}>Nhap password di thang lz</p>}
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSignIn}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    )
}

SignIn.propTypes = {

}

export default SignIn
