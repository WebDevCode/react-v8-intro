import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            animal={pet.animal}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
            name={pet.name}
            breed={pet.breed}
          />
        ))
      )}
    </div>
  );
};

export default Results;
