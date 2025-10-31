console.log('script cargado');

document.addEventListener('DOMContentLoaded', () => {
  const pagina = document.getElementById('pagina');

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
