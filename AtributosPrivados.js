class MinhaClasse {
  #atributoPrivado = "conteudo privado";
  atributoPublico = "conteudo publico";
}


try {
  const minha = new MinhaClasse();

  console.log(minha.atributoPublico);
  // assim vai estourar execao
  console.log(minha.#atributoPrivado); 
} catch (error) {
  console.log(error.message);  
}