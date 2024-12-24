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
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {
          carData.map(car=> <HomeCard key={car._id} car={car}></HomeCard>)
        }
      </div>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;