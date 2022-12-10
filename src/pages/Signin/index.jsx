import { Box, Button, Grid, Link, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import users from "../../helper/users";
import { newUser } from "../../state-management/actions/auth";

const Signin = (props) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    props.user && navigate('/')
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = users.find(
      (item) =>
        item.user.toLowerCase() === user.toLowerCase() &&
        item.pass.toLowerCase() === pass.toLowerCase()
    );
    if (res) {
      props.newUser({user, pass})
      navigate("/")
    } else alert("wrong credentials");
  };
  return (
    <div className="form">
      <h1>Sign In</h1>
      <Paper variant="elevation" elevation={8} className="form-background">
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                type="email"
                placeholder="Email"
                fullWidth
                name="user"
                variant="outlined"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
                autoFocus
              />
            </Grid>
            <Grid item>
              <TextField
                type="password"
                placeholder="Password"
                fullWidth
                name="pass"
                variant="outlined"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="button-block"
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
        <Box mt={3}>
          <Link href="/signup" variant="body2">
            Don't have an account sign up?
          </Link>
        </Box>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.authReducer,
});

const mapDispatchToProps = (dispatch) => ({
  newUser: (user) => dispatch(newUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
