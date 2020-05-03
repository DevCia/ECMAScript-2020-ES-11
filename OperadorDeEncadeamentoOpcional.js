const pesssoa = {
  nome: "kraudio",
  idade: 22,
};

if (pesssoa?.nome) {
  console.log('esse caminho existe \n');
}

if (pesssoa?.teste?.caminho?.sem?.exception) {
  console.log('esse caminho existe \n'); 
} else {
  console.log('esse caminho não existe \n'); 
}

