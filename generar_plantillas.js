// Archivo temporal para compilar los esquemas antes de sobreescribir index.js

const comunesPersona = [
  { key: 'edad', label: 'Edad', type: 'number', required: true },
  { key: 'naturalDe', label: 'Natural de', type: 'text', required: true },
  { key: 'estadoCivil', label: 'Estado civil', type: 'select', options: ['Soltero/a', 'Casado/a', 'Viudo/a', 'Divorciado/a', 'Conviviente'], required: true },
  { key: 'ocupacion', label: 'Ocupación', type: 'text', required: true },
  { key: 'instruccion', label: 'Grado de instrucción', type: 'text', required: true },
  { key: 'dni', label: 'DNI', type: 'text', required: true },
  { key: 'domicilio', label: 'Domicilio', type: 'text', required: true }
];

const comunesInstructor = [
  { key: 'instructorNombre', label: 'Nombre del Instructor (Grado/Nombres)', type: 'text', required: true },
  { key: 'instructorCIP', label: 'CIP', type: 'text', required: true },
  { key: 'instructorUnidad', label: 'Unidad', type: 'text', required: true }
];

const f02 = {
  id: 2, nombre: 'Acta de Aislamiento de Persona', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'lugar', label: 'Lugar de aislamiento', type: 'text', required: true },
    { key: 'nombreAislado', label: 'Nombre del aislado', type: 'text', required: true },
    ...comunesPersona.map(c => ({...c, key: c.key + 'Aislado'})),
    { key: 'nombreRMP', label: 'Representante del Ministerio Público (RMP)', type: 'text', required: true },
    { key: 'detallesDiligencia', label: 'Detalles de la diligencia', type: 'textarea', required: true },
    { key: 'abogadoDefensor', label: 'Abogado Defensor', type: 'text', required: false }
  ]
};

const f03 = {
  id: 3, nombre: 'Acta de Allanamiento y Registro', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'meritoDe', label: 'En mérito de', type: 'select', options: ['Flagrancia de delito', 'Peligro de inminencia', 'Disposición Fiscal', 'Resolución Judicial'], required: true },
    { key: 'nroAutorizacion', label: 'N° de Autorización (Fiscal/Judicial)', type: 'text', required: false },
    { key: 'fechaAutorizacion', label: 'Fecha de autorización', type: 'date', required: false },
    { key: 'diligenciaReservada', label: 'Diligencia reservada', type: 'select', options: ['SI', 'NO'], required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    ...comunesInstructor,
    { key: 'lugarAllanamiento', label: 'Lugar del allanamiento', type: 'textarea', required: true },
    { key: 'nombreIntervenido', label: 'Nombre del intervenido', type: 'text', required: true },
    { key: 'dniIntervenido', label: 'DNI del intervenido', type: 'text', required: true },
    { key: 'condicionIntervenido', label: 'Condición', type: 'select', options: ['Propietario', 'Inquilino', 'Morador transitorio', 'Otros'], required: true },
    { key: 'finalidad', label: 'Finalidad', type: 'textarea', required: true },
    { key: 'ambientesRegistrados', label: 'Ambientes registrados', type: 'textarea', required: true },
    { key: 'personasDetenidas', label: 'Personas detenidas/retenidas', type: 'textarea', required: true },
    { key: 'bienesDelictivos', label: 'Bienes delictivos / relevantes', type: 'textarea', required: true },
    { key: 'carpetaFiscal', label: 'Código de carpeta Fiscal', type: 'text', required: false },
    { key: 'registroPersonal', label: 'Registro personal (nombres, bienes)', type: 'textarea', required: true },
    { key: 'testigos', label: 'Testigos presentes', type: 'textarea', required: true },
    { key: 'custodia', label: 'Responsables de custodia', type: 'textarea', required: true },
    { key: 'observaciones', label: 'Observaciones', type: 'textarea', required: false }
  ]
};

