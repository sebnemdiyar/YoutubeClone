import { useEffect, useState } from "react";
import api from "../../utils/api";
import SkeletonLoader from "../../component/Loader/skeleton-loader";
import Error from "../../component/error";
import Shorts from "../../component/shorts";

const Feed = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // sayfa yüklenince
  useEffect(() => {
    setLoading(true);

    api
      .get("/home")
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // veriyi kategorize et
  const shortLists = data.filter((item) => item.type === "shorts_listing");
  const videos = data.filter((item) => item.type === "video");

  if (loading) return <SkeletonLoader />;

  if (error) return <Error message={error} />;

  return (
    <div className="page">
      <div className="space-y-8">
        <Shorts data={shortLists[0]?.data} />
        <h2>Videolar</h2>
        <Shorts data={shortLists[1]?.data} />
      </div>
    </div>
  );
};

export default Feed;
