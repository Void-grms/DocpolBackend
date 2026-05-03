// Motor de renderizado de documentos policiales
// Genera HTML con formato PNP a partir de la plantilla + datos del formulario

const DERECHOS_IMPUTADO = [
  'Conocer los cargos formulados en su contra y, en caso de detención, a que se le exprese la causa o motivo de dicha medida.',
  'Designar a la persona o institución a la que debe comunicarse su detención y que dicha comunicación se haga en forma inmediata.',
  'Ser asistido desde los actos iniciales de investigación por un Abogado Defensor.',
  'Abstenerse de declarar; y si acepta hacerlo, a que su abogado defensor esté presente.',
  'Que no se emplee en su contra medios coactivos, intimidatorios o contrarios a su dignidad.',
  'Ser examinado por un médico legista o en su defecto por otro profesional de la salud.',
];

const DERECHOS_DETENIDO = [
  'A que se presuma su inocencia.',
  'A ser examinado por un médico legista o quien haga sus veces.',
  'A que se respete su integridad física y psíquica.',
  'A ser asesorado por un abogado defensor.',
  'A ser informado de la causa de su detención.',
  'A comunicarse con su familia o un abogado u otra persona de su elección.',
];

function formatFecha(isoStr) {
  if (!isoStr) return '_______________';
  const d = new Date(isoStr);
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  return `${d.getDate()} de ${meses[d.getMonth()]} del ${d.getFullYear()}`;
}