const f04 = {
  id: 4, nombre: 'Acta de Cadena de Custodia', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'evidencia', label: 'Evidencia levantada', type: 'textarea', required: true },
    { key: 'especie', label: 'Especie consistente', type: 'textarea', required: true },
    { key: 'fechaHoraLevantamiento', label: 'Fecha y hora del levantamiento', type: 'datetime-local', required: true },
    { key: 'ocurrenciaPolicial', label: 'N° de Ocurrencia Policial', type: 'text', required: true },
    { key: 'tipoDelito', label: 'Tipo de Delito', type: 'text', required: true },
    { key: 'efectivoLevanta', label: 'Efectivo que levanta (Grado/Nombres)', type: 'text', required: true },
    { key: 'unidadPolicial', label: 'Unidad Policial', type: 'text', required: true },
    { key: 'lugar', label: 'Lugar', type: 'text', required: true },
    { key: 'observaciones', label: 'Observaciones', type: 'textarea', required: false },
    { key: 'traslados', label: 'Detalle de traslados', type: 'textarea', required: true, placeholder: 'Entregado por... Recibido por... Motivo...' }
  ]
};

const f05 = {
  id: 5, nombre: 'Acta de Detención', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'distrito', label: 'Distrito', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'lugar', label: 'Lugar ubicado en', type: 'text', required: true },
    { key: 'nombreDetenido', label: 'Nombre del detenido', type: 'text', required: true },
    ...comunesPersona.map(c => ({...c, key: c.key + 'Detenido'})),
    { key: 'motivoDetencion', label: 'Motivo de detención (Hechos)', type: 'textarea', required: true }
  ]
};

const f06 = {
  id: 6, nombre: 'Acta de Entrega y Recepción', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'distrito', label: 'Distrito', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'lugar', label: 'Sito en', type: 'text', required: true },
    ...comunesInstructor,
    { key: 'nombreImputado', label: 'Nombre del Imputado', type: 'text', required: true },
    ...comunesPersona.map(c => ({...c, key: c.key + 'Imputado'})),
    { key: 'circunstancias', label: 'Circunstancias', type: 'textarea', required: true },
    { key: 'especies', label: 'Especies recibidas', type: 'textarea', required: true }
  ]
};

const f07 = {
  id: 7, nombre: 'Acta de Hallazgo y Recojo', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'distrito', label: 'Distrito', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'lugar', label: 'Sito en', type: 'text', required: true },
    ...comunesInstructor,
    { key: 'nombreTestigo', label: 'Nombre del Imputado/Testigo', type: 'text', required: true },
    ...comunesPersona.map(c => ({...c, key: c.key + 'Testigo'})),
    { key: 'circunstancias', label: 'Circunstancias', type: 'textarea', required: true },
    { key: 'especies', label: 'Especies recogidas', type: 'textarea', required: true }
  ]
};

const f08 = {
  id: 8, nombre: 'Acta de Incautación', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'distrito', label: 'Distrito', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'lugar', label: 'Sito en', type: 'text', required: true },
    ...comunesInstructor,
    { key: 'nombreImputado', label: 'Nombre del Imputado', type: 'text', required: true },
    ...comunesPersona.map(c => ({...c, key: c.key + 'Imputado'})),
    { key: 'circunstancias', label: 'Circunstancias', type: 'textarea', required: true },
    { key: 'especies', label: 'Especies incautadas', type: 'textarea', required: true }
  ]
};

const f09 = {
  id: 9, nombre: 'Acta de Información de Derechos (Víctima/Testigo)', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'nombreInformado', label: 'Se informa a (Nombres)', type: 'text', required: true },
    { key: 'dniInformado', label: 'DNI', type: 'text', required: true }
  ]
};

const f10 = {
  id: 10, nombre: 'Acta de Ingreso, Aislamiento y Traslado del Reconocedor', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'dependencia', label: 'Dependencia / DEPINCRI', type: 'text', required: true },
    { key: 'nombreReconocedor', label: 'Nombre del reconocedor', type: 'text', required: true },
    { key: 'ocupacionReconocedor', label: 'Ocupación', type: 'text', required: true },
    { key: 'padresReconocedor', label: 'Hijo de', type: 'text', required: true },
    { key: 'dniReconocedor', label: 'DNI', type: 'text', required: true },
    { key: 'domicilioReconocedor', label: 'Domicilio', type: 'text', required: true },
    { key: 'calidadReconocedor', label: 'En su calidad de', type: 'text', required: true },
    { key: 'nombreProteccion', label: 'Efectivo PNP de protección', type: 'text', required: true },
    { key: 'nombreRMP', label: 'Representante Ministerio Público', type: 'text', required: true },
    { key: 'nombreAbogado', label: 'Nombre del Abogado', type: 'text', required: true },
    { key: 'diligencia', label: 'Diligencia a llevarse a cabo', type: 'textarea', required: true }
  ]
};

