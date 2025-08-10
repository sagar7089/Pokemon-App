import React from 'react'

export const PokemonCard = ({curElem,id}) => {
  return (
    <li key={id} className='pokemon-card'>
        <figure>
          <img src={curElem.sprites.other.dream_world.front_default} alt={curElem.name}
           className='pokemon-image'/>
        </figure>
        <h1 className='pokemon-name'>{curElem.name}</h1>
        <div className="pokemon-info pokemon-highlight">
          <p>
            {curElem.types.map((curType) => curType.type.name).join(", ")}
          </p>
        </div>
        <div className="grid-three-cols">
        <p className="pokemon-info">
          <span> Height:</span> {curElem.height}
        </p>
        <p className="pokemon-info">
          <span> Weight:</span> {curElem.weight}
        </p>
        <p className="pokemon-info">
          <span> speed:</span> {curElem.stats[5].base_stat}
        </p>
      </div>

      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{curElem.base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{curElem.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {curElem.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
              <span> Abilities: </span>
        </div>
      </div>
    </li>
  )
}
