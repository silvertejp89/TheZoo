import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import IAnimal from "../models/IAnimal";

//TODO: få in listan från localstorage, loopa och visa description och state. knapp för att ändra state.

export const Details = () => {
  const { animalId } = useParams();
  const [animal, setAnimal] = useState<IAnimal | null>(null);

  //useEffect, hämta listan från localstorage
  useEffect(() => {
    const storedAnimals = JSON.parse(
      localStorage.getItem("animalList") || "[]"
    );
    //The find() method returns the value of the first element that passes a test.
    //Hitta djuret baserat på id.
    const selectedAnimal = storedAnimals.find(
      (a: IAnimal) => a.id.toString() === animalId
    );

    setAnimal(selectedAnimal);
  }, [animalId]);

  if (!animal) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{animal.name}</h1>
      <p>{animal.longDescription}</p>
      <p>{animal.lastFed}</p>
      <button>Mata {animal.name}</button>
    </>
  );
};

export default Details;
