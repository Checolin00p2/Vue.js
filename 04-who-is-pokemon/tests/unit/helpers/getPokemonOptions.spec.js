import getPokemonOptions,{getPokemons,getPokemonNames} from "@/helpers/getPokemonOptions"

describe('GetPokemonOptions Helpers',()=>{
    test("Regresar un arreglo de numeros",()=>{
        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
    })
    test("Debe de retornar un arreglo de 4 elementos",async()=>{
        const pokemons = await getPokemonNames([1,2,3,4])
        const pokemonTestResponse =[
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
          ]
        
        expect(pokemons).toStrictEqual(pokemonTestResponse)
    })

    test('getPokemonOptions debe retornar un arreglo mezclado',async()=>{
        const pokemons = await getPokemonOptions()
        const pokemonTestResponse =[
            { 
                name: expect.any(String), 
                id: expect.any(Number)  
            },
            {
                name: expect.any(String),
                id: expect.any(Number)  
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number)  
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            }
          ]
        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual(pokemonTestResponse)
    })
})