/* Promises
    É um objeto de processamento assincrono. Inicialmente seu valor é desconhecido.
    ela pode, então, ser resolvida ou rejeitada.
    a Promise tem 3 estados:
    1 - Pending - quando está aguardando para ser resolvida
    2 - Fulfilled - quando a promisse foi concluida com êxito
    3 - Rejected - quando a promise não foi aceita ou resolvida.

Async/await
    async serve para definir funções assincronas, é necessário utilizar a palavra async pra depois poder usar
    await.
    await para o código até aque a promisse seja resolvida ou rejeitada.

    o resultado de uma promisse é outra promisse.
    -----------------------------------------------------
API - Application Programming Interface
    É uma forma de intermediar os resultados do backend com o que é apresentado no frontend.
    podemos acessá-las por meio de URLs.

Fetch
    Utilizado para consumir uma APi, sempre deve ser convertido para o formato json.
    Sempre retorna uma promise.
    */

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const catImg = document.getElementsById ('cat');
	catImg.src = await getCats();
};
catBtn.addEventListener('click', loadImg);

loadImg();





















