function imprimirQuadro(lista: string[]) {
    const tamanhoMax = Math.max(...lista.map(str => str.length));
    const borda = '*'.repeat(tamanhoMax + 4);
  
    console.log(borda);
    lista.forEach(palavra => {
      console.log(`* ${palavra.padEnd(tamanhoMax)} *`);
    });
    console.log(borda);
}
  
imprimirQuadro(["Hello", "World", "in", "a", "frame"]);