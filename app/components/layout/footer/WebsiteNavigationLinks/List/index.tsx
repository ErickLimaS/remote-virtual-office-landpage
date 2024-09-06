import Link from "next/link";
import React from "react";

function List({
  title,
  items,
}: {
  title: string;
  items: { name: string; url: string }[];
}) {
  return (
    <div>
      <h5 className="font-black mb-2">{title}</h5>

      <ul className="flex flex-col gap-y-2">
        {items.map((item) => (
          <li key={item.name} className="hover:underline">
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
