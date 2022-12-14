const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Favoritos:[],
			Pokemones:[],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getPokemones:()=>{
				fetch("https://pokeapi.co/api/v2/pokemon")
  				.then(response => response.json())
  				.then(result => setStore({Pokemones:result.results}))
  				.catch(error => console.log('error', error));
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			añadirFav: (item) =>{
				const store = getStore();
				setStore({ Favoritos : [...store.Favoritos, item]})
			}
		}
	};
};

export default getState;
