import { NextPage } from "next";
import { MainLayout } from "@/layouts/layout";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Editar {id}</h1>
    </div>
  );
};

export default Home;
