const container = document.getElementById("heroesListado");

function filtrarHeroes() {
  const atributoSeleccionado = document.getElementById("filtroAtributo").value;
  const rolSeleccionado = document.getElementById("filtroRol").value;
  const tipoAtaqueSeleccionado =
    document.getElementById("filtroTipoAtaque").value;
  let listaHeroes = [];
  console.log(atributoSeleccionado, rolSeleccionado, tipoAtaqueSeleccionado);
  todosLosHeroes.forEach((hero) => {
    const coincideAtributo =
      atributoSeleccionado === "todo" ||
      hero.primary_attr === atributoSeleccionado;
    const coincideRol =
      rolSeleccionado === "todo" || hero.roles.includes(rolSeleccionado);
    const coincideAtaque =
      tipoAtaqueSeleccionado === "todo" ||
      hero.attack_type === tipoAtaqueSeleccionado;
    if (coincideAtributo && coincideRol && coincideAtaque) {
      listaHeroes.push(hero);
    }
  });
  mostrarfiltro(listaHeroes);
}

function mostrarfiltro(heroes) {
  const strContainer = document.getElementById("str");
  const agiContainer = document.getElementById("agi");
  const intContainer = document.getElementById("int");
  const allContainer = document.getElementById("all");
  strContainer.innerHTML = "";
  agiContainer.innerHTML = "";
  intContainer.innerHTML = "";
  allContainer.innerHTML = "";

  let heroeCard = "";
  heroes.forEach((heroe) => {
    const heroName = heroe.name.replace("npc_dota_hero_", "");
    heroeCard = `<div class="hero-card">
                    <img src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/${heroName}_full.png" alt="${
      heroe.localized_name
    }"/>
                    <h3>${heroe.localized_name}</h3>
                    <p>Roles: ${heroe.roles.join(", ")}</p>
                    <p>Attribute: ${heroe.primary_attr}</p>
                    <p>AT: ${heroe.attack_type}</p>
                  </div>`;
    if (heroe.primary_attr === "str") {
      strContainer.innerHTML += heroeCard;
    } else if (heroe.primary_attr === "agi") {
      agiContainer.innerHTML += heroeCard;
    } else if (heroe.primary_attr === "int") {
      intContainer.innerHTML += heroeCard;
    } else {
      allContainer.innerHTML += heroeCard;
    }
    //container.innerHTML = heroeCard;
  });
}

async function obtenerHeroes() {
  try {
    const respuesta = await fetch("https://api.opendota.com/api/heroStats");
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error("Error al obtener los héroes:", error);
  }
}

let todosLosHeroes = [];

document.addEventListener("DOMContentLoaded", () => {
  let strList = document.createElement("div");
  let agiList = document.createElement("div");
  let intList = document.createElement("div");
  let allList = document.createElement("div");
  strList.id = "strList";
  agiList.id = "agiList";
  intList.id = "intList";
  allList.id = "allList";
  strList.innerHTML = `<h2>Fuerza</h2>
                       <div id="str" class="atributo-grid"></div>`;
  agiList.innerHTML = `<h2>Agilidad</h2>
                       <div id="agi" class="atributo-grid"></div>`;
  intList.innerHTML = `<h2>Inteligencia</h2>
                       <div id="int" class="atributo-grid"></div>`;
  allList.innerHTML = `<h2>Universal</h2>
                       <div id="all" class="atributo-grid"></div>`;
  container.appendChild(strList);
  container.appendChild(agiList);
  container.appendChild(intList);
  container.appendChild(allList);

  cargarHeroes();
  cargarHeroesStats();
  document
    .getElementById("btnfiltrar")
    .addEventListener("click", filtrarHeroes);
});

async function cargarHeroes() {
  try {
    const response = await fetch("https://api.opendota.com/api/heroStats");
    const data = await response.json();
    todosLosHeroes = data;
    console.log(todosLosHeroes);
    mostrarfiltro(todosLosHeroes);
  } catch (error) {
    console.error("Error al obtener los héroes:", error);
  }
}

// async function cargarHeroesStats() {
//   try {
//     const response = await fetch("https://api.opendota.com/api/heroStats");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error al obtener los héroes:", error);
//   }
// }

document.getElementById("heroeInput").addEventListener("input", () => {
  const nombre = document.getElementById("heroeInput").value.toLowerCase();
  const resultado = todosLosHeroes.filter((heroe) =>
    heroe.localized_name.toLowerCase().includes(nombre)
  );
  mostrarfiltro(resultado);
});
