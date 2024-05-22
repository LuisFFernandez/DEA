import { NextPage } from "next";
import MainLayout from "../layouts/layout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
      </div>
    </MainLayout>
  );
};

export default Home;
