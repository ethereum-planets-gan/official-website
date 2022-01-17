var base_url1 = "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963"
var base_url2 = "https://lh3.googleusercontent.com"
const dict = [{
		"title": "Tartarus",
		"description": "Tartarus, the infernal land, powered by the hidden underworld of high APR degen dApps.",
		"url": "61756156306605666331449191952000501727754696747778634075281474099391596855297",
		"image": "ItyuPWr26J8Ia4mPcfMTRQGXN7uGaUt5y0GadEt9A5Yp6KE_6veKQeyDlpCLzI4q6Om6EirXq8NvXeVrnN1NGFR9LetIVdGM6UbQ=s0"
	},
	{
		"title": "Hypnos",
		"description": "Hypnos, the personification of serenity and peacefulness in anticipation of the ETH 2.0 launch.",
		"url": "61756156306605666331449191952000501727754696747778634075281474100491108483073",
		"image": "nNRShTRLt-5kV6vEtAAQAvjWfLpbSGVt4IEsxngbyjgoQc-My7WZwUdRdLr7RoevWoogGIvub5TS70UzTgnQL6j362xcTVSw7Cn3=s0"
	},
	{
		"title": "Astraeus",
		"description": "Astraeus, the titan god of artificially created planets that warps the space around it. A fitting place for all the value that ETH 2.0 will bring.",
		"url": "61756156306605666331449191952000501727754696747778634075281474118083294527489",
		"image": "bI-Lfh1CessA95iIphotkjYsXQIcDxMRQ3xtYUBBJtTd3YVkfRY5F95dYRHy0QujUGIsyPINKloHekpSoSGNqhgc9XgRE7eNhA7AZQ=s0"
	},
	{
		"title": "Terpsichore",
		"description": "Terpsichore, the planet of Terpsichore, one of the nine muses, patron of lyrical poetry and dancing. This planet is powered by ETH 2.0.",
		"url": "61756156306605666331449191952000501727754696747778634075281474105988666621953",
		"image": "EtjYvQc5sG9ilaQxVcIhwdN-W9TvWLdAUhWaGOfqtwqf2xikBAi9uHJpUJupeB5gfPQ9Xh9UoouWVY8C7f_2clOIGSRJCNWccaVdDg=s0"
	},
	{
		"title": "Dionysus",
		"description": "Dionysus, the planet created by Vitalik, where most ETH core developers reside.",
		"url": "61756156306605666331449191952000501727754696747778634075281474108187689877505",
		"image": "emNMk9k7XKWQbdDDy-u-XnSEzXQ37N5Tizu-duLBSZ_wv5oQ2h_8ClreGapsLIh-MKZmBmkmWmKKniYSx4-DGBK_N-0AJBRUonNKQu0=s0"
	},
	{
		"title": "Cyllarus",
		"description": "Cyllarus, the land occupied by centaurs, powered by ETH dApps",
		"url": "61756156306605666331449191952000501727754696747778634075281474091695015460865",
		"image": "vUY6Sjv203KKN7tS94VGiDwM8OSy4N9vWQVdvurikNNEIrtj194GIQNL6hfusaHFefgdc6UkPFHZExssfuL3gNcjm_7eRdY1ecQd1w=s0"
	},
	{
		"title": "Dioscuri",
		"description": "Dioscuri, the land of the whales, is a planet created by hedge funds and large investors.",
		"url": "61756156306605666331449191952000501727754696747778634075281474109287201505281",
		"image": "Nz7P4DyUTY-R97NJ5A35CxLQdQMwMcfXW9a-7KqSV75eV_tCQbSZ_70tVjbJAZqnF9D6Imovjhu4S1woOluYaYwud2djkYEDOh4I=s0"
	},
	{
		"title": "Tiresias",
		"description": "Tiresias, the land of price oracles and modern dApps, created by visionaries, was built in anticipation for ETH 2.0.",
		"url": "61756156306605666331449191952000501727754696747778634075281474110386713133057",
		"image": "J4L6-A2wISzC-L6PW2g8NmV5-wlmV7OUR9Tluzes9FjWr1S2JyJM0I2gQGRmc275fqU9GSHmJvVZSKX0F7xFAGJAty_UUf77p9UaLnQ=s0"
	},
	{
		"title": "Gerana",
		"description": "Gerana, the planet of too good to be true projects, like play-to-earn games with no original way of distributing income. Looks like an oasis, but is actually a planet with unbreathable air, that in due time would make any human being suffocate.",
		"url": "61756156306605666331449191952000501727754696747778634075281474104889154994177",
		"image": "wBbkO7ThNXN_6BTXIimvFm62xHBl9yTwSes1rwQC_mayZqz-ZXt6A3jdbtPUsUckO5QqF_svtTVhgGmf0QiVfK7tlxgYZpWxqh7l=s0"
	},
	{
		"title": "Diogenes",
		"description": "The land of the Dogecoin hodlers. Don't let your dreams be memes.",
		"url": "61756156306605666331449191952000501727754696747778634075281474116983782899713",
		"image": "9h1HwUnLHhbE_CjDL1whZd-E9AWQm_vCkS9FnbmGEUy-n5bdqiySSo_NT2KZlDAkP6GkFw5ORfdL8f4ikt1w6mZ_frj3xHve-xoi=s0"
	},
	{
		"title": "Eros",
		"description": "Eros, the planet where zk-rollups were conceived.",
		"url": "61756156306605666331449191952000501727754696747778634075281474115884271271937",
		"image": "xWl7LYPM8xvn6rcg1iw09MnvKKXN9VnqGvQlk9qOs7CiNL_GDSSI8fVUbEoFwbbRjUupxaKo4h11APRXgm3QeiKMcTkIhCKP7y2h0Q=s0"
	},
	{
		"title": "Sicily",
		"description": "Sicily, the planet of the Laestrygonians, or dApps that copy-paste other more popular dApps code and somehow end up becoming more popular than the original dApp.",
		"url": "61756156306605666331449191952000501727754696747778634075281474113685248016385",
		"image": "DXNWqjRV1ST1qs7-2wu4NIFWsKyrBGlS1b122KmhEBmK7ZcIGeejh3KnhqCY3pq-sOsLb7w93qeiZ8TN3kUM7F8UD6CARMgwftfEsKI=s0"
	},
	{
		"title": "Aeacus",
		"description": "Aeacus, the all-mighty planet that unicorn ETH early investors live.",
		"url": "61756156306605666331449191952000501727754696747778634075281474111486224760833",
		"image": "TXg4488Dgh8GVMAi4EKJsBp1Q7gpTfJOWJqP9RuPIL8uK_Qm2hLL62dNESK80DLlGofKpZcuLf6P8gGcLVvd7RwapJ5vjQCiBqFx5A=s0"
	},
	{
		"title": "Cyclops",
		"description": "Cyclops, the planet occupied by strong diamond hands ETH holders that have bought ETH at the very low price of 85 $ or less.",
		"url": "61756156306605666331449191952000501727754696747778634075281474107088178249729",
		"image": "AmwT2DKwjlGVKTu8cgxoCTV_kw2YlS5oxzv3vYY394gRwdGkEPBl0fVi_Za-pBm2UAA3BmMTX1cts93X75BhnJki2MLY0XZKm2ONxQ=s0"
	},
	{
		"title": "Damysos",
		"description": "Damysos, the planet powered by L2 solutions that are fast and centralized.",
		"url": "61756156306605666331449191952000501727754696747778634075281474094993550344193",
		"image": "-eFsz6B8QabyOE8gW29CdfwyIoyYLHbPLzr9p2xHK2ThRR9Qk7uT2Y8eC34jWauXKerScdOy-cTURK-we41v2z6A2q9V6C72Tm7w=s0"
	},
	{
		"title": "Enceladus",
		"description": "Enceladus, the planet most resembling Gaia (Earth), is powered by early ETH 1.0 dApps.",
		"url": "61756156306605666331449191952000501727754696747778634075281474096093061971969",
		"image": "UI3uTeaHM0L2-BuiMwwgjL2SniFFcP0bL-fRbXgrB5JodZ2KoNWSTPxjtC9_hidypqbmZA_6u9gkYyZfuoxyNZF3WlKkExN2WewFoyg=s0"
	},
	{
		"title": "Endymion",
		"description": "Endymion is the planet of the first Game-Theory DAOs like Olympus DAO.",
		"url": "61756156306605666331449191952000501727754696747778634075281474112585736388609",
		"image": "UJ3dWmwqg5ldS1TG5Hd82a2fbeu2sRcMuY4yEwFqvI6zC1psdtkv1RxQIqd-whqgL2-5u7fI9MnLInpI0Og5BLImSVqjAv1_ok5Aiw=s0"
	},
	{
		"title": "Thanatos",
		"description": "Thanatos, the planet that personifies the ultimate death of ETH 1.0, where old commits and past proposals now reside.",
		"url": "61756156306605666331449191952000501727754696747778634075281474114784759644161",
		"image": "gGpyZiKmC9uO3OfeP88Qn5Xo5d2BAvCKpc6ofgim50598r8JfG8NDzb7Hsabkp1CkoU3PlvwNoDQQ-hWrusWDxYQXSln0Hv1CFaf=s0"
	},
	{
		"title": "Chryseis",
		"description": "Chryseis or Astynome is the land of torment and immoral practices, where rug-pullers and the creators of the Squid Game token live.",
		"url": "61756156306605666331449191952000501727754696747778634075281474102690131738625",
		"image": "Oo1ExU3b28xLpr3oOr-OKa72vt_flX8esPxrRYqzVs2zTjHFzFuyX0CT9dJxBWdOotEfkBWBcN2kYGSb52DP65dsgqq-JATDPvnnrDg=s0"
	},
	{
		"title": "Hera",
		"description": "Hera, the rocky planet where new dApps are birthed, powered by L2.",
		"url": "61756156306605666331449191952000501727754696747778634075281474101590620110849",
		"image": "sDhliJEkO20E19dIg75spdBSXZyDX6a-qYBXkHgW4Ewd2S74uf0y1O62CRvJQNjaMchw6Glu2stA9KsT5qoTo-n-VkMp_i3ikw_G3g=s0"
	},
	{
		"title": "Helen",
		"description": "Helen, the planet where the woman that caused the Trojan War was born.",
		"url": "61756156306605666331449191952000501727754696747778634075281474098292085227521",
		"image": "HFF3l2EXMirIGdmwWjrQSexSTtW87YQVU326r4hEoE6ijaFmZ6-47DwtZ_PNiU-FqzkHnyZPU_T3Y6o5M00cEO9d6yOQ7fu6s242rg=s0"
	},
	{
		"title": "Muse",
		"description": "Muse, the land of muses, luring you into their rug-pull dApps with their angelic voices.",
		"url": "61756156306605666331449191952000501727754696747778634075281474097192573599745",
		"image": "q1G0gZeYrv88SqqtGrAR-SjffIAW7ds1iA0KSlRY1ktx4wqRCG7E5pUnHHsrhnYjZT5D2NFy2Cakd3DzrlD5egu61eJuHtjj7v41=s0"
	},
	{
		"title": "Acanthis",
		"description": "Acanthis, the planet of Acanthis the daughter of Hippodamia and Autonous's hiding place.",
		"url": "61756156306605666331449191952000501727754696747778634075281474093894038716417",
		"image": "vS8UG1VX6iX1O3NAS8XpZB3jXcvdngXCJDu2njUAcTjo8lD0NYEfyLq1lymJsq42GS2oSwFXnzjdWoxUiwB3IxWqVHCoq10C4zWmtQ=s0"
	},
	{
		"title": "Pygmalion",
		"description": "Sandy Pygmalion, the land powered by primitive dApps.",
		"url": "61756156306605666331449191952000501727754696747778634075281474089495992205313",
		"image": "Ua2TcONiZfP_p--2BblSU-DtsmrCysPJJQOXBsLsXQzuigglUQphoXv-HjkL5l0P_E4ZRfsaPz9u2p0wUMlAF_HJK9ehCjkmbzRYzQ=s0"
	}
]


