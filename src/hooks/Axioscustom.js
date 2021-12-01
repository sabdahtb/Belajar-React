import axios from "axios";
import { useState, useEffect } from "react";

const Axioscustom = (dataUri) => {
  const [blogs, setBlogs] = useState(null);
  const [loads, setLoads] = useState(true);
  const [fails, setFails] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (uri) => {
      try {
        const response = await axios.get(uri, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setBlogs(response.data);
          setFails(null);
        }
      } catch (error) {
        if (isMounted) {
          setFails(error.message);
          setBlogs([]);
        }
      } finally {
        setLoads(false);
      }
    };

    fetchData(dataUri);

    const cleanUp = () => {
      console.log("cleanup function data");
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUri]);

  return { blogs, fails, loads };
};

export default Axioscustom;
