import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FetchData } from "../../services/api";

function Informational() {
  const { name } = useParams();
  const [worldInfo, setWorldInfo] = useState([]);
  useEffect(() => {
    FetchData(setWorldInfo);
  }, []);
  const newData = worldInfo.find((country) => country.name.common === name);
  return (
    <>
      <h1>asd</h1>
    </>
  );
}

export default Informational;
