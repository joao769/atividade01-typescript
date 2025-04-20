type Carro = {
  marca: string;
  modelo: string;
  ano: number;
}

function carrosAposAno(carros: Carro[], ano: number) {
  return carros.filter(carro => carro.ano > ano);
}

console.log(
  carrosAposAno([
    { marca: 'Tesla', modelo: 'Model S Plaid', ano: 2022 },
    { marca: 'BMW', modelo: 'M4 Competition', ano: 2021 },
    { marca: 'Porsche', modelo: '911 Turbo S', ano: 2023 },
    { marca: 'Lamborghini', modelo: 'Huracán EVO', ano: 2022 },
    { marca: 'Ferrari', modelo: 'F8 Tributo', ano: 2021 },
  ],
  2021
  )
);