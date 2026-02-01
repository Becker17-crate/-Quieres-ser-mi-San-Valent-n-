    const noBtn = document.getElementById("noBtn");

    noBtn.addEventListener("mouseover", moverBoton);

    function moverBoton() {
      const x = Math.random() * 250;
      const y = Math.random() * 50;
      noBtn.style.left = x + "px";
      noBtn.style.top = y + "px";
    }

    function acepta() {
      document.querySelector('.card').innerHTML = `
        <h1>🥰 Gracias por decir que sí 🥰</h1>
        <p>
            No sabes lo feliz que me hace compartir este momento contigo.
            Prometo cuidarte, escucharte, hacerte reír
            y convertir los pequeños instantes en recuerdos inolvidables.
            
            Este 14 de febrero no es solo una fecha…
            es el comienzo de algo bonito contigo 💖🌹

            💕 Mi San Valentín 💕
        </p>
      `;
    }