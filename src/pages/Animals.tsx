import { useEffect, useState } from "react";
import IAnimal from "../models/IAnimal";
import getAnimals from "../services/animalService";
import { useNavigate } from "react-router-dom";

export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>(
    JSON.parse(localStorage.getItem("animalList") || "[]")
  );

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

  const navigate = useNavigate();

  return (
    <>
      <h1>Jättemassa många djur</h1>
      {animals?.map((animal) => (
        <>
          <h3>{animal.name}</h3>
          <p>{animal.id}</p>
          <button
            onClick={() => {
              navigate("/animals/" + animal.id);
            }}
          >
            Läs mer
          </button>
        </>
      ))}
    </>
  );
};

export default Animals;

//gör en reusable component att använda i loopen.
//komponenten ska innehålla en knapp som skickar till detail (id via url)
