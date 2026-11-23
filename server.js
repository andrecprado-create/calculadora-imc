const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Serve os arquivos do frontend (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Função de regra de negócio para classificação do IMC
function classificarIMC(imc) {
  if (imc < 18.5) {
    return 'Magreza';
  } else if (imc <= 24.9) {
    return 'Normal';
  } else if (imc <= 30) {
    return 'Sobrepeso';
  } else {
    return 'Obesidade';
  }
}

// Endpoint da API para cálculo de IMC
app.post('/api/imc', (req, res) => {
  const { peso, altura } = req.body;

  const pesoNum = parseFloat(peso);
  const alturaNum = parseFloat(altura);

  if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum <= 0) {
    return res.status(400).json({
      erro: 'Informe valores numéricos válidos e maiores que zero para peso e altura.'
    });
  }

  // Cálculo do IMC no backend: Peso / Altura²
  const imcCalculado = pesoNum / (alturaNum * alturaNum);
  const imcFormatado = Number(imcCalculado.toFixed(2));
  const classificacao = classificarIMC(imcFormatado);

  return res.status(200).json({
    peso: pesoNum,
    altura: alturaNum,
    imc: imcFormatado,
    classificacao
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