const f11 = {
  id: 11, nombre: 'Acta de Inmovilización', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'distrito', label: 'Distrito', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'lugar', label: 'Lugar ubicado en', type: 'text', required: true },
    { key: 'nombreImputado', label: 'Nombre del Imputado o Testigo', type: 'text', required: true },
    ...comunesPersona.map(c => ({...c, key: c.key + 'Imputado'})),
    { key: 'especies', label: 'Bienes a inmovilizar y custodio', type: 'textarea', required: true }
  ]
};

const f12 = {
  id: 12, nombre: 'Acta de Intervención Policial', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'lugar', label: 'Lugar ubicado en', type: 'text', required: true },
    { key: 'nombreIntervenido', label: 'Nombre del intervenido', type: 'text', required: true },
    ...comunesPersona.map(c => ({...c, key: c.key + 'Intervenido'})),
    { key: 'motivoIntervencion', label: 'Motivo de la intervención', type: 'textarea', required: true },
    { key: 'actasAdjuntas', label: 'Actas adjuntas (separar con coma)', type: 'textarea', required: true }
  ]
};

const f13 = {
  id: 13, nombre: 'Acta de Lacrado', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'distrito', label: 'Distrito', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'lugar', label: 'Lugar ubicado en', type: 'text', required: true },
    { key: 'nombreImputado', label: 'Nombre del Imputado/Testigo', type: 'text', required: true },
    ...comunesPersona.map(c => ({...c, key: c.key + 'Imputado'})),
    { key: 'padres', label: 'Hijo de', type: 'text', required: true },
    { key: 'detallesLacrado', label: 'Detalles (especie, embalaje, lacrado)', type: 'textarea', required: true }
  ]
};

const f14 = {
  id: 14, nombre: 'Acta de Lectura de Derechos del Imputado', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'lugar', label: 'Lugar', type: 'text', required: true },
    { key: 'nombreImputado', label: 'Nombre del Imputado', type: 'text', required: true },
    ...comunesPersona.map(c => ({...c, key: c.key + 'Imputado'})),
    { key: 'comunicarA', label: 'Comunicar detención a (Nombres)', type: 'text', required: false },
    { key: 'comunicarParentesco', label: 'Parentesco', type: 'text', required: false },
    { key: 'comunicarTelefono', label: 'Teléfono', type: 'text', required: false },
    { key: 'idioma', label: 'Idioma del intérprete', type: 'text', required: false },
    { key: 'abogadoNombre', label: 'Abogado Defensor', type: 'text', required: false },
    { key: 'abogadoTelefono', label: 'Teléfono del Abogado', type: 'text', required: false },
    { key: 'abogadoOficio', label: '¿Abogado de oficio?', type: 'select', options: ['SI', 'NO'], required: true },
    { key: 'medico', label: '¿Examen Médico?', type: 'select', options: ['SI', 'NO'], required: true }
  ]
};

const f15 = {
  id: 15, nombre: 'Acta de Lectura de Obligaciones del Testigo', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'nombreTestigo', label: 'Nombre del Testigo', type: 'text', required: true },
    { key: 'dniTestigo', label: 'DNI', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'dependencia', label: 'Dependencia Policial', type: 'text', required: true },
    { key: 'nombreInstructor', label: 'Nombre del Instructor', type: 'text', required: true }
  ]
};

