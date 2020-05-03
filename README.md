<h1 align="center">
  ECMAScript 2020 (ES 11)
</h1>

# Objetivo

- Mostrar a implementação de novas funcionalidades da linguagem javascript e ajudar comunidade.

## Configuração

Para isso vamos instalar o sucrase para que seja mais o fácil possível de usar a última versão do JavaScript ao rodar os exemplos digite no terminal: sucrase-node nomeDoArquivo.

## 1 => Dynamic Import

A importação dinâmica retorna uma promessa com o módulo e você poderá usar tanto then/catch ou async/await.

Arquivo importado.

<p align="center">
  <img src="images/slide1.png" width="50%" height="50%" />
</p>

Exemplo da nova funcionalidade.

<p align="center">
  <img src="images/slide2.png" width="50%" height="50%" />
</p>

## 2 => Promise.allSettled

Quando temos que trabalhar com várias promises as vezes fica difícil saber se todas terminaram e deram certo. Usando Promise.allSettled podemos criar uma nova promessa que retornará apenas quando todas forem concluidas o que facilita bastante.

<p align="center">
  <img src="images/slide3.png" width="50%" height="50%" />
</p>
