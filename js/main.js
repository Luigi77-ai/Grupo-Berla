/* ==========================================================================
   GRUPO BERLA - Interacciones y datos de servicios
   ========================================================================== */
(function(){
  'use strict';

  var divisions = [
    {
      id:'consultoria',
      icon:'bx-briefcase-alt-2',
      name:'Consultoria Empresarial',
      tagline:'Contabilidad, finanzas, procesos, talento humano y estrategia para negocios que buscan crecer con orden.',
      categories:[
        { title:'Contabilidad y Finanzas', icon:'bx-calculator', items:[
          'Llevar libros contables',
          'Preparar y emitir estados financieros',
          'Analizar estados financieros',
          'Medir indicadores de desempeno (KPIs)',
          'Dar seguimiento a costos y gastos',
          'Comparar gastos contra presupuestos (budget)'
        ]},
        { title:'Recursos Humanos', icon:'bx-group', items:[
          'Gestion de despidos, renuncias y mutuos acuerdos',
          'Calculo de liquidaciones',
          'Aplicacion de medidas disciplinarias',
          'Asesoria sobre jornadas laborales y salarios',
          'Calculo y elaboracion de planillas',
          'Diseno de estructura organizacional',
          'Manuales de puestos',
          'Politicas internas',
          'Evaluacion de desempeno',
          'Procesos de contratacion',
          'Capacitacion y desarrollo'
        ]},
        { title:'Planeacion Estrategica', icon:'bx-compass', items:[
          'Desarrollo de planes estrategicos',
          'Definicion de objetivos y KPIs',
          'Creacion de planes de crecimiento',
          'Evaluacion de oportunidades de negocio',
          'Desarrollo de nuevos modelos de negocio'
        ]},
        { title:'Consultoria Financiera', icon:'bx-line-chart', items:[
          'Analisis financiero',
          'Evaluacion de rentabilidad',
          'Presupuestos y proyecciones financieras',
          'Control de costos y gastos',
          'Analisis de flujo de caja',
          'Indicadores financieros (KPIs)'
        ]},
        { title:'Optimizacion de Procesos', icon:'bx-cog', items:[
          'Diagnostico de procesos internos',
          'Estandarizacion de procedimientos',
          'Manuales de procesos',
          'Reduccion de costos operativos',
          'Mejora de productividad'
        ]},
        { title:'Gestion Empresarial', icon:'bx-briefcase', items:[
          'Creacion de indicadores de desempeno',
          'Desarrollo de dashboards gerenciales',
          'Implementacion de controles internos',
          'Gestion documental',
          'Apoyo en toma de decisiones'
        ]},
        { title:'Cumplimiento Empresarial', icon:'bx-shield-quarter', items:[
          'Revision de procesos administrativos',
          'Asesoria en cumplimiento laboral',
          'Documentacion corporativa',
          'Gestion de riesgos operativos',
          'Buenas practicas empresariales'
        ]},
        { title:'Transformacion Digital', icon:'bx-chip', items:[
          'Digitalizacion de procesos',
          'Implementacion de herramientas tecnologicas',
          'Automatizacion empresarial',
          'Integracion de software',
          'Optimizacion mediante inteligencia artificial'
        ]},
        { title:'Desarrollo de Negocios', icon:'bx-rocket', items:[
          'Estudios de viabilidad',
          'Expansion de negocios',
          'Apertura de nuevas lineas de negocio',
          'Analisis de mercado',
          'Estrategias para incrementar ingresos'
        ]}
      ]
    },
    {
      id:'marketing',
      icon:'bx-trending-up',
      name:'Marketing y Publicidad Digital',
      tagline:'Estrategia de marca, pauta digital, redes sociales, contenido y comercio electronico que convierte.',
      categories:[
        { title:'Marketing Estrategico', icon:'bx-target-lock', items:[
          'Desarrollo de estrategias de marketing',
          'Consultoria de crecimiento para empresas',
          'Posicionamiento de marca',
          'Planes de lanzamiento de productos y servicios',
          'Analisis de mercado y competencia'
        ]},
        { title:'Publicidad Digital', icon:'bx-purchase-tag', items:[
          'Administracion de campanas en Meta Ads (Facebook e Instagram)',
          'Google Ads (Search, Display y YouTube)',
          'Optimizacion de campanas y presupuesto',
          'Remarketing y generacion de leads',
          'Reportes y analisis de resultados (KPIs y ROI)'
        ]},
        { title:'Redes Sociales', icon:'bx-hash', items:[
          'Administracion de redes sociales',
          'Calendarios de contenido',
          'Creacion de Reels, TikToks y videos cortos',
          'Community Management',
          'Estrategias para aumentar alcance y engagement'
        ]},
        { title:'Diseno Web y Comercio Electronico', icon:'bx-code-alt', items:[
          'Desarrollo de sitios web corporativos',
          'Tiendas en linea con Shopify',
          'Landing Pages para generacion de clientes',
          'Optimizacion de velocidad y experiencia de usuario',
          'Integracion con formularios, CRM y herramientas de pago'
        ]},
        { title:'Influencer Marketing', icon:'bx-microphone', items:[
          'Gestion de campanas con influencers',
          'Representacion de creadores de contenido',
          'Negociacion con marcas',
          'Organizacion de colaboraciones',
          'Medicion del rendimiento de campanas'
        ]},
        { title:'Branding y Diseno', icon:'bx-palette', items:[
          'Diseno de identidad corporativa',
          'Creacion de logotipos',
          'Manuales de marca',
          'Material publicitario digital e impreso',
          'Diseno para redes sociales'
        ]},
        { title:'Automatizacion e Inteligencia Artificial', icon:'bx-bot', items:[
          'Automatizacion de procesos de marketing',
          'Implementacion de CRM',
          'Automatizacion de correos electronicos',
          'Flujos de seguimiento para clientes',
          'Integracion de herramientas de IA para optimizar ventas y atencion al cliente'
        ]},
        { title:'Analitica y Optimizacion', icon:'bx-bar-chart-alt-2', items:[
          'Dashboards personalizados',
          'Seguimiento de KPIs',
          'Analisis de campanas',
          'Optimizacion de conversiones',
          'Reportes ejecutivos para toma de decisiones'
        ]}
      ]
    },
    {
      id:'construccion',
      icon:'bx-building-house',
      name:'Construccion y Mantenimiento',
      tagline:'Obra, remodelacion, mantenimiento, logistica e instalaciones para espacios que funcionan.',
      categories:[
        { title:'Construccion', icon:'bx-building', items:[
          'Construccion de viviendas',
          'Remodelaciones residenciales y comerciales',
          'Ampliaciones de edificios y oficinas',
          'Obra gris y acabados',
          'Instalacion de pisos y revestimientos',
          'Pintura interior y exterior',
          'Construccion de muros y cercas',
          'Instalacion de techos y estructuras metalicas'
        ]},
        { title:'Remodelaciones y Reparaciones', icon:'bx-wrench', items:[
          'Remodelacion de cocinas y banos',
          'Reparacion de paredes y cielos falsos',
          'Instalacion y reparacion de puertas y ventanas',
          'Reparaciones de plomeria',
          'Reparaciones electricas',
          'Instalacion de luminarias',
          'Soldadura y trabajos metalicos',
          'Carpinteria y ebanisteria'
        ]},
        { title:'Mantenimiento General', icon:'bx-wrench', items:[
          'Mantenimiento preventivo y correctivo',
          'Mantenimiento de oficinas y comercios',
          'Reparaciones menores',
          'Limpieza post construccion',
          'Lavado a presion',
          'Mantenimiento de areas verdes',
          'Pintura de mantenimiento',
          'Inspecciones periodicas'
        ]},
        { title:'Transporte y Logistica', icon:'bx-car', items:[
          'Transporte de materiales de construccion',
          'Mudanzas residenciales y comerciales',
          'Transporte de mobiliario y equipos',
          'Servicios de carga y descarga',
          'Entregas programadas',
          'Logistica para proyectos',
          'Transporte local y nacional'
        ]},
        { title:'Instalaciones Especializadas', icon:'bx-desktop', items:[
          'Instalacion de muebles y mobiliario',
          'Instalacion de equipos',
          'Ensamble de oficinas',
          'Instalacion de estanterias',
          'Montaje de estructuras',
          'Instalacion de accesorios comerciales'
        ]},
        { title:'Servicios Empresariales', icon:'bx-store', items:[
          'Mantenimiento para oficinas',
          'Atencion a edificios corporativos',
          'Mantenimiento para bodegas e industrias',
          'Contratos de mantenimiento',
          'Gestion de proveedores',
          'Supervision de proyectos'
        ]}
      ]
    },
    {
      id:'gobierno',
      icon:'bx-landmark',
      name:'Consultoria para Gobierno',
      tagline:'Fortalecimiento institucional, gestion de proyectos y cooperacion internacional con enfoque en resultados.',
      categories:[
        { title:'Fortalecimiento Institucional', icon:'bx-buildings', items:[
          'Diagnostico organizacional',
          'Modernizacion institucional',
          'Diseno y mejora de procesos',
          'Desarrollo de manuales administrativos y operativos',
          'Reestructuracion organizacional',
          'Gestion del cambio'
        ]},
        { title:'Gestion de Proyectos', icon:'bx-task', items:[
          'Formulacion de proyectos',
          'Planificacion y ejecucion de programas',
          'Gestion basada en resultados',
          'Monitoreo y evaluacion (M&E)',
          'Administracion de cronogramas y presupuestos',
          'Gestion de riesgos'
        ]},
        { title:'Planificacion Estrategica', icon:'bx-compass', items:[
          'Elaboracion de planes estrategicos',
          'Planes operativos institucionales (POA)',
          'Definicion de indicadores (KPIs)',
          'Diseno de cuadros de mando',
          'Seguimiento al desempeno institucional'
        ]},
        { title:'Consultoria Financiera y Administrativa', icon:'bx-wallet', items:[
          'Optimizacion del uso de recursos',
          'Presupuestacion y planificacion financiera',
          'Evaluacion de costos',
          'Desarrollo de controles internos',
          'Elaboracion de informes ejecutivos'
        ]},
        { title:'Recursos Humanos', icon:'bx-group', items:[
          'Diseno de estructuras organizacionales',
          'Manuales de puestos y funciones',
          'Evaluacion del desempeno',
          'Gestion del talento',
          'Capacitacion institucional',
          'Desarrollo de competencias'
        ]},
        { title:'Transformacion Digital', icon:'bx-chip', items:[
          'Digitalizacion de procesos',
          'Automatizacion de tramites',
          'Gobierno digital',
          'Implementacion de herramientas tecnologicas',
          'Inteligencia artificial para procesos administrativos'
        ]},
        { title:'Transparencia y Gobernanza', icon:'bx-shield-alt-2', items:[
          'Fortalecimiento de mecanismos de transparencia',
          'Gestion documental',
          'Desarrollo de politicas institucionales',
          'Gestion de riesgos',
          'Buenas practicas de gobernanza'
        ]},
        { title:'Cooperacion Internacional', icon:'bx-globe', items:[
          'Formulacion de propuestas para organismos cooperantes',
          'Gestion de proyectos financiados por donantes',
          'Elaboracion de informes tecnicos',
          'Coordinacion con organismos internacionales',
          'Monitoreo y evaluacion de proyectos de cooperacion'
        ]},
        { title:'Investigacion y Analisis', icon:'bx-search-alt', items:[
          'Estudios socioeconomicos',
          'Diagnosticos sectoriales',
          'Evaluaciones de impacto',
          'Investigacion de politicas publicas',
          'Recoleccion y analisis de datos',
          'Elaboracion de informes tecnicos'
        ]}
      ]
    }
  ];

  function renderServices(){
    var nav = document.getElementById('tabsNav');
    var panels = document.getElementById('tabsPanels');
    if(!nav || !panels) return;
    nav.innerHTML = '';
    panels.innerHTML = '';

    divisions.forEach(function(div, index){
      var btn = document.createElement('button');
      btn.className = 'tab-btn' + (index === 0 ? ' active' : '');
      btn.type = 'button';
      btn.dataset.tab = div.id;
      btn.innerHTML = '<i class="bx ' + div.icon + '"></i> ' + div.name;
      nav.appendChild(btn);

      var panel = document.createElement('div');
      panel.className = 'tab-panel' + (index === 0 ? ' active' : '');
      panel.id = 'panel-' + div.id;

      var head = document.createElement('div');
      head.className = 'tab-panel-head';
      head.innerHTML = '<h3>' + div.name + '</h3><p>' + div.tagline + '</p>';
      panel.appendChild(head);

      var grid = document.createElement('div');
      grid.className = 'accordion-grid';

      div.categories.forEach(function(cat){
        var item = document.createElement('div');
        item.className = 'accordion-item';

        var header = document.createElement('button');
        header.type = 'button';
        header.className = 'accordion-header';
        header.innerHTML =
          '<span class="accordion-icon"><i class="bx ' + cat.icon + '"></i></span>' +
          '<span class="accordion-title">' + cat.title + '</span>' +
          '<i class="bx bx-chevron-down accordion-chevron"></i>';

        var body = document.createElement('div');
        body.className = 'accordion-body';
        var bodyInner = document.createElement('div');
        bodyInner.className = 'accordion-body-inner';
        var ul = document.createElement('ul');
        cat.items.forEach(function(txt){
          var li = document.createElement('li');
          li.textContent = txt;
          ul.appendChild(li);
        });
        bodyInner.appendChild(ul);
        body.appendChild(bodyInner);

        header.addEventListener('click', function(){
          var isOpen = item.classList.contains('open');
          item.classList.toggle('open', !isOpen);
          body.style.maxHeight = isOpen ? 0 : (body.scrollHeight + 'px');
        });

        item.appendChild(header);
        item.appendChild(body);
        grid.appendChild(item);
      });

      panel.appendChild(grid);
      panels.appendChild(panel);
    });
  }

  function activateTab(id){
    document.querySelectorAll('.tab-btn').forEach(function(b){
      b.classList.toggle('active', b.dataset.tab === id);
    });
    document.querySelectorAll('.tab-panel').forEach(function(p){
      p.classList.toggle('active', p.id === 'panel-' + id);
    });
  }

  function setupTabs(){
    var nav = document.getElementById('tabsNav');
    if(!nav) return;
    nav.addEventListener('click', function(e){
      var btn = e.target.closest('.tab-btn');
      if(!btn) return;
      activateTab(btn.dataset.tab);
    });
  }

  function setupDivisionLinks(){
    document.querySelectorAll('[data-target]').forEach(function(card){
      card.addEventListener('click', function(){
        var target = card.getAttribute('data-target');
        activateTab(target);
        var servicesSection = document.getElementById('servicios');
        if(servicesSection){ servicesSection.scrollIntoView({behavior:'smooth'}); }
      });
    });
    document.querySelectorAll('[data-tablink]').forEach(function(link){
      link.addEventListener('click', function(){
        activateTab(link.getAttribute('data-tablink'));
      });
    });
  }

  function setupHeaderScroll(){
    var header = document.getElementById('siteHeader');
    if(!header) return;
    function onScroll(){ header.classList.toggle('scrolled', window.scrollY > 30); }
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();
  }

  function setupNav(){
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('mainNav');
    if(!toggle || !nav) return;
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
      toggle.classList.toggle('active');
    });
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ nav.classList.remove('open'); toggle.classList.remove('active'); });
    });
  }

  function setupReveal(){
    var items = document.querySelectorAll('[data-reveal]');
    if(!items.length) return;
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold:0.15 });
    items.forEach(function(el){ observer.observe(el); });
  }

  function animateCount(el){
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1600;
    var start = null;
    function step(ts){
      if(start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if(progress < 1){ requestAnimationFrame(step); }
      else { el.textContent = target + suffix; }
    }
    requestAnimationFrame(step);
  }

  function setupCounters(){
    var stats = document.querySelectorAll('.stat-number');
    if(!stats.length) return;
    var done = false;
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting && !done){
          done = true;
          stats.forEach(animateCount);
          observer.disconnect();
        }
      });
    }, { threshold:0.4 });
    stats.forEach(function(el){ observer.observe(el); });
  }

  function setupProgressAndCursor(){
    var bar = document.getElementById('progressBar');
    var glow = document.getElementById('cursorGlow');
    function onScroll(){
      if(!bar) return;
      var h = document.documentElement;
      var scrollTop = h.scrollTop || document.body.scrollTop;
      var height = h.scrollHeight - h.clientHeight;
      var pct = height > 0 ? (scrollTop / height) * 100 : 0;
      bar.style.width = pct + '%';
    }
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();
    if(glow){
      window.addEventListener('mousemove', function(e){
        glow.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
      });
    }
  }

  function setupBackToTop(){
    var btn = document.getElementById('backToTop');
    if(!btn) return;
    window.addEventListener('scroll', function(){
      btn.classList.toggle('show', window.scrollY > 500);
    }, { passive:true });
  }

  document.addEventListener('DOMContentLoaded', function(){
    renderServices();
    setupTabs();
    setupDivisionLinks();
    setupHeaderScroll();
    setupNav();
    setupReveal();
    setupCounters();
    setupProgressAndCursor();
    setupBackToTop();
    var yearEl = document.getElementById('year');
    if(yearEl){ yearEl.textContent = new Date().getFullYear(); }
  });
})();
