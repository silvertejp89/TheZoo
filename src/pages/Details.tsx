import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import IAnimal from "../models/IAnimal";

export const Details = () => {
  const { animalId } = useParams();
  const [animal, setAnimal] = useState<IAnimal>();

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

  const feedAnimal = () => {
    const feedingTime = new Date();
    if (animal) {
      setAnimal({
        ...animal,
        isFed: true,
        lastFed: feedingTime.toLocaleString(),
      });

      const listFromLS: IAnimal[] = JSON.parse(
        localStorage.getItem("animalList") || "[]"
      );
      const updatedList = listFromLS.map((currentAnimal) =>
        currentAnimal.id === animal.id
          ? {
              ...currentAnimal,
              isFed: true,
              lastFed: feedingTime.toLocaleString,
            }
          : currentAnimal
      );
      localStorage.setItem("animalList", JSON.stringify(updatedList));
    }
  };

  //--------------------------------------------------------

  if (!animal) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{animal.name}</h1>
      <p>{animal.longDescription}</p>
      <p>{animal.isFed.toString()}</p>
      <p>{animal.lastFed}</p>
      <button onClick={feedAnimal} disabled={animal.isFed}>
        Mata {animal.name}
      </button>
    </>
  );
};

{
}

export default Details;
