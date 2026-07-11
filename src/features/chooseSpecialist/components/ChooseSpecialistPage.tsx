import {useState} from "react";

import ChooseSpecialistHeader from "./ChooseSpecialistHeader";
import DoctorCard from "../../../components/shared/DoctorCard";
import ShiftCarousel from "@/components/shared/ShiftCarousel";
import FilterSelectorsSidebar from "./FilerSelectorsSidebar";
// Doctors Data

type doctorCard={
  image:string,
  name:string,
  specilization:string,
  rate:number,
  time:string,
  price:number,
}
const Doctors: doctorCard = [
  {
    image:"url",
    name:"doctor name",
    specialization:"doctor specialization",
    hospital:"hospital name",
    rate:"doctor rate",
    time:"joining time",
    price:"the price",
  },
  {
    image:"url",
    name:"doctor name",
    specialization:"doctor specialization",
    hospital:"hospital name",
    rate:"doctor rate",
    time:"joining time",
    price:"the price",
  },
  {
    image:"url",
    name:"doctor name",
    specialization:"doctor specialization",
    hospital:"hospital name",
    rate:"doctor rate",
    time:"joining time",
    price:"the price",
  },
];


function getCards(){
    const cardsList=[]
    for(let i=0;i<=7;++i){
        cardsList.push(<DoctorCard />);
    }
    return cardsList;
}

const ChooseSpecialistPage=()=>{
  const [filterAsideState, setFilterAsideState] = useState(false);
    return (
      <>
        <section className="min-h-[calc(100vh-112.5px)">
          <ChooseSpecialistHeader sideBarState={filterAsideState} setSideBarState={setFilterAsideState} />
          <section className="mainContainer">
            <h1 className="text-2xl font-bold capitalize text-text-h py-5">
              choose specialist
            </h1>
            <section className="pb-5">
              <ShiftCarousel />
            </section>
          </section>
          {/* All Cards Container */}
          <section className=" mainContainer flex items-start">
            <FilterSelectorsSidebar sideBarState={filterAsideState}/>
            <section className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(390px,1fr))] gap-5">
              {getCards()}
            </section>
          </section>

          {/*===== All Cards Container =====*/}
        </section>
      </>
    );
}
export default ChooseSpecialistPage;