// function fetch_for_items(wallet = "0x8888beEC271Af7f2469ba6ea08C6Fd30a569E482") {
// 	fetch(`https://api.opensea.io/api/v1/assets?owner=${wallet}&order_direction=desc&offset=0&limit=50`).then(function (response) {
// 		// The API call was successful!
// 		return response.json();
// 	}).then(function (data) {
// 		debugger
// 	}).catch(function (err) {
// 		// There was an errr
// 		console.warn(`Error ${err}`);
// 	});
// }

function populate_html() {
	for (let i = 0; i < dict.length; i++) {
		collection_append(dict[i].url, dict[i].image, dict[i].title, dict[i].description)
	}
}

function collection_append(id1, id2, title, description) {
	const collection = document.getElementById('collection')
	var div = document.createElement("div")
	var str = `<a href='${base_url1}/${id1}'
								target="_blank" title=${title}>
								<div class='flex flex-col'>
									<img class="hover:grow hover:shadow-lg assetImage"
										src='${base_url2}/${id2}'
										class='w-full rounded-lg' />
									<div class='flex-col w-full space-y-1'>
									<div class="centered">
										<p class='text-gray-500 text-xs word-wrap'>${description}</p>
										</div>
									</div>
								</div>
							</a>`
	div.className = "container w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
	div.innerHTML = str
	collection.appendChild(div)
}

function copyright_update() {
	var today = new Date();
	var year = today.getFullYear();
	var paragraph = document.getElementById("copyright");
	paragraph.innerHTML = 'Copyright &copy; ' + year + ' <a href="https://opensea.io/collection/ethereum-planets-gan">Ethereum planets</a><br>All Rights Reserved';
}

copyright_update();
populate_html();