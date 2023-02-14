describe('Example Component',()=>{
  test('Deber de ser mayor a 10',()=>{
    //Arreglar
    let value = 10;
    // Estimulo
    value = value+2;
    // Resultado
    expect(value).toBeGreaterThan(10);
  })
})