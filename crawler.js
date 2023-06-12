const axios = require('axios');
const cheerio = require('cheerio');

// URL do site-alvo
const url = 'https://youridstore.com.br/novidades';

// Função para extrair informações de preços
const extractPrices = (html) => {
  const $ = cheerio.load(html);

  // Seletor CSS para os elementos que contêm os preços
  const priceSelector = 'price price-pt-br';

  // Extrair os preços e retorná-los em um array
  const prices = [];
  $(priceSelector).each((index, element) => {
    const price = $(element).text().trim();
    prices.push(price);
  });

  return prices;
};

// Função para enviar os dados extraídos para o servidor
const sendDataToServer = async (prices) => {
  try {
    const response = await axios.post('http://localhost:3000/tracked_products', { prices });
    console.log('Dados enviados com sucesso para o servidor:', response.data);
  } catch (error) {
    console.error('Erro ao enviar dados para o servidor:', error.message);
  }
};

// Função principal do web crawler
const crawl = async () => {
  try {
    // Enviar uma solicitação GET para o site
    const response = await axios.get(url);

    // Verificar se a solicitação foi bem-sucedida
    if (response.status === 200) {
      // Extrair informações de preços do HTML
      const prices = extractPrices(response.data);

      // Enviar os preços para o servidor
      await sendDataToServer(prices);
    } else {
      console.log('Falha ao acessar o site:', response.status);
    }
  } catch (error) {
    console.log('Erro:', error.message);
  }
};

// Executar o web crawler
crawl();
