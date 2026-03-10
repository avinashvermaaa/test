import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(`${API_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => console.error(err));
    }, [API_URL]);
    
  return (
    <>
      <h2>Backend Response:</h2>
      <p>{message}</p>
      <p>{API_URL}</p>
    </>
  );
}

export default App;