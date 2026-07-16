import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {useState} from "react"

import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";

const dateCheckBoxes=[
    {
        label:"today",
    },
    {
        label:"tomorrow",
    },
]
const consultationCheckBoxes=[
    {
        label:"in-clinic",
    },
    {
        label:"Home Visit",
    }
]
 
const SortCheckBoxes=[
    {
        label:"most recommended",
    },
    {
        label:"price low to high",
    },
    {
        label:"price high to low",
    },
]


function handleCheckBoxes (list){
    return list.map((item)=>{
        return (
          <Field orientation="horizontal">
            <Checkbox id={item.label} name={item.label} />
            <FieldLabel htmlFor={item.label} className="capitalize">
              {item.label}
            </FieldLabel>
          </Field>
        );
    })
}

const FilterSelectorsSidebar = ({ sideBarState }) => {
  const [activeGender,setActiveGender]=useState("male");
  
  function handleAciveGender(){
    setActiveGender(activeGender === "male" ? "female" : "male");
  }
  return (
    <>
      <FieldGroup
        className={`mx-auto w-56  duration-300 overflow-hidden ${sideBarState ? "w-56" : "w-0"}`}
      >
        <h3 className="capitalize text-lg font-semibold my-1">
          available date
        </h3>
        {handleCheckBoxes(dateCheckBoxes)}
        <h3 className="capitalize text-lg font-semibold my-1">gender</h3>
        <ButtonGroup>
          <Button
            variant="secondary"
            size="lg"
            className={`capitalize cursor-pointer ${activeGender == "male" ? "text-white bg-brand" : ""}`}
            onClick={handleAciveGender}
            >
            male
          </Button>
          <ButtonGroupSeparator />
          <Button
            variant="secondary"
            size="lg"
            className={`capitalize cursor-pointer ${activeGender == "female" ? "text-white bg-brand" : ""}`}
            onClick={handleAciveGender}
          >
            female
          </Button>
        </ButtonGroup>

        <h3 className="capitalize text-lg font-semibold my-1">
          consultation type
        </h3>
        {handleCheckBoxes(consultationCheckBoxes)}
        <h3 className="capitalize text-lg font-semibold my-1">sort</h3>
        {handleCheckBoxes(SortCheckBoxes)}
      </FieldGroup>
    </>
  );
};
export default FilterSelectorsSidebar;



