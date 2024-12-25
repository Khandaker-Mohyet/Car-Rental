import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import ExtraSection from "../Components/ExtraSection";
import WhyChooseUs from "../Components/WhyChooseUs";
import HomeCard from "../Components/HomeCard";


const Home = () => {
  const carData = useLoaderData()


  return (
    <div>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 text-center my-10">All Cars</h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          {
            carData.slice(0, 8).map(car => <HomeCard key={car._id} car={car}></HomeCard>)
          }
        </div>
      </div>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;