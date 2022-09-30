const formElement = document.querySelector(".inputs_div")


formElement.addEventListener("submit", event => {
    event.preventDefault()
    formElement.reset()

})



const logiinButtonElement = document.querySelector(".emojis_button")
console.log(logiinButtonElement);


logiinButtonElement.addEventListener("click", event => {
    console.log(inputElement.value)
    inputElement.reset
    event.preventDefault()
    const newLiElement = document.createElement("li")
    const timeElement = document.createElement("h3")
    timeElement.textContent = datetime
    newLiElement.textContent = inputElement.value
    newLiElement.appendChild(timeElement)
    nav_listElement.appendChild(newLiElement)
    inputElement.value = null
    newLiElement.style.paddingLeft = "20px"
    newLiElement.style.paddingRight = "20px"
    newLiElement.style.display = "flex"
    timeElement.style.marginTop = "6px"
    timeElement.style.marginLeft = "10px"
})
const inputElement = document.querySelector("#nameInputt")
const nav_listElement = document.querySelector(".meesge")
console.log(inputElement)





const clickElement = document.querySelector(".menu_click")
const glavniy = document.querySelector(".glavniy_menu")
const menugelement = document.querySelector(".menug")
clickElement.addEventListener("click" , event => {
    glavniy.classList.add("menu_glavniy")
    menugelement.classList.add("menu_g")
    menugelement.classList.remove("menug")
    event.preventDefault()
})

menugelement.addEventListener("click" , event => {
    glavniy.classList.remove("menu_glavniy")
    menugelement.classList.remove("menu_g")
})


const settingelement = document.querySelector(".setting_button")
const setItemsElement = document.querySelector(".set_meti")


const setElement = document.querySelector(".set")
settingelement.addEventListener("click" , event => {
    setElement.classList.add("set_div")
    glavniy.classList.remove("menu_glavniy")
    menugelement.classList.remove("menu_g")

    setItemsElement.classList.add("set_itme")
    setItemsElement.classList.remove("set_meti")
    console.log(event);
})

const button_bxElement = document.querySelector(".button_bx")



button_bxElement.addEventListener("click" , event => {
    setElement.classList.remove("set_div")
    setElement.classList.add("tes")
    setItemsElement.classList.remove("set_itme")
    setItemsElement.classList.add("set_meti")
})
setItemsElement.addEventListener("click" , event => {
    setElement.classList.remove("set_div")
    setElement.classList.add("tes")
    setItemsElement.classList.remove("set_itme")
    setItemsElement.classList.add("set_meti")
})


const stikers = ["😌", "😋" ,"😊" , "😉" , "😈" , "😇" , "😆" , "😅" , "😄" , " 😃    " , "😂" , "😁" , "😀"]
console.log(stikers);

const emoelement = document.querySelector(".emo_button")
const stiker_vidElementw = document.querySelector(".stiker_vid")
const stiker_ulElement = document.querySelector(".stiker_ul")

for(let item of stikers) {
    let newLiElement = document.createElement("li")
    newLiElement.classList.add("stikersss")
    newLiElement.textContent = item
    stiker_ulElement.appendChild(newLiElement)
    
    newLiElement.addEventListener("click", event => {
        inputElement.value += item
    })  
}

emoelement.addEventListener('click', evt => {
    stiker_vidElementw.style.display = 'block'
    evt.preventDefault()
})
emoelement.addEventListener('dblclick', evt => {
    stiker_vidElementw.style.display = 'none'
})

stiker_vidElementw.style.display = "none"


const lilielement = document.querySelector(".lili")
const nameElement = document.querySelector(".name")
const h2Element = document.querySelector(".h2_name")
const p_sub = document.querySelector(".p_sub")
const sub_nameElement = document.querySelector(".sub_name")


lilielement.addEventListener("click" , event => {
    console.log(event);
    nameElement.textContent = "Aizen Souske"
    sub_nameElement.textContent = datetime 
    divElement.style.display = "block"
    mesElement.style.display = "none"
    mesTwoElement.style.display = "none"
    mesThreeElement.style.display = "none"
})

let  currentdate = new Date();
let datetime = currentdate.getHours() + ":" + currentdate.getMinutes() ;

const ililElement = document.querySelector(".ilil")
const divElement = document.querySelector(".div_messege")
const mesElement = document.querySelector(".div_messege1")
const mesTwoElement = document.querySelector(".div_messege2")
const mesThreeElement = document.querySelector(".div_messege3")
mesTwoElement.style.display = "none"
mesThreeElement.style.display = "none"


