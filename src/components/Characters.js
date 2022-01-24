import data from '../data';

import CharacterCard from './CharacterCard';


const Characters = () => {
  console.log('what is data?', data);


  // create a card PER character in the array.
  return (
    <div>
      <h1>CHARACTERS</h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {data.map((char) => {
          return (
            <CharacterCard
              name={char.name}
              image={char.imgUrl}
              quote={char.quote}
              species={char.species}
            />
          )
        })}

      </div>
    </div>
  );
}
 
export default Characters;