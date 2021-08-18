
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from "react-router-dom";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { Formik } from "formik";
import * as Yup from 'yup';

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
}));

export default function RegisterUser() {
    const classes = useStyles();



    const schema = Yup.object({
        password: Yup.string()
            .min(8, 'Must be 8 characters or more').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        phoneNo: Yup.string().matches(/^[0-9]+$/, "Must be only digits")
            .min(10, 'Must be exactly 10 digits')
            .max(10, 'Must be exactly 10 digits').required(),
        location: Yup.string().required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),


    });

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Formik
                    initialValues={{ email: '', password: '', firstName: '', location: '', lastName: '', phoneNo: '' }}
                    validationSchema={schema}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(true);
                        // const user = Users.filter(user => user.id === values.email)
                        // if (!(user.length === 0) && user[0]?.password === values.password) {
                        //     console.log("Logged In");
                        //     history.push("/issues");
                        //     setUser(user.id);
                        // }
                        // else {
                        //     setSubmitting(false);
                        //     setOpen(true);
                    }
                    }
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        isValid,
                        dirty
                        /* and other goodies */
                    }) => (
                        <form className={classes.form} noValidate onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                        fullWidth
                                        error={!(errors.firstName === undefined) && touched.firstName}
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                    {errors.firstName && touched.firstName && errors.firstName}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        error={!(errors.lastName === undefined) && touched.lastName}
                                        autoComplete="lname"
                                    />
                                    {errors.lastName && touched.lastName && errors.lastName}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="email"
                                        error={!(errors.email === undefined) && touched.email}
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                    {errors.email && touched.email && errors.email}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        label="Password"
                                        error={!(errors.password === undefined) && touched.password}
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    {errors.password && touched.password && errors.password}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="location"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        label="Location"
                                        error={!(errors.location === undefined) && touched.location}
                                        name="location"
                                        autoComplete="location"
                                    />
                                    {errors.location && touched.location && errors.location}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="phoneNo"
                                        label="Phone Number"
                                        error={!(errors.phoneNo === undefined) && touched.phoneNo}
                                        name="phoneNo"
                                        autoComplete="phoneNo"
                                    />
                                    {errors.phoneNo && touched.phoneNo && errors.phoneNo}
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                disabled={(!isValid || !dirty) || isSubmitting}
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <RouterLink to="/authentication">
                                        Already have an account? Sign in
                                    </RouterLink>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </div>
        </Container>
    );
}