import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [url]);
  return data;
};
