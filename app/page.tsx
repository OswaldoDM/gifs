import AddCategory from "./components/AddCategory";

interface Props {
  searchParams: { category?: string };
}

const Home = ({ searchParams }:Props) => {
  return <AddCategory searchParams={searchParams} />;
};

export default Home;
