import Planeta from "./planeta.js" 
import { converter } from './calculo.js'

let planetas = [
  new Planeta("Mercúrio", 0.39),
  new Planeta("Vênus", 0.72),
  new Planeta("Terra", 1),
  new Planeta("Marte", 1.52),
  new Planeta("Júpier", 5.2),
  new Planeta("Saturno", 9.53),
  new Planeta("Urano", 19.1),
  new Planeta("Netuno", 30)
]

planetas.forEach(planeta => {
  let distanciaConvertida = converter(planeta.distancia).toFixed(2)
  console.log(`${planeta.name} - ${planeta.distancia}AU - ${distanciaConvertida}km`)
})