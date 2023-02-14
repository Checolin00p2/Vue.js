# Vue.Js
## Materiales generados por curso


## Posibles Errores



#### SyntaxError: Cannot use import statement outside a module 
```sh
5 |     test('Axio debe de estar configurado con el api de pokemon',()=>{
      6 |
    > 7 |         expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
        |                           ^
      8 |     })
      9 | })
```

## La solución esta en implementar la siguiente propiedad en el jest.config.js

```sh
transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
```
# Solo basta con añadirse
```sh
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
}

```