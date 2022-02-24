const { useSelector } = require("react-redux");
const { Redirect } = require("react-router-dom");
const { selectorUser } = require("slice/userSlice")

const withAuth = (Component) => {
  const AuthRoute = () => {
    const user = useSelector(selectorUser);
    if(user){
      return <Component />
    } else {
      return <Redirect to="/login" />
    }
  }

  return AuthRoute;
}

export default withAuth;

// must login to access