import Card from "../components/shared/Card";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <Card title="Total Users" value={100} />
      <Card title="Total Profiles" value={100} />
      <Card title="Total Company" value={100} />
    </div>
  );
};

export default Home;
