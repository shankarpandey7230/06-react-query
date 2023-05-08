import SingleItem from "./SingleItem";
import customFetch from "./utils";
import { useQuery } from "@tanstack/react-query";
const Items = ({ items }) => {
  const result = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get(""),
  });
  console.log(result);
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
