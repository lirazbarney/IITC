import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Feed() {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function handleDelete(id: string) {
    try {
      const result = await axios.delete(
        `http://localhost:3000/api/v1/businesses/${id}`
      );
      setBusinesses((prev) => prev.filter((busi) => busi.id !== id));
    } catch (err) {
      console.error(err);
    }
  }
  console.log(businesses);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "http://localhost:3000/api/v1/businesses"
        );
        if (result) {
          setLoading(false);

          setBusinesses(result.data);
        }
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };
    fetchData();
  }, []);

  if (loading) return "loading";
  if (error) return "error";

  return (
    <>
      {businesses.map((business) => {
        return (
          <div key={business._id}>
            <h1>{business.name}</h1>
            <h3>{business.description}</h3>
            <h5>{business.category}</h5>
            <h6>{business.owener}</h6>
            <Link to="/business/update/:id">
              <button className="border border-black">update</button>
            </Link>
            <button
              className="border border-black"
              onClick={() => {
                handleDelete(business._id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </>
  );
}