const f16 = {
  id: 16, nombre: 'Acta de Levantamiento de Cadáver', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'fiscalia', label: 'Fiscalía de Turno que autoriza', type: 'text', required: true },
    { key: 'nombreFiscal', label: 'Nombre del Fiscal', type: 'text', required: true },
    { key: 'nombreInstructor', label: 'Nombre del Instructor', type: 'text', required: true },
    { key: 'medicoLegista', label: 'Médico Legista', type: 'text', required: true },
    { key: 'efectivos', label: 'Efectivos intervinientes', type: 'text', required: true },
    { key: 'lugarExacto', label: 'Lugar exacto', type: 'text', required: true },
    { key: 'nombreOcciso', label: 'Nombre del occiso', type: 'text', required: true },
    { key: 'edadOcciso', label: 'Edad aproximada', type: 'text', required: true },
    { key: 'pertenencias', label: 'Detalle de pertenencias', type: 'textarea', required: true },
    { key: 'descripcionCadaver', label: 'Descripción (Posición, Ubicación, Ropa)', type: 'textarea', required: true },
    { key: 'signosViolencia', label: 'Signos de violencia', type: 'textarea', required: true },
    { key: 'registroPersonal', label: 'Registro personal', type: 'textarea', required: true },
    { key: 'evidencias', label: 'Cuadro de Evidencias (Vestigios, armas, etc)', type: 'textarea', required: true },
    { key: 'diagnosticoMuerte', label: 'Diagnóstico Presuntivo de Muerte', type: 'textarea', required: true },
    { key: 'tiempoMuerte', label: 'Tiempo aproximado de muerte', type: 'text', required: true },
    { key: 'justificacion', label: 'Justificación del requerimiento de necropsia', type: 'textarea', required: true },
    { key: 'traslado', label: 'Traslado por / hacia', type: 'text', required: true }
  ]
};

const f17 = {
  id: 17, nombre: 'Acta de Llegada a la Escena del Delito', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'lugar', label: 'Lugar de la escena', type: 'text', required: true },
    { key: 'personalLlega', label: 'Personal que llegó a la escena', type: 'text', required: true },
    { key: 'motivoLlegada', label: 'Conocimiento por / Orden de', type: 'text', required: true },
    { key: 'violencia', label: 'Signos de violencia (descripción)', type: 'textarea', required: true },
    { key: 'cuerpos', label: 'Hallazgo de cuerpos (descripción)', type: 'textarea', required: true },
    { key: 'heridos', label: 'Hallazgo de heridos (nombres, evacuación)', type: 'textarea', required: true },
    { key: 'indicios', label: 'Detalle de indicios / evidencias', type: 'textarea', required: true },
    { key: 'testigos', label: 'Testigos presentes', type: 'textarea', required: true },
    { key: 'perennizacion', label: 'Acciones de perennización', type: 'textarea', required: true },
    { key: 'aislamiento', label: 'Medios de aislamiento', type: 'text', required: true },
    { key: 'llegadaEspecializada', label: 'Llegada de personal especializado / Fiscal', type: 'textarea', required: true },
    { key: 'entregaActa', label: 'Entrega del acta a', type: 'text', required: true },
    { key: 'anexos', label: 'Anexos / Observaciones', type: 'textarea', required: false }
  ]
};

const f18 = {
  id: 18, nombre: 'Acta de Recepción de Persona por Arresto Ciudadano', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'dependencia', label: 'Dependencia Policial', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'nombreAprehensor', label: 'Nombre del Aprehensor', type: 'text', required: true },
    { key: 'relacionArrestado', label: 'Relación con el arrestado', type: 'text', required: true },
    { key: 'dniAprehensor', label: 'DNI Aprehensor', type: 'text', required: true },
    { key: 'direccionAprehensor', label: 'Dirección Aprehensor', type: 'text', required: true },
    { key: 'nombreArrestado', label: 'Nombre del Arrestado', type: 'text', required: true },
    { key: 'dniArrestado', label: 'DNI Arrestado', type: 'text', required: true },
    { key: 'direccionArrestado', label: 'Dirección Arrestado', type: 'text', required: true },
    { key: 'datosArresto', label: 'Lugar y motivos del arresto', type: 'textarea', required: true },
    { key: 'victimas', label: 'Datos de víctimas/testigos', type: 'textarea', required: true },
    { key: 'lesiones', label: 'Constatación de lesiones', type: 'textarea', required: true },
    { key: 'evidencias', label: 'Efectos personales y evidencias', type: 'textarea', required: true },
    { key: 'personalRecibe', label: 'Datos del policía que recibe', type: 'text', required: true }
  ]
};

