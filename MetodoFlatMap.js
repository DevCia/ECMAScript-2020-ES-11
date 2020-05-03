const exemploArray = [
  1, 2,
  [2, 3],
  12, [23, 4],
  12, [93, 73],
];

const nivelar = (elemento) => elemento + 2;
const retorno = exemploArray.flatMap(nivelar);

console.log(retorno);
