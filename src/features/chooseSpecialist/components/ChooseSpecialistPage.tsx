import {useState,useEffect} from "react";
import {getAllSpecialists} from "../api/handleSpecialistsData";
import SpecialistNotFound from "./specialistNotFound";
import ChooseSpecialistHeader from "./ChooseSpecialistHeader";
import DoctorCard from "../../../components/shared/DoctorCard";
import ShiftCarousel from "@/components/shared/ShiftCarousel";
import FilterSelectorsSidebar from "./FilerSelectorsSidebar";
import { Spinner } from "@/components/ui/spinner";

// Doctors Data

type doctorCard={
  id:number,
  name:string,
}

{/* <DoctorCard/> */}

function getCards(specialists: doctorCard[]) {
  const specialistsCards = specialists.map((specialist:doctorCard) => {
    if (!Array.isArray(specialists)) {
      return null;
    } 
    const id = specialist.id;
    const specilization = specialist.name;
    return <DoctorCard key={id} namespecialization={specilization} />;
  });
  return specialistsCards;
}


const ChooseSpecialistPage=()=>{
  const [filterAsideState, setFilterAsideState] = useState(false);
  const [loader,setLoader]=useState(true);
  const [allSpecialists,setAllSpecialists]=useState([]);
  const [allFilteredSpecialists, setAllFilteredSpecialists] = useState([allSpecialists]);
  const [specializationBtn, setSpecializationBtn] = useState<string[]>([]);
  const [searchContent,setSearchContent]=useState("");
  
  function updateSpecialization(btns: string[]) {
    setSpecializationBtn(btns);
    handleFilterSpecialists(searchContent)
  }

  function handleFilterSpecialists(searchInputText) {
    const searchInput=searchInputText.trim();
    let filteredData = allSpecialists;
    if (searchInput !== "") {
      filteredData = allSpecialists.filter((specialist: doctorCard) => {
        if (specialist.name.toLowerCase().includes(searchInput.toLowerCase())) {
          return specialist;
        }
      });
    }

    if(specializationBtn.length!==0){
     filteredData = filteredData.filter((item) => {
        const card = specializationBtn.find((btn) => {
         return btn === item.name;
       });
       return card !== undefined;
     });
    }

    setAllFilteredSpecialists(filteredData);
  }

  function handleSearch(e){
    setSearchContent(e.target.value);
    handleFilterSpecialists(e.target.value);
  }
  useEffect(()=>{
    getAllSpecialists()
    .then((data)=>{
      setLoader(true);
      setAllSpecialists(data);
       setAllFilteredSpecialists(data);
    }).finally(()=>{
      setLoader(false);
    })
  },[])
  
    return (
      <>
        <section className="min-h-[calc(100vh-112.5px)">
          <ChooseSpecialistHeader
            handleSearch={handleSearch}
            sideBarState={filterAsideState}
            setSideBarState={setFilterAsideState}
          />
          <section className="mainContainer">
            <h1 className="text-2xl font-bold capitalize text-text-h py-5">
              choose specialist
            </h1>
            <section className="pb-5">
              <ShiftCarousel specialization={updateSpecialization} />
            </section>
          </section>
          {/* All Cards Container */}
          <section className=" mainContainer flex items-start">
            <FilterSelectorsSidebar sideBarState={filterAsideState} />
            <section className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(390px,1fr))] gap-5">
            
              {loader?<section className="text-center mx-auto"><Spinner className="size-8 text-brand" /></section>:
              getCards(allFilteredSpecialists).length > 0 ? (
                getCards(allFilteredSpecialists)
              ) : (
                <SpecialistNotFound />
              )}
            </section>
          </section>

          {/*===== All Cards Container =====*/}
        </section>
      </>
    );
}
export default ChooseSpecialistPage;