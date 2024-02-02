import { useEffect, useState } from "react";
import IAnimal from "../models/IAnimal";
import getAnimals from "../services/animalService";

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>(
    JSON.parse(localStorage.getItem("animalList") || "[]")
  );
  //i parantesen, hämta från localstorage som i webshop.

  useEffect(() => {
    const getData = async () => {
      const a = await getAnimals();
      if (shouldUpdate) {
        setAnimals(a);
      }
    };

    let shouldUpdate = true;

    if (animals.length === 0) {
      getData();
      console.log(animals);
    }

    return () => {
      shouldUpdate = false;
    };
  });
  return (
    <>
      <h1>Jättemassa många djur</h1>
      {animals?.map((animal) => (
        <h3>{animal.name}</h3>
      ))}
    </>
  );
};

export default Animals;
