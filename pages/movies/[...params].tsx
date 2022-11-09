import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  console.log(router);
  const fetching = async () => {
    const results = await (
      await fetch(`/api/movies/${router.query.id}`)
    ).json();
    return results;
  };
  fetching();
  return <h4>{router.query.title || "Loading..."}</h4>;
}
