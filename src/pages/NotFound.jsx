import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <p>
        Page Not found. Go to <Link to="/">News</Link>
      </p>
    </section>
  );
};

export default NotFound;
