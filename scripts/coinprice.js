const apiUrlbtc = 'https://api.coingecko.com/api/v3/simple/price';
const paramsbtc = {
  ids: 'bitcoin',
  vs_currencies: 'usd'
};

const queryStringbtc = Object.keys(paramsbtc)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramsbtc[key])}`)
  .join('&');

fetch(`${apiUrlbtc}?${queryStringbtc}`)
  .then(response => response.json())
  .then(data => {
    const bitcoinPrice = data.bitcoin.usd;
    document.getElementById('bitcoin-price').textContent = `$ ${bitcoinPrice}`;
  })
  .catch(error => console.error(error));

/*-------------------------------------------------------------------------------------------------*/
const apiUrleth = 'https://api.coingecko.com/api/v3/simple/price';
const paramseth = {
  ids: 'ethereum',
  vs_currencies: 'usd'
};

const queryStringeth = Object.keys(paramseth)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramseth[key])}`)
  .join('&');

fetch(`${apiUrleth}?${queryStringeth}`)
  .then(response => response.json())
  .then(data => {
    const ethereumPrice = data.ethereum.usd;
    document.getElementById('ethereum-price').textContent = `$ ${ethereumPrice}`;
  })
  .catch(error => console.error(error));
/*-------------------------------------------------------------------------------------------------*/
const apiUrllinda = 'https://api.coingecko.com/api/v3/simple/price';
const paramslinda = {
  ids: 'linda',
  vs_currencies: 'usd'
};

const queryStringlinda = Object.keys(paramslinda)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramslinda[key])}`)
  .join('&');

fetch(`${apiUrllinda}?${queryStringlinda}`)
  .then(response => response.json())
  .then(data => {
    const lindaPrice = data.linda.usd;
    document.getElementById('linda-price').textContent = `$ ${lindaPrice}`;
  })
  .catch(error => console.error(error));
/*-------------------------------------------------------------------------------------------------*/
const apiUrlohm = 'https://api.coingecko.com/api/v3/simple/price';
const paramsohm = {
  ids: 'ohm-coin',
  vs_currencies: 'usd'
};

const queryStringohm = Object.keys(paramsohm)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramsohm[key])}`)
  .join('&');

fetch(`${apiUrlohm}?${queryStringohm}`)
  .then(response => response.json())
  .then(data => {
    const ohmcoinPrice = data.ohmcoin.usd;
    document.getElementById('ohm-coin-price').textContent = `$ ${ohmcoinPrice}`;
  })
  .catch(error => console.error(error));
/*-------------------------------------------------------------------------------------------------*/
const apiUrlscc = 'https://api.coingecko.com/api/v3/simple/price';
const paramsscc = {
  ids: 'stakecube',
  vs_currencies: 'usd'
};

const queryStringscc = Object.keys(paramsscc)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramsscc[key])}`)
  .join('&');

fetch(`${apiUrlscc}?${queryStringscc}`)
  .then(response => response.json())
  .then(data => {
    const stakecubePrice = data.stakecube.usd;
    document.getElementById('stakecube-price').textContent = `$ ${stakecubePrice}`;
  })
  .catch(error => console.error(error));
/*-------------------------------------------------------------------------------------------------*/
const apiUrlsend = 'https://api.coingecko.com/api/v3/simple/price';
const paramssend = {
  ids: 'social-send',
  vs_currencies: 'usd'
};

const queryStringsend = Object.keys(paramssend)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramssend[key])}`)
  .join('&');

fetch(`${apiUrlsend}?${queryStringsend}`)
  .then(response => response.json())
  .then(data => {
    const socialsendPrice = data.socialsend.usd;
    document.getElementById('social-send-price').textContent = `$ ${socialsendPrice}`;
  })
  .catch(error => console.error(error));
