const btHamburger = document.querySelector(".menu-hamburger")
const mainMenu = document.querySelector("nav.main-menu")

btHamburger.addEventListener("click", () => {
  btHamburger.classList.toggle("opened")
  mainMenu.classList.toggle("opened")
})

// ----------------------------------------------------------------------------------

const btDialog = document.querySelector(".bt-dialog")
const btModal = document.querySelector(".bt-modal")
const dialog1 = document.querySelector("#dialog1")
const dialog2 = document.querySelector("#dialog2")
const fechar1 = document.querySelector(".fechar1")
const fechar2 = document.querySelector(".fechar2")

btDialog.addEventListener("click", () => dialog1.show())
btModal.addEventListener("click", () => dialog2.showModal())

fechar1.addEventListener("click", () => dialog1.close())
fechar2.addEventListener("click", () => dialog2.close())