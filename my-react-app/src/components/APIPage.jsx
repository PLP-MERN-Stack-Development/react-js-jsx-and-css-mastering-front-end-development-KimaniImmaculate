import { useState, useEffect } from "react";
import Card from "./Card";

export default function APIPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(10); // number of posts initially visible

  // Fetch API data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Filter data based on search
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // Load more posts when scrolling
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setVisibleCount((prev) => Math.min(prev + 10, filteredData.length));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filteredData]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">API Data</h1>

      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setVisibleCount(10); // reset visible posts when searching
        }}
        className="border p-2 w-full mb-6 rounded"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredData.slice(0, visibleCount).map((item) => (
          <Card key={item.id} title={item.title}>
            <p>{item.body}</p>
          </Card>
        ))}
      </div>

      {visibleCount < filteredData.length && (
        <p className="text-center mt-4 text-gray-500">Scroll down to load more...</p>
      )}
      {filteredData.length === 0 && (
        <p className="text-center mt-4 text-gray-500">No results found.</p>
      )}
    </div>
  );
}

