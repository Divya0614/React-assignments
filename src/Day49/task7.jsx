import { useDispatch, useSelector } from "react-redux";

function LoginButton() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome! You are logged in.</p>
      ) : (
        <p>Please log in.</p>
      )}
      <button onClick={() => dispatch(loginAction)}>Login</button>
      <button onClick={() => dispatch(logoutAction)}>Logout</button>
    </div>
  );
}