const f19 = {
  id: 19, nombre: 'Acta de Recepción de Denuncia Verbal', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'oficina', label: 'Oficinas de', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'nombreDenunciante', label: 'Nombre del Denunciante', type: 'text', required: true },
    ...comunesPersona.map(c => ({...c, key: c.key + 'Denunciante'})),
    { key: 'hechos', label: 'Descripción de los hechos', type: 'textarea', required: true },
    { key: 'autor', label: 'Presunto autor', type: 'textarea', required: false },
    { key: 'testigos', label: 'Testigos', type: 'textarea', required: false }
  ]
};

const f20 = {
  id: 20, nombre: 'Acta de Reconocimiento Físico/Fotográfico', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'grupoTurno', label: 'Grupo de Turno', type: 'text', required: true },
    { key: 'autorizacionFiscal', label: 'Fecha y Autoridad Fiscal', type: 'text', required: true },
    ...comunesInstructor,
    { key: 'presenciaDe', label: 'En presencia de (Fiscal, Abogado)', type: 'textarea', required: true },
    { key: 'tipoReconocimiento', label: 'Tipo de Reconocimiento', type: 'select', options: ['Físico', 'Fotográfico', 'Voces', 'Sonidos'], required: true },
    { key: 'tipoTestigo', label: 'Condición del Reconocedor', type: 'select', options: ['TESTIGO', 'VICTIMA'], required: true },
    { key: 'nombreTestigo', label: 'Nombre del Reconocedor', type: 'text', required: true },
    { key: 'dniTestigo', label: 'DNI', type: 'text', required: true },
    { key: 'descripcionPrevia', label: 'Descripción previa de la persona', type: 'textarea', required: true },
    { key: 'personasPresentadas', label: 'Personas o imágenes presentadas', type: 'textarea', required: true },
    { key: 'resultados', label: 'Resultados del reconocimiento', type: 'textarea', required: true }
  ]
};

const f21 = {
  id: 21, nombre: 'Acta de Registro de Bienes Muebles o Inmuebles e Incautación', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'distrito', label: 'Distrito', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'lugar', label: 'Sito en', type: 'text', required: true },
    ...comunesInstructor,
    { key: 'nombreImputado', label: 'Nombre del Imputado', type: 'text', required: true },
    ...comunesPersona.map(c => ({...c, key: c.key + 'Imputado'})),
    { key: 'inmueble', label: 'Inmueble / Bien registrado', type: 'text', required: true },
    { key: 'circunstancias', label: 'Circunstancias', type: 'textarea', required: true },
    { key: 'especies', label: 'Especies incautadas', type: 'textarea', required: true }
  ]
};

const f22 = {
  id: 22, nombre: 'Acta de Registro de Equipaje e Incautación', grupo: 'A', categoria: 'Acta',
  campos: f21.campos
};

const f23 = {
  id: 23, nombre: 'Acta de Registro y Verificación Domiciliaria', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'lugar', label: 'Vivienda sito en', type: 'text', required: true },
    { key: 'nombreImputado', label: 'Propiedad de', type: 'text', required: true },
    ...comunesPersona.map(c => ({...c, key: c.key + 'Imputado'})),
    { key: 'nombreRMP', label: 'Nombre del RMP', type: 'text', required: true },
    { key: 'drogas', label: 'Para Drogas', type: 'text', required: true },
    { key: 'armas', label: 'Para Armas / Insumos', type: 'text', required: true },
    { key: 'evidencias', label: 'Evidencias incriminatorias', type: 'textarea', required: true },
    { key: 'carpetaFiscal', label: 'Carpeta Fiscal / Prioridad', type: 'text', required: false }
  ]
};

const f24 = {
  id: 24, nombre: 'Acta de Registro Personal e Incautación', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'lugar', label: 'Lugar ubicado en', type: 'text', required: true },
    { key: 'nombreImputado', label: 'Nombre del Imputado', type: 'text', required: true },
    ...comunesPersona.map(c => ({...c, key: c.key + 'Imputado'})),
    { key: 'resultado', label: 'Resultado del registro (especies)', type: 'textarea', required: true },
    { key: 'observaciones', label: 'Observaciones', type: 'textarea', required: false }
  ]
};

