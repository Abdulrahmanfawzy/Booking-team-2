import ChooseSpecialistHeader from "./ChooseSpecialistHeader";
import DoctorCard from "./DoctorCard";
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
        <section className="min-h-[calc(100vh-112.5px)] ">
          <ChooseSpecialistHeader />

          {/* All Cards Container */}
          <section className="mainContainer grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5">
            {getCards()}
         </section>
          {/*===== All Cards Container =====*/}

        </section>
      </>
    );
}
export default ChooseSpecialistPage;