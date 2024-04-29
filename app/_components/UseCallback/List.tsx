"use client";

import { useEffect, useState } from "react";

interface ListProps {
//   getItems: () => number[];
    getItems: (num: number) => number[];
}

const List = ({ getItems }: ListProps) => {
  const [items, setItems] = useState<number[]>([]);

//   useEffect(() => {
//     setItems(getItems());
//     console.log("Updating Items");
//   }, [getItems]);

useEffect(() => {
    setItems(getItems(4));
    console.log("Updating Items");
  }, [getItems]);

  return items.map((item, id) => <div key={id}>{item}</div>);
};

export default List;
