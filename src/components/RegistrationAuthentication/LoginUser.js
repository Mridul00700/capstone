import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link as RouterLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from 'yup';
import { CurrentUserContext } from "../../context";
import { useHistory } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginUser = (props) => {




  const setUser = useContext(CurrentUserContext).setCurrentUser;
  const [open, setOpen] = useState(false);
  const { Users } = props;
  console.log(Users);

  const classes = useStyles();
  const history = useHistory();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }
  // const onChangeEmail = (e) => {
  //   setEmailId(e.target.value)

  // }
  // const onChangePassword = (e) => {
  //   setPassword(e.target.value)
  // }

  const schema = Yup.object({
    password: Yup.string()
      .min(8, 'Must be 8 characters or more').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  });


  return (
    <>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert severity="error">
          Please check email and password!
        </Alert>
      </Snackbar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              const user = Users.filter(user => user.id === values.email)
              if (!(user.length === 0) && user[0]?.password === values.password) {
                console.log("Logged In");
                history.push("/issues");
                setUser(user.id);
              }
              else {
                setSubmitting(false);
                setOpen(true);
              }
            }}
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
                <TextField
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  error={!(errors.email === undefined) && touched.email}
                />
                {errors.email && touched.email && errors.email}
                <TextField
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  // error={errors.password === undefined ? (touched.password ? true : false) : (errors.password === 'Required' && touched.password ? true : false)}
                  error={!(errors.password === undefined) && touched.password}
                  id="password"
                  autoComplete="current-password"
                />
                {errors.password && touched.password && errors.password}
                <Button type="submit" disabled={(!isValid || !dirty) || isSubmitting}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}>
                  Submit
                </Button>
                {errors.formError && errors.formError}
                <Grid container>
                  <Grid item>
                    <RouterLink to="/authentication/register">
                      Don't have an account? Sign Up
                    </RouterLink>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </div>
      </Container >
    </>
  );
};

function mapStateToProps(state) {
  return {
    Users: state.userReducer.Users
  }
}
export default connect(mapStateToProps, null)(LoginUser);
