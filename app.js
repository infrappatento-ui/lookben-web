/* ===== Datos de servicios (compartido) ===== */
const SERVICIOS=[
 {color:'#00558C', ic:'<svg width="30" height="30" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M24 4 L40 9 v13 c0 11-7 18-16 21-9-3-16-10-16-21V9Z"/><path d="M17 24 l5 5 9-11"/></svg>', title:'Estudio de Seguridad', intro:'El documento clave para habilitar o renovar tu local ante el Municipio.', que:'Es un informe técnico que verifica que tu local cumple las condiciones de seguridad exigidas (Ley 7467). Lo firma un profesional matriculado y se visa en COPAIPA.', incluye:['Relevamiento integral y archivo fotográfico','Evaluación de riesgo de incendio y carga de fuego','Estudio de evacuación y medios de escape','Plan de emergencia','Planos normalizados (Res. 131/09)','Firma profesional y gestión del visado COPAIPA'], para:'Todo local que recibe público y necesita habilitación nueva o renovación.', tags:['Ley 7467','Visado COPAIPA','Res. 116/12']},
 {color:'#EFA27F', ic:'<svg width="30" height="30" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M24 4c2 7 10 9 10 18a10 10 0 0 1-20 0c0-4 2-6 3-8 1 3 3 3 3 3 0-6 3-9 4-13Z"/></svg>', title:'Incendios y Bomberos', intro:'Protección contra incendios y cumplimiento de las exigencias de seguridad.', que:'Evaluamos el riesgo de incendio y determinamos las medidas necesarias, con cálculo de carga de fuego y coordinación con Bomberos cuando corresponde.', incluye:['Cálculo de carga de fuego por sector','Determinación de matafuegos (tipo y cantidad)','Verificación de medios de escape','Sistema de detección y alarma (según caso)','Certificación contra incendios','Coordinación con Bomberos'], para:'Locales que requieren certificación de incendios: gastronómicos, depósitos y con público.', tags:['Carga de fuego','Matafuegos','Anexo VII']},
 {color:'#00A79D', ic:'<svg width="30" height="30" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="20" height="36" rx="2"/><path d="M28 24h12m0 0-5-5m5 5-5 5"/></svg>', title:'Planes de Evacuación', intro:'Preparación ante emergencias para proteger a las personas.', que:'Diseñamos el plan de autoprotección y evacuación, con roles, recorridos y puntos de encuentro, y capacitamos a tu personal.', incluye:['Plan de autoprotección personalizado','Roles y brigadas de emergencia','Planos con rutas de evacuación','Señalización de emergencia','Organización de simulacros','Documentación del plan'], para:'Escuelas, salones, oficinas, gimnasios y todo local con concurrencia.', tags:['Autoprotección','Simulacros','Brigadas']},
 {color:'#00558C', ic:'<svg width="30" height="30" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 34a18 18 0 0 1 36 0Z"/><path d="M24 34 34 20"/></svg>', title:'Mediciones de Higiene', intro:'Mediciones técnicas con instrumental calibrado y protocolos oficiales.', que:'Realizamos las mediciones de agentes del ambiente laboral que exige la normativa, con protocolos oficiales.', incluye:['Medición de nivel sonoro (ruido)','Medición de iluminación','Carga térmica y ergonomía','Puesta a Tierra y continuidad (PAT)','Protocolos oficiales firmados','Recomendaciones de mejora'], para:'Locales y empresas que deben acreditar condiciones ambientales ante ART o Municipio.', tags:['Ruido','Iluminación','PAT']},
 {color:'#3B2447', ic:'<svg width="30" height="30" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="8" width="28" height="34" rx="2"/><path d="M16 16h6M26 16h6M16 24h6M26 24h6M16 32h6M26 32h6"/></svg>', title:'Servicio Externo HyS', intro:'Tu asesor de Higiene y Seguridad de forma continua.', que:'Actuamos como tu servicio externo de HyS: cumplimiento mensual, legajo técnico y relación con ART/SRT.', incluye:['Asesoría mensual permanente','Armado y mantenimiento del legajo','Gestión con ART/SRT','RGRL y relevamientos','Actualización normativa','Soporte ante inspecciones'], para:'Empresas y comercios que necesitan cumplimiento continuo sin empleado propio.', tags:['Asesoría mensual','Legajo ART/SRT']},
 {color:'#00558C', ic:'<svg width="30" height="30" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M24 10 44 18 24 26 4 18Z"/><path d="M12 22v9c0 3 5 6 12 6s12-3 12-6v-9"/><path d="M44 18v9"/></svg>', title:'Capacitaciones', intro:'Formación práctica para actuar ante emergencias.', que:'Dictamos capacitaciones obligatorias y prácticas, con constancias para tu legajo y cumplimiento ante ART.', incluye:['Uso de extintores (práctico)','Procedimientos de evacuación','Primeros auxilios básicos','Prevención de riesgos del puesto','Respuesta ante emergencias','Constancias para el legajo'], para:'Todo local o empresa con personal que deba cumplir capacitaciones obligatorias.', tags:['Extintores','Evacuación','Emergencias']},
];
let lastFocusedElement=null;
function openModal(i){
 const s=SERVICIOS[i], overlay=document.getElementById('modalOv');
 if(!s||!overlay)return;
 lastFocusedElement=document.activeElement;
 document.getElementById('modalHead').style.background='linear-gradient(135deg,'+s.color+' 0%, #2c2551 120%)';
 document.getElementById('modalIc').innerHTML=s.ic;
 document.getElementById('modalTitle').textContent=s.title;
 document.getElementById('modalIntro').textContent=s.intro;
 let h='<h4>¿Qué es?</h4><p>'+s.que+'</p><h4>Qué incluye</h4><ul>'+s.incluye.map(x=>'<li>'+x+'</li>').join('')+'</ul><h4>¿Para quién es?</h4><p>'+s.para+'</p>';
 h+='<div class="modal-tags">'+s.tags.map(t=>'<span>'+t+'</span>').join('')+'</div>';
 const wa='https://wa.me/5493624313645?text='+encodeURIComponent('Hola LOOKBEN! Quiero consultar por el servicio de '+s.title+'.');
 h+='<div class="modal-cta"><a href="'+wa+'" class="btn btn-wa" target="_blank" rel="noopener">Consultar por este servicio</a></div>';
 document.getElementById('modalBody').innerHTML=h;
 overlay.classList.add('open'); overlay.setAttribute('aria-hidden','false');
 document.body.style.overflow='hidden';
 overlay.querySelector('.modal-close')?.focus();
}
function closeModal(){
 const overlay=document.getElementById('modalOv');
 if(!overlay||!overlay.classList.contains('open'))return;
 overlay.classList.remove('open'); overlay.setAttribute('aria-hidden','true');
 document.body.style.overflow='';
 if(lastFocusedElement?.focus)lastFocusedElement.focus();
}
document.addEventListener('keydown',e=>{
 if(e.key==='Escape')closeModal();
 const overlay=document.getElementById('modalOv');
 if(e.key==='Tab'&&overlay?.classList.contains('open')){
  const nodes=overlay.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])');
  if(!nodes.length)return;
  const first=nodes[0],last=nodes[nodes.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
 }
});
function tog(el){
 if(!el)return;
 const checked=el.classList.toggle('checked');
 el.setAttribute('aria-checked',String(checked)); updateChk();
}
function updateChk(){
 const items=document.querySelectorAll('.chk-item'); if(!items.length)return;
 const total=items.length,done=document.querySelectorAll('.chk-item.checked').length;
 const pct=Math.round(done/total*100);
 const pctNode=document.getElementById('chkPct'),fill=document.getElementById('chkFill');
 if(pctNode)pctNode.textContent=pct;
 if(fill)fill.style.width=pct+'%';
 const msg=document.getElementById('chkMsg'),cta=document.getElementById('chkCta');
 let m;
 if(pct===0)m='Marcá los aspectos que identificás en tu establecimiento para obtener una referencia inicial.';
 else if(pct<50)m='Hay varios aspectos que conviene revisar. Un profesional puede evaluar cuáles aplican a tu actividad y qué medidas corresponden.';
 else if(pct<100)m='La lista muestra algunos aspectos presentes, pero no determina el cumplimiento normativo. Consultá para evaluar los puntos pendientes y los requisitos de tu caso.';
 else m='Marcaste todos los puntos de esta lista. Esto no significa que el establecimiento cumpla la normativa ni reemplaza una evaluación profesional.';
 if(msg)msg.textContent=m;
 if(cta)cta.href='https://wa.me/5493624313645?text='+encodeURIComponent('Hola LOOKBEN! Completé la autoevaluación orientativa y quiero consultar mi caso.');
}
function enviarWA(e){
 e.preventDefault();
 const n=document.getElementById('f_nombre')?.value.trim()||'';
 const r=document.getElementById('f_rubro')?.value||'';
 const loc=document.getElementById('f_localidad')?.value.trim()||'';
 const prov=document.getElementById('f_provincia')?.value.trim()||'';
 const s=document.getElementById('f_sup')?.value.trim()||'';
 const m=document.getElementById('f_msg')?.value.trim()||'';
 let t='Hola LOOKBEN. Soy '+n+'. Mi actividad es: '+r+'. Localidad: '+loc+'. Provincia: '+prov+'.';
 if(s)t+=' Superficie aproximada: '+s+'.';
 t+=m?' Consulta: '+m:' Quisiera recibir orientación sobre los servicios de Higiene y Seguridad.';
 window.open('https://wa.me/5493624313645?text='+encodeURIComponent(t),'_blank','noopener');
 return false;
}
function toggleMenu(){
 const nl=document.getElementById('navlinks'),btn=document.querySelector('.burger');
 if(!nl||!btn)return;
 const open=nl.classList.toggle('open');
 btn.setAttribute('aria-expanded',String(open));
 btn.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');
}
document.addEventListener('DOMContentLoaded',()=>{
 const nl=document.getElementById('navlinks');
 if(nl)nl.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nl.classList.remove('open');
  const btn=document.querySelector('.burger');
  if(btn){btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Abrir menú');}
 }));
 document.querySelectorAll('.modal-ov').forEach(el=>el.setAttribute('aria-hidden','true'));
 updateChk();
});


/* LOOKBEN v2 — aparición progresiva sobria al recorrer la página */
document.addEventListener('DOMContentLoaded',()=>{
  const reduceMotion=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion || !('IntersectionObserver' in window)) return;
  const targets=[
    '.section > .container.center',
    '.serv-grid .scard',
    '.serv-mini .mcard',
    '.miniflow .mstep',
    '.why-grid .wcard',
    '.flow .fstep',
    '.estudio-grid .ecard',
    '.legal-grid .lcard',
    '.oficiales-grid .ocard',
    '.faq .qitem',
    '.tram-grid > *',
    '.contact-grid > *',
    '.ctaband .container'
  ];
  const nodes=[...new Set(targets.flatMap(selector=>Array.from(document.querySelectorAll(selector))))];
  if(!nodes.length) return;
  document.documentElement.classList.add('reveal-ready');
  nodes.forEach((node,index)=>{
    node.setAttribute('data-reveal','child');
    node.style.setProperty('--reveal-delay',`${Math.min(index%5,4)*75}ms`);
  });
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.12,rootMargin:'0px 0px -35px 0px'});
  nodes.forEach(node=>observer.observe(node));
});