const nameElements = document.querySelector(".names")
const sub_nameElements = document.querySelector(".sub_names")
ililElement.addEventListener("click" , event => {
    divElement.style.display = "none"
    mesTwoElement.style.display = "none"
    mesThreeElement.style.display = "none"
    mesElement.style.display = "block"

    nameElements.textContent = "Kuchiki Byakuya"
    sub_nameElements.textContent = datetime
})
mesElement.style.display = "none"




const formElements = document.querySelector(".inputs_divs")


formElement.addEventListener("submit", event => {
    event.preventDefault()
    formElement.reset()

})



const logiinButtonElements = document.querySelector(".emojis_buttons")
console.log(logiinButtonElement);


logiinButtonElements.addEventListener("click", event => {
    console.log(inputElement.value)
    inputElements.reset
    event.preventDefault()
    const newLiElement = document.createElement("li")
    const timeElement = document.createElement("h3")
    timeElement.textContent = datetime
    newLiElement.textContent = inputElements.value
    newLiElement.appendChild(timeElement)
    nav_listElements.appendChild(newLiElement)
    inputElements.value = null
    newLiElement.style.paddingLeft = "20px"
    newLiElement.style.paddingRight = "20px"
    newLiElement.style.display = "flex"
    timeElement.style.marginTop = "6px"
    timeElement.style.marginLeft = "10px"
})
const inputElements = document.querySelector("#nameInputts")
const nav_listElements = document.querySelector(".meesges")
console.log(inputElement)



const stikerss = ["😌", "😋" ,"😊" , "😉" , "😈" , "😇" , "😆" , "😅" , "😄" , " 😃    " , "😂" , "😁" , "😀"]
console.log(stikers);

const emoelements = document.querySelector(".emo_buttons")
const stiker_vidElementws = document.querySelector(".stiker_vids")
const stiker_ulElements = document.querySelector(".stiker_uls")

for(let item of stikerss) {
    let newLiElements = document.createElement("li")
    newLiElements.classList.add("stikersss")
    newLiElements.textContent = item
    stiker_ulElements.appendChild(newLiElements)
    
    newLiElements.addEventListener("click", event => {
        inputElements.value += item
    })  
}

emoelements.addEventListener('click', evt => {
    stiker_vidElementws.style.display = 'block'
    evt.preventDefault()
})
emoelements.addEventListener('dblclick', evt => {
    stiker_vidElementws.style.display = 'none'
})
stiker_vidElementws.style.display = "none"



const searcjElement = document.querySelector("#search")


searcjElement.addEventListener("keyup" , event => {
    console.log(event);
    let searchQuery = event.target.value.toLowerCase()
    let itemElement = document.querySelectorAll(".item")

    for(let i = 0; i < itemElement.length; i++) {
        const cerrentItem = itemElement[i].textContent.toLowerCase()

        if(cerrentItem.includes(searchQuery)) {
            itemElement[i].style.display = "block"
        } else {
            itemElement[i].style.display = "none"
        }
    }
    itemElement.style.display = "flex"
})


const liElementThree = document.querySelector(".lile")

liElementThree.addEventListener("click" , event => {
    console.log(event);
    mesTwoElement.style.display = "block"
    divElement.style.display = "none"
    mesElement.style.display = "none"
    mesThreeElement.style.display = "none"

    const namess = document.querySelector(".names2")

    namess.textContent = "Kurosaki ichigo"

    const sub_namess = document.querySelector(".sub_names2")

    sub_namess.textContent = datetime
})

const formElementss = document.querySelector(".inputs_divs2")


formElementss.addEventListener("submit", event => {
    event.preventDefault()
    formElementss.reset()

})



const logiinButtonElementss = document.querySelector(".emojis_buttons2")
console.log(logiinButtonElementss);


logiinButtonElementss.addEventListener("click", event => {
    console.log(inputElementss.value)
    inputElementss.reset
    event.preventDefault()
    const newLiElementss = document.createElement("li")
    const timeElement = document.createElement("h3")
    timeElement.textContent = datetime
    newLiElementss.textContent = inputElementss.value
    newLiElementss.appendChild(timeElement)
    nav_listElementss.appendChild(newLiElementss)
    inputElementss.value = null
    newLiElementss.style.paddingLeft = "20px"
    newLiElementss.style.paddingRight = "20px"
    newLiElementss.style.display = "flex"
    timeElement.style.marginTop = "6px"
    timeElement.style.marginLeft = "10px"
})
const inputElementss = document.querySelector("#nameInputts2")
const nav_listElementss = document.querySelector(".meesges2")
console.log(inputElementss)


