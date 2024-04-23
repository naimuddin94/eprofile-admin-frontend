import Card from "../components/shared/Card";
import { useGetUsersQuery } from "../redux/features/userApi";

const Home = () => {
  const { data } = useGetUsersQuery("Users");
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <Card title="Total Users" value={data?.data?.length || 0} />
      <Card title="Total Profiles" value={100} />
      <Card title="Total Company" value={100} />
    </div>
  );
};

export default Home;
