import { NextPage } from "next";
import { MainLayout } from "@/layouts/layout";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">Tabla miembros</h1>
      </div>
  );
};

export default Home;