function formatHora(isoStr) {
  if (!isoStr) return '______';
  const d = new Date(isoStr);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

function generarEncabezado(dependencia, siglas) {
  return `
    <div style="text-align:center; margin-bottom:8px;">
      <div style="font-family:Arial; font-size:10pt; font-weight:bold;">POLICÍA NACIONAL DEL PERÚ</div>
      <div style="font-family:Arial; font-size:8.5pt;">${dependencia || '______________________________'}</div>
    </div>
  `;
}

function renderActaDetencion(datos, config) {
  const d = datos;
  return `
    ${generarEncabezado(config.dependencia, config.siglas)}
    <div style="text-align:center; margin:16px 0;">
      <div style="font-family:Impact; font-size:16pt; text-decoration:underline;">
        ACTA DE DETENCIÓN N° ${config.numero || '________'}-${config.anio}-${config.siglas || '________'}
      </div>
    </div>
    <div style="font-family:Arial; font-size:12pt; text-align:justify; line-height:1.8;">
      <p>En la ciudad de <b>${d.ciudad || '________'}</b>, siendo las <b>${formatHora(d.fechaHora)}</b> horas del día <b>${formatFecha(d.fechaHora)}</b>, en el lugar ubicado en <b>${d.lugar || '________'}</b>; presente la persona de <b>${d.nombreDetenido || '________'}</b> con <b>${d.edadDetenido || '____'}</b> años de edad, se le notifica que se encuentra <b>DETENIDO</b> en flagrante delito de <b>${d.delito || '________'}</b>, en agravio de <b>${d.agraviado || '________'}</b>${d.edadAgraviado ? ` (${d.edadAgraviado} años)` : ''}, hecho ocurrido el <b>${formatFecha(d.fechaHoraHechos || d.fechaHora)}</b> a horas <b>${d.horaHechos || formatHora(d.fechaHora)}</b> en <b>${d.lugarHechos || d.lugar || '________'}</b>.</p>

      <p style="margin-top:12px;"><b>DERECHOS QUE SE LEEN (Art. 71.2 CPP):</b></p>
      <ol style="margin-left:20px;">
        ${DERECHOS_IMPUTADO.map(der => `<li style="margin-bottom:6px;">${der}</li>`).join('')}
      </ol>

      <p style="margin-top:16px;"><b>TIENE DERECHO A:</b></p>
      <ul style="margin-left:20px;">
        ${DERECHOS_DETENIDO.map(der => `<li style="margin-bottom:4px;">${der}</li>`).join('')}
      </ul>
    </div>
    <div style="margin-top:40px; display:flex; justify-content:space-between; font-family:Arial; font-size:12pt;">
      <div style="text-align:center; width:45%;">
        <div style="border-top:1px solid black; padding-top:4px;">ENTERADO</div>
        <div>DNI N° ${d.dniDetenido || '________'}</div>
      </div>
      <div style="text-align:center; width:45%;">
        <div style="border-top:1px solid black; padding-top:4px;">POLICÍA INTERVINIENTE</div>
      </div>
    </div>
  `;
}

function renderActaIntervencion(datos, config) {
  const d = datos;
  return `
    ${generarEncabezado(config.dependencia, config.siglas)}
    <div style="text-align:center; margin:16px 0;">
      <div style="font-family:Impact; font-size:16pt; text-decoration:underline;">
        ACTA DE INTERVENCIÓN POLICIAL N° ${config.numero || '________'}-${config.anio}-${config.siglas || '________'}
      </div>
    </div>
    <div style="font-family:Arial; font-size:12pt; text-align:justify; line-height:1.8;">
      <p>En la ciudad de <b>${d.ciudad || '________'}</b>, siendo las <b>${formatHora(d.fechaHora)}</b> horas del día <b>${formatFecha(d.fechaHora)}</b>, en <b>${d.lugar || '________'}</b>; el suscrito instructor procedió a intervenir a la persona de:</p>

      <p style="margin:8px 0;"><b>INTERVENIDO:</b> ${d.nombreIntervenido || '________'}, identificado con DNI N° ${d.dniIntervenido || '________'}, de ${d.edadIntervenido || '____'} años de edad, domiciliado en ${d.domicilioIntervenido || '________'}.</p>

      <p><b>MOTIVO DE LA INTERVENCIÓN:</b> ${d.motivoIntervencion || '________'}</p>
      <p><b>CIRCUNSTANCIAS:</b> ${d.circunstancias || '________'}</p>

      ${d.actasAdjuntas ? `<p><b>ACTAS ADJUNTAS:</b> ${d.actasAdjuntas}</p>` : ''}

      <p style="margin-top:12px;"><b>DERECHOS DEL INTERVENIDO (Art. 71° CPP):</b></p>
      <ol style="margin-left:20px;">
        ${DERECHOS_IMPUTADO.map(der => `<li style="margin-bottom:4px;">${der}</li>`).join('')}
      </ol>
    </div>
    <div style="margin-top:40px; display:flex; justify-content:space-between; font-family:Arial; font-size:12pt;">
      <div style="text-align:center; width:45%;"><div style="border-top:1px solid black; padding-top:4px;">PERSONAL PNP</div></div>
      <div style="text-align:center; width:45%;"><div style="border-top:1px solid black; padding-top:4px;">EL INTERVENIDO</div></div>
    </div>
  `;
}

function renderGenerico(datos, config, plantilla) {
  const d = datos;
  const nombre = plantilla.nombre.toUpperCase();
  let cuerpo = '';

  for (const campo of plantilla.campos) {
    const valor = d[campo.key];
    if (valor && campo.type === 'textarea') {
      cuerpo += `<p><b>${campo.label}:</b> ${valor}</p>`;
    } else if (valor) {
      cuerpo += `<p><b>${campo.label}:</b> ${valor}</p>`;
    }
  }

  return `
    ${generarEncabezado(config.dependencia, config.siglas)}
    <div style="text-align:center; margin:16px 0;">
      <div style="font-family:Impact; font-size:16pt; text-decoration:underline;">
        ${nombre} N° ${config.numero || '________'}-${config.anio}-${config.siglas || '________'}
      </div>
    </div>
    <div style="font-family:Arial; font-size:12pt; text-align:justify; line-height:1.8;">
      ${cuerpo}
    </div>
    <div style="margin-top:40px; text-align:right; font-family:Arial; font-size:12pt;">
      <p>${config.lugar || '________'}, ${formatFecha(new Date().toISOString())}</p>
    </div>
    <div style="margin-top:40px; display:flex; justify-content:space-between; font-family:Arial; font-size:12pt;">
      <div style="text-align:center; width:45%;"><div style="border-top:1px solid black; padding-top:4px;">EL INSTRUCTOR</div></div>
      <div style="text-align:center; width:45%;"><div style="border-top:1px solid black; padding-top:4px;">EL INTERESADO</div></div>
    </div>
  `;
}

// Render principal
function renderDocumento(tipoId, datos, config, plantilla) {
  const anio = config.anio || new Date().getFullYear();
  const cfg = { ...config, anio };

  switch (tipoId) {
    case 5:  return renderActaDetencion(datos, cfg);
    case 12: return renderActaIntervencion(datos, cfg);
    default: return renderGenerico(datos, cfg, plantilla);
  }
}

module.exports = { renderDocumento };
