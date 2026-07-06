import ChooseSpecialistHeader from "./ChooseSpecialistHeader";
import DoctorCard from "./DoctorCard"
import ShiftCarousel from "@/components/shared/ShiftCarousel";
function getCards(){
    const cardsList=[]
    for(let i=0;i<=7;++i){
        cardsList.push(<DoctorCard />);
    }
    return cardsList;
}
const ChooseSpecialistPage=()=>{
    return (
      <>
        <section className="min-h-[calc(100vh-112.5px)">
          <ChooseSpecialistHeader />
          <section className="mainContainer pb-5">
            <h1 className="text-2xl font-bold capitalize text-text-h ">
              choose specialist
            </h1>
            <section><ShiftCarousel/></section>
          </section>
          {/* All Cards Container */}
          <section className="mainContainer grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-5">
            {getCards()}
          </section>
          {/*===== All Cards Container =====*/}
        </section>
      </>
    );
}
export default ChooseSpecialistPage;