import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { getUser } from "./state-management/actions/auth";

function App(props) {
  const navigate = useNavigate();
  
  useEffect(() => {
    props.getUser();
    if (!props.user) {
      navigate("/signin");
    }
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.authReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