const stikersss = ["😌", "😋" ,"😊" , "😉" , "😈" , "😇" , "😆" , "😅" , "😄" , " 😃    " , "😂" , "😁" , "😀"]
console.log(stikersss);

const emoelementss = document.querySelector(".emo_buttons2")
const stiker_vidElementwss = document.querySelector(".stiker_vids2")
const stiker_ulElementss = document.querySelector(".stiker_uls2")

for(let item of stikersss) {
    let newLiElementss = document.createElement("li")
    newLiElementss.classList.add("stikersss")
    newLiElementss.textContent = item
    stiker_ulElementss.appendChild(newLiElementss)
    
    newLiElementss.addEventListener("click", event => {
        inputElementss.value += item
    })  
}

emoelementss.addEventListener('click', evt => {
    stiker_vidElementwss.style.display = 'block'
    evt.preventDefault()
})
emoelementss.addEventListener('dblclick', evt => {
    stiker_vidElementwss.style.display = 'none'
})
stiker_vidElementwss.style.display = "none"


const ulliElement = document.querySelector(".ulli")

ulliElement.addEventListener("click" , event => {
    divElement.style.display = "none"
    mesElement.style.display = "none"
    mesTwoElement.style.display = "none"
    mesThreeElement.style.display = "block"

    const nmesss = document.querySelector(".names3")

    nmesss.textContent = "Renji Abaray"

    const subthree = document.querySelector(".sub_names3")

    subthree.textContent = datetime

})


const chormElement = document.querySelector("#forms")

chormElement.addEventListener("submit" , event => {
    event.preventDefault()
    chormElement.reset()
})
const logiinButtonElementsss = document.querySelector(".emojis_buttons3")
console.log(logiinButtonElementsss);


logiinButtonElementsss.addEventListener("click", event => {
    inputElementsss.reset
    console.log(inputElementsss.value)
    // event.preventDefault()
    const newLiElementsss = document.createElement("li")
    const timeElement = document.createElement("h3")
    timeElement.textContent = datetime
    newLiElementsss.textContent = inputElementsss.value
    newLiElementsss.appendChild(timeElement)
    nav_listElementsss.appendChild(newLiElementsss)
    inputElementss.value = null
    newLiElementsss.style.paddingLeft = "20px"
    newLiElementsss.style.paddingRight = "20px"
    newLiElementsss.style.display = "flex"
    timeElement.style.marginTop = "6px"
    timeElement.style.marginLeft = "10px"
})
const inputElementsss = document.querySelector("#nameInputts3")
const nav_listElementsss = document.querySelector(".meesges3")
console.log(inputElementsss)



const stikerssss = ["😌", "😋" ,"😊" , "😉" , "😈" , "😇" , "😆" , "😅" , "😄" , " 😃    " , "😂" , "😁" , "😀"]

const emoelementsss = document.querySelector(".emo_buttons3")
const stiker_vidElementwsss = document.querySelector(".stiker_vids3")
const stiker_ulElementsss = document.querySelector(".stiker_uls3")

for(let item of stikerssss) {
    let newLiElementsss = document.createElement("li")
    newLiElementsss.classList.add("stikerssss")
    newLiElementsss.textContent = item
    stiker_ulElementsss.appendChild(newLiElementsss)
    
    newLiElementsss.addEventListener("click", event => {
        inputElementsss.value += item
    })  
}

emoelementsss.addEventListener('click', evt => {
    stiker_vidElementwsss.style.display = 'block'
    evt.preventDefault()
})
emoelementsss.addEventListener('dblclick', evt => {
    stiker_vidElementwsss.style.display = 'none'
})
stiker_vidElementwsss.style.display = "none"


const searcjElementt = document.querySelector("#searchh")

searcjElementt.addEventListener("keyup" , event => {
    console.log(event);
    let searchQuery = event.target.value.toLowerCase()
    let itemElementt = document.querySelectorAll(".itemm")

    for(let i = 0; i < itemElementt.length; i++) {
        const cerrentItem = itemElementt[i].textContent.toLowerCase()

        if(cerrentItem.includes(searchQuery)) {
            itemElementt[i].style.display = "block"
        } else {
            itemElementt[i].style.display = "none"
        }
    }
    itemElementt.style.display = "flex"
})


