const comparar = async (num1, num2) => {
  const math = await import('./helper.js');

  console.log(math.comparacao(num1, num2));
};

comparar(2, 2);