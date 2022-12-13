import { useState, useEffect } from "react";
import axios from "axios";
export default function ScoopOption() {
  const [scoops, setScoops] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3030/scoops").then((res) => {
      setScoops(res.data);
    });
  }, []);
  return (
    <>
      {scoops.map((scoop) => (
        <img
          key={scoop.id}
          src={`http://localhost:3030/${scoop.imagePath}`}
          alt={`${scoop.name} scoop`}
        />
      ))}
    </>
  );
}
