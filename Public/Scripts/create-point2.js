
function populateUFs () {
    const ufselect= document.querySelector("seleect[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res=> {return res .JSON ()})
    .then( states => {
        
        ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`

        for(const state of state ){ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option`

        }
    } )
}

populateUFs()

function getCities (event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=city]")

    const ufValue = event.target.value
    const indexOfSelectedState = event.target.selectedindexstateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios`


    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disable = true 
}

function getCities (event) {
    const citySelect = document.querySelector("select[name=city]")
    console.log(event.target.value)

    for( const city of cities) {
        citySelect.innerHTML +=`<option value"${city.nome }">${city.nome}</option`
    }

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios`
}
document
        .querySelector("select[name=uf]")
        .addEventListener("change", getCities)

        //Itens de coleta
    //pegar todos os li's

    const itemstocollect = document.querySelectorAll(".items-grid li")
    for (const item of itemstocollect)
    item.addEventListener(event)
        
        console.log(event.target.dataset.id)



    let selecteItems = []
    function handselecteditem(event){
        const item = event.target
    
         itemli.classlist.toggle("selected")

         const itemId = itemLi.dataset.id 

          const alreadyselected = selecteItems.findIndex( function( item) {const itemFound = item === itemId
            return itemFound
         })
         if(alreadyselected >= 0) {
             const filteredItems = selecteItems.filter( item => {
                 const itemIsDifferet = item != itemId 
                return itemIsDifferet 
             })

             selecteItems = filteredItems 
         }else{
             selecteItems.push(itemId)
         }

         
       console.log(filteredItems)
       collectecItems.value = selectedItems 
       
        }