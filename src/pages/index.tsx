import { NextPage } from "next";
import { MainLayout } from "@/layouts/layout";

const Home: NextPage = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
    </div>
  );
};

export default Home;
