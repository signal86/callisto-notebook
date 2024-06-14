import './style.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app

const darkModeBox = document.getElementById("darkmode"); 
darkModeBox.addEventListener("change", (e) => {
  document.body.classList.toggle("dark");
})
