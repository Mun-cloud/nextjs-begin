import { useRouter } from "next/router";

export default function Detail({ params }: Param["params"]) {
  const router = useRouter();
  const [title, id] = params || [];
  return <h4>{title}</h4>;
}

type Param = { params: { params: string[] } };
export function getServerSideProps({ params: { params } }: Param) {
  return {
    props: { params },
  };
}
