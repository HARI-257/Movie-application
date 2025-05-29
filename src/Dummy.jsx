import { useState } from "react";
import "./App.css";
const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <di className="card">
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "💟" : "🤍"}
      </button>
    </di>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title={"Harry Potter"} />
      <Card title={"Avengers"} />
      <Card title={"Intersteller"} />
      <Card title={"Avatar"} />
    </div>
  );
};

export default App;
