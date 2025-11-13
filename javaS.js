console.log('script cargado');

document.addEventListener('DOMContentLoaded', () => {
  const mapping = {
    btnQuienSoy: 'quien-soy',
    btnFormacion: 'formacion-academica',
    btnExperiencia: 'experiencia-laboral',
    btnIntereses: 'intereses',
    btnFooter: 'footer'
  };

  function scrollWithOffset(element, offset = 0) {
    const rect = element.getBoundingClientRect();
    const y = rect.top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  function gotoSection(targetId) {
    const target = document.getElementById(targetId);
    if (!target) {
      console.warn('Target no encontrado:', targetId);
      return;
    }
    scrollWithOffset(target, 0);
  }

  Object.keys(mapping).forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (!btn) {
      console.warn('Botón no encontrado en DOM:', btnId);
      return;
    }
    btn.setAttribute('type', 'button');
    btn.addEventListener('click', () => gotoSection(mapping[btnId]));
  });
});

// --- Foco ---
let focoEncendido = false;

function encenderFoco() {
  const foco = document.getElementById("imagenFoco");
  const intereses = document.getElementById("intereses");
  const zonaLuz = document.getElementById("zona-luz");

  focoEncendido = !focoEncendido;

  if (focoEncendido) {
    foco.src = "intereses/foco_encendido.png";
    foco.classList.add("encendido");
    intereses.style.backgroundColor = "#FFFACD";
    intereses.style.boxShadow = "0 0 40px #E6C20E";
    zonaLuz.classList.add("visible");
    zonaLuz.style.display = "flex";
  } else {
    foco.src = "intereses/foco_apagado.png";
    foco.classList.remove("encendido");
    intereses.style.backgroundColor = "#11238C";
    intereses.style.boxShadow = "none";
    zonaLuz.classList.remove("visible");
    zonaLuz.style.display = "none";
  }
}

// --- Activar ícono y desplazar los demás ---
function activarIcono(card) {
  // Quitar la clase activo de todos los íconos
  document.querySelectorAll('.icono-card').forEach(c => {
    c.classList.remove('activo');
  });

  // Agregar la clase activo al ícono clicado
  card.classList.add('activo');
}
