import axios from "axios";
import { useEffect, useState } from "react";

const Axiosxustom = (dataUri) => {
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
      console.log("clean up function");
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUri]);

  return { blogs, fails, loads };
};

export default Axiosxustom;