const f25 = {
  id: 25, nombre: 'Acta de Registro de Vehículo e Incautación', grupo: 'A', categoria: 'Acta',
  campos: [
    { key: 'ciudad', label: 'Ciudad', type: 'text', required: true },
    { key: 'distrito', label: 'Distrito', type: 'text', required: true },
    { key: 'fechaHora', label: 'Fecha y hora', type: 'datetime-local', required: true },
    { key: 'lugar', label: 'Sito en', type: 'text', required: true },
    ...comunesInstructor,
    { key: 'nombreImputado', label: 'Nombre del Imputado', type: 'text', required: true },
    ...comunesPersona.map(c => ({...c, key: c.key + 'Imputado'})),
    { key: 'marcaVehiculo', label: 'Marca del Vehículo', type: 'text', required: true },
    { key: 'placaVehiculo', label: 'Placa', type: 'text', required: true },
    { key: 'colorVehiculo', label: 'Color', type: 'text', required: true },
    { key: 'circunstancias', label: 'Circunstancias', type: 'textarea', required: true },
    { key: 'especies', label: 'Especies incautadas', type: 'textarea', required: true }
  ]
};

const f26 = {
  id: 26, nombre: 'Apreciación de Situación de Inteligencia', grupo: 'C', categoria: 'Inteligencia',
  campos: [
    { key: 'clasificacion', label: 'Clasificación (Secreto, Reservado)', type: 'text', required: true },
    { key: 'unidad', label: 'Unidad', type: 'text', required: true },
    { key: 'lugarFecha', label: 'Lugar y fecha', type: 'text', required: true },
    { key: 'mision', label: 'I. Misión Re-expresada', type: 'textarea', required: true },
    { key: 'meteorologicas', label: 'II. Condiciones Meteorológicas', type: 'textarea', required: true },
    { key: 'terreno', label: 'Terreno', type: 'textarea', required: true },
    { key: 'poblacion', label: 'Población', type: 'textarea', required: true },
    { key: 'situacionOponente', label: 'III. Situación del Oponente', type: 'textarea', required: true },
    { key: 'posibilidadesOponente', label: 'IV. Posibilidades del Oponente', type: 'textarea', required: true },
    { key: 'conclusiones', label: 'V. Conclusiones y EEI', type: 'textarea', required: true }
  ]
};

const arrNuevas = [
  // Falta F01, asumimos genérico similar a Aislamiento
  { id: 1, nombre: 'Acta de Audiencia', grupo: 'A', categoria: 'Acta', campos: [ { key: 'ciudad', label: 'Ciudad', type: 'text', required: true }, { key: 'fechaHora', label: 'Fecha', type: 'datetime-local', required: true }, { key: 'detalles', label: 'Detalles', type: 'textarea', required: true } ] },
  f02, f03, f04, f05, f06, f07, f08, f09, f10,
  f11, f12, f13, f14, f15, f16, f17, f18, f19, f20,
  f21, f22, f23, f24, f25, f26
];

const fs = require('fs');

async function writePlantillas() {
  const orig = require('./src/plantillas/definiciones/index.js').plantillas;
  const nuevasIds = arrNuevas.map(x => x.id);
  
  const fusionadas = {};
  for (let key in orig) {
    if (!nuevasIds.includes(Number(key))) {
      fusionadas[key] = orig[key];
    }
  }
  for (let p of arrNuevas) {
    fusionadas[p.id] = p;
  }

  const output = `// Definiciones de plantillas para los documentos (F01-F26 específicos del manual y MVP originales)
// Generado dinámicamente

const plantillas = ${JSON.stringify(fusionadas, null, 2)};

// Obtener todas las plantillas (resumen)
function getAllPlantillas() {
  return Object.values(plantillas).map(p => ({
    id: p.id,
    nombre: p.nombre,
    grupo: p.grupo,
    categoria: p.categoria,
    descripcion: p.descripcion,
    cantidadCampos: p.campos.length,
  }));
}

// Obtener una plantilla completa con campos
function getPlantilla(id) {
  return plantillas[id] || null;
}

module.exports = { plantillas, getAllPlantillas, getPlantilla };
`;

  fs.writeFileSync('./src/plantillas/definiciones/index.js', output, 'utf8');
}

writePlantillas();
