// About.jsx
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <>
      <h2>About Page</h2>
      <button onClick={() => navigate("/")}>
        Go to Home
      </button>
    </>
  );
}

export default About;
