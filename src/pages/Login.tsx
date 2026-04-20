import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }: any) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    setLoggedIn(true);
    navigate("/");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;