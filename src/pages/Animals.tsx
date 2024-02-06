import { useEffect, useState } from "react";
import IAnimal from "../models/IAnimal";
import getAnimals from "../services/animalService";
import { useNavigate } from "react-router-dom";
import "../App.css";

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
      {animals?.map((animal) => (
        <div className="animal-container">
          <div className="img-container">
            <img src={animal.imageUrl} alt="image of animal" />
          </div>
          <h3>{animal.name}</h3>
          <p>{animal.isFed.toString()}</p>

          <button
            onClick={() => {
              navigate("/animals/" + animal.id);
            }}
          >
            Läs mer
          </button>
        </div>
      ))}
    </>
  );
};

export default Animals;

//gör en reusable component att använda i loopen.
//komponenten ska innehålla en knapp som skickar till detail (id via url)
