document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const agregados = document.getElementById("agregados");

  // Paso 1 y 2: Generar maqueta base mostrando solo imagenes con status true
  const activos = data.filter(perro => perro.status === true);

  const maqueta = document.createElement("div");
  maqueta.style.display = "flex";
  maqueta.style.flexWrap = "wrap";
  maqueta.style.gap = "10px";

  activos.slice(0, 6).forEach((perro, i) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
      <img class="images" src="${perro.imagen}" alt="imagen ${i + 1}">
    `;
    maqueta.appendChild(wrapper);
  });

  container.appendChild(maqueta);

  // Paso 3: Distribuir nuevas imagenes (todas activas) en columnas dinamicas
  const columnas = 3;
  agregados.style.display = "flex";
  agregados.style.gap = "20px";
  agregados.style.marginTop = "20px";

  // Crear contenedores de columnas
  const columnasDiv = [];
  for (let i = 0; i < columnas; i++) {
    const col = document.createElement("div");
    col.style.flex = "1";
    col.style.display = "flex";
    col.style.flexDirection = "column";
    col.style.gap = "15px";
    columnasDiv.push(col);
    agregados.appendChild(col);
  }

  // Agregar imagenes distribuidas entre columnas
  activos.forEach((perro, index) => {
    const box = document.createElement("div");
    const img = document.createElement("img");
    img.src = perro.imagen;
    img.alt = perro.descripcion;
    img.className = "images";

    const texto = document.createElement("p");
    texto.textContent = perro.descripcion || "Sin descripción";

    box.appendChild(img);
    box.appendChild(texto);

    const columnaIndex = index % columnas;
    columnasDiv[columnaIndex].appendChild(box);
  });
});
