import { useState, useEffect } from "react";
import axios from "axios";
export default function ScoopOption() {
  const [scoops, setScoops] = useState([]);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    return await axios.get("http://localhost:3030/scoops");
  };

  useEffect(() => {
    fetchData()
      .then((res) => {
        setScoops(res.data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);
  return (
    <div>
      {scoops.map((scoop) => (
        <img
          key={scoop.id}
          src={`http://localhost:3030/${scoop.imagePath}`}
          alt={`${scoop.name} scoop`}
        />
      ))}
      {isError && <div role="alert">error</div>}
    </div>
  );
}
