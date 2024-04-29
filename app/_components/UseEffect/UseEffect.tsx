"use client";

import { useEffect, useState } from "react";

// UseEffect - For Side Effects eg: Fetch from API
// 2nd param: No dependency - executed every time u render
// 2nd param [] - first render only - onMount
// 2nd param [dependency] - Hook is executed every time dependency is updated
export const UseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // doesn't update when window resized and need to add an event listener only when mounted

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // 1.
  useEffect(() => {
    console.log("Executed after 1st render only - onMount");
  }, []);

  // 2.
  useEffect(() => {
    console.log("Executed Every Time");
  });

  // 3.
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setItems(json);
      });
    console.log("Data fetched from API");
  }, [resourceType]);

  // 4. This allows the value to update dynamically
  // When event listener added and component unmounted, need to remove event listener as it will slow down app
  // Also need a cleanup when adding event listeners
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Called before useEffect is called to clean up last time's instance of this hook
    };
  }, []);

  return (
    <div>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <br />
      <button onClick={() => setResourceType("users")}>Users</button>
      <br />
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <br />
      {resourceType}
      <br />
      {items.map((item, key) => {
        return <pre key={key}>{JSON.stringify(item)}</pre>;
      })}
      <br />
      {windowWidth}
    </div>
  );
};
