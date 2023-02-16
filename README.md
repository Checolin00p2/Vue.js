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

# Añadir Vue Router
```sh
npm install vue-router@4
```

## Error sobre el nombre de los componentes

```sh
  error  Component name "Counter" should always be multi-word  vue/multi-word-component-names
```

### Es necesario cambiar el nombre de tus componentes a 2 palabras, por ejemplo de Cunter a MyCounter
### Adicional a esto debes volver a cargar el proyecto por que si estas en el modo de desarrollo no va actulizar los cambios