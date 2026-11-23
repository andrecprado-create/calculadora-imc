# Calculadora de IMC (Web + API)

Aplicação web desenvolvida com separação de responsabilidades entre frontend e backend, onde o cálculo e a classificação do IMC são processados exclusivamente pela API REST.

## Tecnologias Utilizadas
- **Backend:** Node.js, Express
- **Frontend:** HTML5, CSS3, JavaScript (Fetch API)

## Regras de Classificação
O cálculo segue a fórmula `IMC = peso / (altura * altura)` com as seguintes faixas:
- **Magreza:** menor que 18,5
- **Normal:** de 18,5 até 24,9
- **Sobrepeso:** acima de 24,9 até 30,0
- **Obesidade:** acima de 30,0

## Como Executar Localmente
1. Clone o repositório:
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd calculadora-imc
