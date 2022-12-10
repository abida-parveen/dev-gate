import { Box, Button, Grid, Link, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newUser } from "../../state-management/actions/auth";

const Signup = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    props.user && navigate("/");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.newUser({ name, user, pass});
    navigate('/')
  };
  return (
    <div className="form">
      <h1>Sign Up</h1>
      <Paper variant="elevation" elevation={8} className="form-background">
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                type="text"
                placeholder="Name"
                fullWidth
                name="name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>
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
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
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


export default connect(mapStateToProps, mapDispatchToProps)(Signup);
