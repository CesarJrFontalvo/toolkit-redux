import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
    const { pokemons = [], isLoading, page } = useSelector(state => state.pokemons)
    // console.log(pokemons)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, [])

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />

            <span>Loading: {isLoading ? 'True' : 'False'}</span>

            <ul>
                {
                    pokemons.map(({ name }) => (
                        <li key={name}>{name} </li>
                    ))
                }
                <button
                    style={{ marginTop: '10px' }}
                    disabled={isLoading}
                    onClick={() => dispatch(getPokemons(page))}
                >
                    Next
                </button>
            </ul>
        </>
    )
}
