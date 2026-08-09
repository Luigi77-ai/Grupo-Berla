document.addEventListener('DOMContentLoaded', function () {

  var DIVISIONS = [
    {
      title: 'Contabilidad y Finanzas',
      subtitle: 'Números con criterio',
      desc: 'Registro impecable, estados financieros claros y lectura estratégica de los números para decidir con certeza.',
      groups: [
        { name: 'Contabilidad', items: ['Llevar libros contables', 'Preparar y emitir estados financieros', 'Analizar estados financieros', 'Medir indicadores de desempeño (KPIs)', 'Dar seguimiento a costos y gastos', 'Comparar gastos contra presupuestos (budget)'] },
        { name: 'Consultoría Financiera', items: ['Análisis financiero', 'Evaluación de rentabilidad', 'Presupuestos y proyecciones financieras', 'Control de costos y gastos', 'Análisis de flujo de caja', 'Indicadores financieros (KPIs)'] },
        { name: 'Planillas y Cumplimiento Laboral', items: ['Cálculo y elaboración de planillas', 'Cálculo de liquidaciones', 'Asesoría sobre jornadas laborales y salarios', 'Gestión de despidos, renuncias y mutuos acuerdos', 'Aplicación de medidas disciplinarias'] }
      ]
    },
    {
      title: 'Consultoría para Empresas',
      subtitle: 'Estructura, procesos y crecimiento',
      desc: 'Ordenamos la operación y diseñamos la ruta de crecimiento: estrategia, procesos, talento y control gerencial.',
      groups: ['Planeación Estratégica', 'Optimización de Procesos', 'Recursos Humanos', 'Gestión Empresarial', 'Cumplimiento Empresarial', 'Transformación Digital', 'Desarrollo de Negocios'].map(function (n) { return { name: n, items: [] }; })
    },
    {
      title: 'Consultoría para Gobierno',
      subtitle: 'Fortalecimiento institucional',
      desc: 'Acompañamos instituciones públicas en modernización, gestión por resultados, transparencia y cooperación internacional.',
      groups: ['Fortalecimiento Institucional', 'Gestión de Proyectos', 'Planificación Estratégica', 'Consultoría Financiera y Administrativa', 'Recursos Humanos', 'Transformación Digital', 'Transparencia y Gobernanza', 'Cooperación Internacional', 'Investigación y Análisis'].map(function (n) { return { name: n, items: [] }; })
    },
    {
      title: 'Marketing y Digital',
      subtitle: 'Marca, demanda y automatización',
      desc: 'Posicionamiento, publicidad medible y sistemas digitales que convierten atención en ingresos.',
      groups: ['Marketing Estratégico', 'Publicidad Digital', 'Redes Sociales', 'Diseño Web y Comercio Electrónico', 'Influencer Marketing', 'Branding y Diseño', 'Automatización e Inteligencia Artificial', 'Analítica y Optimización'].map(function (n) { return { name: n, items: [] }; })
    },
    {
      title: 'Construcción y Mantenimiento',
      subtitle: 'Obra, remodelación y logística',
      desc: 'Ejecución en sitio con supervisión profesional: construcción, remodelación, mantenimiento y transporte.',
      groups: ['Construcción', 'Remodelaciones y Reparaciones', 'Mantenimiento General', 'Transporte y Logística', 'Instalaciones Especializadas', 'Servicios Empresariales'].map(function (n) { return { name: n, items: [] }; })
    }
  ];

  var selected = {};

  function pad2(n) { return n < 10 ? '0' + n : '' + n; }

  var serviceGrid = document.getElementById('serviceGrid');
  var detailPanel = document.getElementById('serviceDetailPanel');

  function renderDetail(divIndex) {
    var div = DIVISIONS[divIndex];
    var html = '<div class="detail-header"><span class="detail-badge">División ' + pad2(divIndex + 1) + '</span><h3>' + div.title + '</h3></div>';
    html += '<p class="detail-desc">' + div.desc + '</p>';
    div.groups.forEach(function (g, i) {
      var open = i === 0 ? ' open' : '';
      html += '<div class="accordion-item' + open + '" data-index="' + i + '">';
      html += '<button type="button" class="accordion-head"><span class="accordion-num">' + pad2(i + 1) + '</span><span class="accordion-title">' + g.name + '</span><span class="accordion-toggle">+</span></button>';
      html += '<div class="accordion-body">';
      if (g.items.length) {
        html += '<ul class="accordion-list">';
        g.items.forEach(function (it) { html += '<li>' + it + '</li>'; });
        html += '</ul>';
      } else {
        html += '<ul class="accordion-list"><li>Línea de servicio incluida dentro del alcance de esta división. Escríbanos para conocer el detalle.</li></ul>';
      }
      html += '</div></div>';
    });
    detailPanel.innerHTML = html;

    detailPanel.querySelectorAll('.accordion-item').forEach(function (item) {
      item.querySelector('.accordion-head').addEventListener('click', function () {
        item.classList.toggle('open');
      });
    });
  }

  if (serviceGrid) {
    serviceGrid.querySelectorAll('.service-card').forEach(function (card) {
      card.addEventListener('click', function () {
        serviceGrid.querySelectorAll('.service-card').forEach(function (c) { c.classList.remove('is-active'); });
        card.classList.add('is-active');
        renderDetail(parseInt(card.getAttribute('data-division'), 10));
      });
    });
    renderDetail(0);
  }

  var configWrap = document.getElementById('configuratorDivisions');
  var countLines = document.getElementById('countLines');
  var countDivisions = document.getElementById('countDivisions');
  var summaryList = document.getElementById('summaryList');
  var summaryCta = document.getElementById('summaryCta');

  if (configWrap) {
    var html2 = '';
    DIVISIONS.forEach(function (div, di) {
      html2 += '<div class="division-block"><div class="division-head"><span>' + pad2(di + 1) + '</span><h3>' + div.title + '</h3></div><div class="tag-list">';
      div.groups.forEach(function (g) {
        html2 += '<button type="button" class="tag" data-division="' + di + '" data-name="' + g.name.replace(/"/g, '&quot;') + '">' + g.name + '</button>';
      });
      html2 += '</div></div>';
    });
    configWrap.innerHTML = html2;

    configWrap.querySelectorAll('.tag').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-division') + '|' + btn.getAttribute('data-name');
        if (selected[key]) { delete selected[key]; btn.classList.remove('is-selected'); }
        else { selected[key] = true; btn.classList.add('is-selected'); }
        updateSummary();
      });
    });
  }

  function updateSummary() {
    var keys = Object.keys(selected);
    var divSet = {};
    keys.forEach(function (k) { divSet[k.split('|')[0]] = true; });
    if (countLines) countLines.textContent = pad2(keys.length);
    if (countDivisions) countDivisions.textContent = pad2(Object.keys(divSet).length);

    if (summaryList) {
      if (!keys.length) {
        summaryList.innerHTML = '<li class="summary-empty">Aún no ha seleccionado líneas. Elija las que le interesen y aparecerán aquí.</li>';
      } else {
        summaryList.innerHTML = keys.map(function (k) {
          var parts = k.split('|');
          var divTitle = DIVISIONS[parseInt(parts[0], 10)].title;
          return '<li class="summary-item">' + parts[1] + ' <span style="color:var(--muted);font-size:.78rem;">' + divTitle + '</span></li>';
        }).join('');
      }
    }

    if (summaryCta) {
      var subject = 'Solicitud de propuesta - Grupo Berla';
      var bodyLines = ['Hola Grupo Berla, me gustaría recibir una propuesta para las siguientes líneas:', ''];
      keys.forEach(function (k) {
        var parts = k.split('|');
        bodyLines.push('- ' + parts[1] + ' (' + DIVISIONS[parseInt(parts[0], 10)].title + ')');
      });
      if (!keys.length) { bodyLines = ['Hola Grupo Berla, me gustaría recibir una propuesta.']; }
      var mailto = 'mailto:contacto@grupoberla.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(bodyLines.join('\n'));
      summaryCta.setAttribute('href', mailto);
    }
  }

  updateSummary();

  var revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  var statNumbers = document.querySelectorAll('.stat-number');
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 900;
    var startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      el.textContent = Math.floor(progress * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var statIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    statNumbers.forEach(function (el) { statIo.observe(el); });
  } else {
    statNumbers.forEach(animateCount);
  }

  var header = document.getElementById('siteHeader');
  var progressBar = document.getElementById('progressBar');
  function onScroll() {
    if (header) { header.classList.toggle('scrolled', window.scrollY > 10); }
    if (progressBar) {
      var doc = document.documentElement;
      var pct = (window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100;
      progressBar.style.width = (isFinite(pct) ? pct : 0) + '%';
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
    });
    mainNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mainNav.classList.remove('open'); });
    });
  }

  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(contactForm);
      var subject = 'Solicitud de contacto - ' + (data.get('nombre') || '');
      var lines = [
        'Nombre: ' + (data.get('nombre') || ''),
        'Empresa: ' + (data.get('empresa') || ''),
        'Correo: ' + (data.get('correo') || ''),
        'Teléfono: ' + (data.get('telefono') || ''),
        'División de interés: ' + (data.get('division') || ''),
        '',
        (data.get('mensaje') || '')
      ];
      window.location.href = 'mailto:contacto@grupoberla.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
    });
  }

});
