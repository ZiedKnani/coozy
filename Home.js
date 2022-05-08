import { handleDelete, useEffect, useState } from "react";
const blogs = import("./data/db.json");
import BlogList from "./BlogList";
import { dblClick } from "@testing-library/user-event/dist/click";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All ingredients"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
