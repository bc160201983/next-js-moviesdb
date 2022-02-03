import { useRouter } from "next/router";
import { API_ENDPOINT } from "../../../context/context";
import Link from "next/link";
import SingleMovie from "../../../components/SingleMovie";

const index = ({ data }) => {
  const router = useRouter();
  const id = router.query.id;

  return <SingleMovie data={data} />;
};

export default index;

export async function getServerSideProps({ params }) {
  const url = API_ENDPOINT + `&i=${params.id}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
