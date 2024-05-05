import { Store } from "@/types";
import qs from "query-string";

const URL = `${process.env.STORE_NAME_URL}`;

interface Query {
  name?: string;
}

const getStoreName = async (query: Query): Promise<Store> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      name: query.name,
    },
  });

  const res = await fetch(url, { cache: "no-store" });

  return res.json();
};

export default getStoreName;