const contactsElement = document.querySelector(".menu_buttons")
const fisElement = document.querySelector(".contacs_fis")
const fitElement = document.querySelector(".fit")

contactsElement.addEventListener("click" , event => {
    // console.log(event);
    fisElement.classList.add("contacs_fiv")
    fisElement.classList.remove("contacs_fis")

    glavniy.classList.remove("menu_glavniy")
    menugelement.classList.remove("menu_g")

    fitElement.classList.add("fis")
    fitElement.classList.remove("fit")

})

fitElement.addEventListener("click" , event => {
      // console.log(event);
      fisElement.classList.add("contacs_fis")
      fisElement.classList.remove("contacs_fic")

      fitElement.classList.add("fit")
      fitElement.classList.remove("fis")
})


const verElement = document.querySelector(".ver_bx")
const thre_vesElement = document.querySelector(".thre_ves")

verElement.addEventListener("click" , event => {
    thre_vesElement.classList.add("thre_ver")
    thre_vesElement.classList.remove("thre_ves")
})
verElement.addEventListener("dblclick" , event => {
    thre_vesElement.classList.remove("thre_ver")
    thre_vesElement.classList.add("thre_ves")
})



const profil_menuElement = document.querySelector(".profil_menu")
const pros_divElement = document.querySelector(".pros_div")

profil_menuElement.addEventListener("click" , event => {
    pros_divElement.classList.add("pro_div")
    pros_divElement.classList.remove("pros_div")
})
profil_menuElement.addEventListener("dblclick" , event => {
    pros_divElement.classList.remove("pro_div")
    pros_divElement.classList.add("pros_div")
})
const profil_menuElements = document.querySelector(".profil_menus")
const pros_divElements = document.querySelector(".pros_divs")

profil_menuElements.addEventListener("click" , event => {
    pros_divElements.classList.add("pro_divss")
    pros_divElements.classList.remove("pros_divs")
})
profil_menuElements.addEventListener("dblclick" , event => {
    pros_divElements.classList.remove("pro_divss")
    pros_divElements.classList.add("pros_divs")
})
const profil_menuElementv = document.querySelector(".profil_menuv")
const pros_divElementv = document.querySelector(".pros_divv")

profil_menuElementv.addEventListener("click" , event => {
    pros_divElementv.classList.add("pro_divt")
    pros_divElementv.classList.remove("pros_divv")
})
profil_menuElementv.addEventListener("dblclick" , event => {
    pros_divElementv.classList.remove("pro_divt")
    pros_divElementv.classList.add("pros_divv")
})
const profil_menuElementa = document.querySelector(".profil_menua")
const pros_divElementa = document.querySelector(".pros_diva")

profil_menuElementa.addEventListener("click" , event => {
    pros_divElementa.classList.add("pro_divb")
    pros_divElementa.classList.remove("pros_diva")
})
profil_menuElementa.addEventListener("dblclick" , event => {
    pros_divElementa.classList.remove("pro_divb")
    pros_divElementa.classList.add("pros_diva")
})



const profil_divElement = document.querySelector(".profil_div")
const infor_profilldElement = document.querySelector(".infor_profilld")
const flieElement = document.querySelector(".flie")

profil_divElement.addEventListener("click" , event => {
    infor_profilldElement.classList.add("infor_profils")
    infor_profilldElement.classList.remove("infor_profilld")

    flieElement.classList.add("flies")
    flieElement.classList.remove("flie")
})

flieElement.addEventListener("click" , event => {
    infor_profilldElement.classList.remove("infor_profils")
    infor_profilldElement.classList.add("infor_profilld")

    flieElement.classList.remove("flies")
    flieElement.classList.add("flie")
})

const buttononElement = document.querySelector(".buttonon")

buttononElement.addEventListener("click" , event => {
    infor_profilldElement.classList.remove("infor_profils")
    infor_profilldElement.classList.add("infor_profilld")

    flieElement.classList.remove("flies")
    flieElement.classList.add("flie")
})















const profil_divElements = document.querySelector(".profil_diva")
const infor_profilldElements = document.querySelector(".infor_profillds")
const flieElements = document.querySelector(".fliez")

