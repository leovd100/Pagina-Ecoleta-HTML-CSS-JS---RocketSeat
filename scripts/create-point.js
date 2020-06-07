



function ufSelector(url,select){
fetch(url)
	.then((res) =>  {return res.json()})
	.then(states => {

		for (state of states){ // IGUAL PYTHON FOR X IN Y
		select.innerHTML += `<option value=${state.id} > ${state.sigla}</option>`
		}
	})

}

function selectCities(url,select){

	select.innerHTML = ''
	select.disabled = true
	fetch(url)
	.then((res) =>  {return res.json()})
	.then(cities => {

		for (city of cities){ // IGUAL PYTHON FOR X IN Y
		select.innerHTML += `<option value="${city.nome}" > ${city.nome}</option>`
		}
		
		select.disabled = false
	})

}










function populateUFs(){
	const ufSelect = document.querySelector('select[name=uf]')
	url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
	ufSelector(url,ufSelect)
}

populateUFs()

function getCities(event){
	const ufValue = event.target.value 
	const cityselect = document.querySelector('[name=city]')
	const stateInput = document.querySelector('[name=state]')

	
	const valorindex = event.target.selectedIndex
	stateInput.value = event.target.options[valorindex].text
	


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

	selectCities(url,cityselect)

	
	
}



document
	.querySelector('select[name=uf]')
	.addEventListener('change',getCities)