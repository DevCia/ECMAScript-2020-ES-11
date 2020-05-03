const formulario = {
  nome: "",
  idade: 0
};

// resultado = "" uma string vazia
console.log(formulario.nome ?? "essa string não vai aparecer"); 

// resultado = 0
console.log(formulario.idade ?? 18); 