profil_divElements.addEventListener("click" , event => {
    infor_profilldElements.classList.add("infor_profilp")
    infor_profilldElements.classList.remove("infor_profillds")

    flieElements.classList.add("fliea")
    flieElements.classList.remove("fliez")
})

flieElements.addEventListener("click" , event => {
    infor_profilldElements.classList.remove("infor_profilp")
    infor_profilldElements.classList.add("infor_profillds")

    flieElements.classList.remove("fliea")
    flieElements.classList.add("fliez")
})

const buttononElements = document.querySelector(".buttonons")

buttononElements.addEventListener("click" , event => {
    infor_profilldElements.classList.remove("infor_profilp")
    infor_profilldElements.classList.add("infor_profillds")

    flieElements.classList.remove("fliea")
    flieElements.classList.add("fliez")
})










const profil_divElementsa = document.querySelector(".profil_divs")
const infor_profilldElementsa = document.querySelector(".infor_profilldsh")
const flieElementsa = document.querySelector(".fliech")

profil_divElementsa.addEventListener("click" , event => {
    infor_profilldElementsa.classList.add("infor_profilldk")
    infor_profilldElementsa.classList.remove("infor_profilldsh")

    flieElementsa.classList.add("fliel")
    flieElementsa.classList.remove("fliech")
})

flieElementsa.addEventListener("click" , event => {
    infor_profilldElementsa.classList.remove("infor_profilldk")
    infor_profilldElementsa.classList.add("infor_profilldsh")

    flieElementsa.classList.remove("fliel")
    flieElementsa.classList.add("fliech")
})

const buttononElementsa = document.querySelector(".buttononsa")

buttononElementsa.addEventListener("click" , event => {
    console.log(event);
    infor_profilldElementsa.classList.remove("infor_profilldk")
    infor_profilldElementsa.classList.add("infor_profilldsh")

    flieElementsa.classList.remove("fliel")
    flieElementsa.classList.add("fliech")
})







const profil_divElementsh = document.querySelector(".profil_divs3")
const infor_profilldElementsh = document.querySelector(".infor_profilldlh")
const flieElementsh = document.querySelector(".flielc")

profil_divElementsh.addEventListener("click" , event => {
    infor_profilldElementsh.classList.add("infor_profilldhs")
    infor_profilldElementsh.classList.remove("infor_profilldlh")

    flieElementsh.classList.add("fliehc")
    flieElementsh.classList.remove("flielc")
})

flieElementsh.addEventListener("click" , event => {
    infor_profilldElementsh.classList.remove("infor_profilldhs")
    infor_profilldElementsh.classList.add("infor_profilldlh")

    flieElementsh.classList.remove("fliehc")
    flieElementsh.classList.add("flielc")
})

const buttononElementsh = document.querySelector(".buttononsh")

buttononElementsh.addEventListener("click" , event => {
    console.log(event);
    infor_profilldElementsh.classList.remove("infor_profilldhs")
    infor_profilldElementsh.classList.add("infor_profilldlh")

    flieElementsh.classList.remove("fliehc")
    flieElementsh.classList.add("flielc")
})




const addElement = document.querySelector("#add")
const oloElement = document.querySelector(".olo")
const addconElement = document.querySelector(".addcon")


addElement.addEventListener("click" , event => {
    addconElement.classList.add("addcontact")
    addconElement.classList.remove("addcon")

    fisElement.classList.remove("contacs_fiv")
    fisElement.classList.add("contacs_fis")

    fitElement.classList.remove("fis")
    fitElement.classList.add("fit")

    oloElement.classList.add("lol")
    oloElement.classList.remove("olo")
})

oloElement.addEventListener("click" , event => {
    addconElement.classList.remove("addcontact")
    addconElement.classList.add("addcon")


    
    oloElement.classList.remove("lol")
    oloElement.classList.add("olo")
})

const addButtonElement = document.querySelector("#addButton")
const addHtwoElement = document.querySelector(".addHtwo")
const subAddElement = document.querySelector(".subAdd")
const userElement = document.querySelector("#user")
const namesElement = document.querySelector("#names")
const ullishisElement = document.querySelector(".ullio")

addButtonElement.addEventListener("click" , event => {
    addHtwoElement.textContent = userElement.value
    subAddElement.textContent = namesElement.value

    addconElement.remove()
    
    oloElement.remove()

    addElement.remove()


    ullishisElement.classList.add("ullip")
    ullishisElement.classList.remove("ullio")
})
