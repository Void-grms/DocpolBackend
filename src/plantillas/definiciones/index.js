// Definiciones de plantillas para los documentos (F01-F26 específicos del manual y MVP originales)
// Generado dinámicamente

const plantillas = {
  "1": {
    "id": 1,
    "nombre": "Acta de Audiencia",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "detalles",
        "label": "Detalles",
        "type": "textarea",
        "required": true
      }
    ]
  },
  "2": {
    "id": 2,
    "nombre": "Acta de Aislamiento de Persona",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "lugar",
        "label": "Lugar de aislamiento",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreAislado",
        "label": "Nombre del aislado",
        "type": "text",
        "required": true
      },
      {
        "key": "edadAislado",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "naturalDeAislado",
        "label": "Natural de",
        "type": "text",
        "required": true
      },
      {
        "key": "estadoCivilAislado",
        "label": "Estado civil",
        "type": "select",
        "options": [
          "Soltero/a",
          "Casado/a",
          "Viudo/a",
          "Divorciado/a",
          "Conviviente"
        ],
        "required": true
      },
      {
        "key": "ocupacionAislado",
        "label": "Ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "instruccionAislado",
        "label": "Grado de instrucción",
        "type": "text",
        "required": true
      },
      {
        "key": "dniAislado",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioAislado",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreRMP",
        "label": "Representante del Ministerio Público (RMP)",
        "type": "text",
        "required": true
      },
      {
        "key": "detallesDiligencia",
        "label": "Detalles de la diligencia",
        "type": "textarea",
        "required": true
      },
      {
        "key": "abogadoDefensor",
        "label": "Abogado Defensor",
        "type": "text",
        "required": false
      }
    ]
  },
  "3": {
    "id": 3,
    "nombre": "Acta de Allanamiento y Registro",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "meritoDe",
        "label": "En mérito de",
        "type": "select",
        "options": [
          "Flagrancia de delito",
          "Peligro de inminencia",
          "Disposición Fiscal",
          "Resolución Judicial"
        ],
        "required": true
      },
      {
        "key": "nroAutorizacion",
        "label": "N° de Autorización (Fiscal/Judicial)",
        "type": "text",
        "required": false
      },
      {
        "key": "fechaAutorizacion",
        "label": "Fecha de autorización",
        "type": "date",
        "required": false
      },
      {
        "key": "diligenciaReservada",
        "label": "Diligencia reservada",
        "type": "select",
        "options": [
          "SI",
          "NO"
        ],
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "instructorNombre",
        "label": "Nombre del Instructor (Grado/Nombres)",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorCIP",
        "label": "CIP",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorUnidad",
        "label": "Unidad",
        "type": "text",
        "required": true
      },
      {
        "key": "lugarAllanamiento",
        "label": "Lugar del allanamiento",
        "type": "textarea",
        "required": true
      },
      {
        "key": "nombreIntervenido",
        "label": "Nombre del intervenido",
        "type": "text",
        "required": true
      },
      {
        "key": "dniIntervenido",
        "label": "DNI del intervenido",
        "type": "text",
        "required": true
      },
      {
        "key": "condicionIntervenido",
        "label": "Condición",
        "type": "select",
        "options": [
          "Propietario",
          "Inquilino",
          "Morador transitorio",
          "Otros"
        ],
        "required": true
      },
      {
        "key": "finalidad",
        "label": "Finalidad",
        "type": "textarea",
        "required": true
      },
      {
        "key": "ambientesRegistrados",
        "label": "Ambientes registrados",
        "type": "textarea",
        "required": true
      },
      {
        "key": "personasDetenidas",
        "label": "Personas detenidas/retenidas",
        "type": "textarea",
        "required": true
      },
      {
        "key": "bienesDelictivos",
        "label": "Bienes delictivos / relevantes",
        "type": "textarea",
        "required": true
      },
      {
        "key": "carpetaFiscal",
        "label": "Código de carpeta Fiscal",
        "type": "text",
        "required": false
      },
      {
        "key": "registroPersonal",
        "label": "Registro personal (nombres, bienes)",
        "type": "textarea",
        "required": true
      },
      {
        "key": "testigos",
        "label": "Testigos presentes",
        "type": "textarea",
        "required": true
      },
      {
        "key": "custodia",
        "label": "Responsables de custodia",
        "type": "textarea",
        "required": true
      },
      {
        "key": "observaciones",
        "label": "Observaciones",
        "type": "textarea",
        "required": false
      }
    ]
  },
  "4": {
    "id": 4,
    "nombre": "Acta de Cadena de Custodia",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "evidencia",
        "label": "Evidencia levantada",
        "type": "textarea",
        "required": true
      },
      {
        "key": "especie",
        "label": "Especie consistente",
        "type": "textarea",
        "required": true
      },
      {
        "key": "fechaHoraLevantamiento",
        "label": "Fecha y hora del levantamiento",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "ocurrenciaPolicial",
        "label": "N° de Ocurrencia Policial",
        "type": "text",
        "required": true
      },
      {
        "key": "tipoDelito",
        "label": "Tipo de Delito",
        "type": "text",
        "required": true
      },
      {
        "key": "efectivoLevanta",
        "label": "Efectivo que levanta (Grado/Nombres)",
        "type": "text",
        "required": true
      },
      {
        "key": "unidadPolicial",
        "label": "Unidad Policial",
        "type": "text",
        "required": true
      },
      {
        "key": "lugar",
        "label": "Lugar",
        "type": "text",
        "required": true
      },
      {
        "key": "observaciones",
        "label": "Observaciones",
        "type": "textarea",
        "required": false
      },
      {
        "key": "traslados",
        "label": "Detalle de traslados",
        "type": "textarea",
        "required": true,
        "placeholder": "Entregado por... Recibido por... Motivo..."
      }
    ]
  },
  "5": {
    "id": 5,
    "nombre": "Acta de Detención",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "distrito",
        "label": "Distrito",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "lugar",
        "label": "Lugar ubicado en",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreDetenido",
        "label": "Nombre del detenido",
        "type": "text",
        "required": true
      },
      {
        "key": "edadDetenido",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "naturalDeDetenido",
        "label": "Natural de",
        "type": "text",
        "required": true
      },
      {
        "key": "estadoCivilDetenido",
        "label": "Estado civil",
        "type": "select",
        "options": [
          "Soltero/a",
          "Casado/a",
          "Viudo/a",
          "Divorciado/a",
          "Conviviente"
        ],
        "required": true
      },
      {
        "key": "ocupacionDetenido",
        "label": "Ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "instruccionDetenido",
        "label": "Grado de instrucción",
        "type": "text",
        "required": true
      },
      {
        "key": "dniDetenido",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioDetenido",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "motivoDetencion",
        "label": "Motivo de detención (Hechos)",
        "type": "textarea",
        "required": true
      }
    ]
  },
  "6": {
    "id": 6,
    "nombre": "Acta de Entrega y Recepción",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "distrito",
        "label": "Distrito",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "lugar",
        "label": "Sito en",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorNombre",
        "label": "Nombre del Instructor (Grado/Nombres)",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorCIP",
        "label": "CIP",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorUnidad",
        "label": "Unidad",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreImputado",
        "label": "Nombre del Imputado",
        "type": "text",
        "required": true
      },
      {
        "key": "edadImputado",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "naturalDeImputado",
        "label": "Natural de",
        "type": "text",
        "required": true
      },
      {
        "key": "estadoCivilImputado",
        "label": "Estado civil",
        "type": "select",
        "options": [
          "Soltero/a",
          "Casado/a",
          "Viudo/a",
          "Divorciado/a",
          "Conviviente"
        ],
        "required": true
      },
      {
        "key": "ocupacionImputado",
        "label": "Ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "instruccionImputado",
        "label": "Grado de instrucción",
        "type": "text",
        "required": true
      },
      {
        "key": "dniImputado",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioImputado",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "circunstancias",
        "label": "Circunstancias",
        "type": "textarea",
        "required": true
      },
      {
        "key": "especies",
        "label": "Especies recibidas",
        "type": "textarea",
        "required": true
      }
    ]
  },
  "7": {
    "id": 7,
    "nombre": "Acta de Hallazgo y Recojo",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "distrito",
        "label": "Distrito",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "lugar",
        "label": "Sito en",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorNombre",
        "label": "Nombre del Instructor (Grado/Nombres)",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorCIP",
        "label": "CIP",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorUnidad",
        "label": "Unidad",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreTestigo",
        "label": "Nombre del Imputado/Testigo",
        "type": "text",
        "required": true
      },
      {
        "key": "edadTestigo",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "naturalDeTestigo",
        "label": "Natural de",
        "type": "text",
        "required": true
      },
      {
        "key": "estadoCivilTestigo",
        "label": "Estado civil",
        "type": "select",
        "options": [
          "Soltero/a",
          "Casado/a",
          "Viudo/a",
          "Divorciado/a",
          "Conviviente"
        ],
        "required": true
      },
      {
        "key": "ocupacionTestigo",
        "label": "Ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "instruccionTestigo",
        "label": "Grado de instrucción",
        "type": "text",
        "required": true
      },
      {
        "key": "dniTestigo",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioTestigo",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "circunstancias",
        "label": "Circunstancias",
        "type": "textarea",
        "required": true
      },
      {
        "key": "especies",
        "label": "Especies recogidas",
        "type": "textarea",
        "required": true
      }
    ]
  },
  "8": {
    "id": 8,
    "nombre": "Acta de Incautación",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "distrito",
        "label": "Distrito",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "lugar",
        "label": "Sito en",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorNombre",
        "label": "Nombre del Instructor (Grado/Nombres)",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorCIP",
        "label": "CIP",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorUnidad",
        "label": "Unidad",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreImputado",
        "label": "Nombre del Imputado",
        "type": "text",
        "required": true
      },
      {
        "key": "edadImputado",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "naturalDeImputado",
        "label": "Natural de",
        "type": "text",
        "required": true
      },
      {
        "key": "estadoCivilImputado",
        "label": "Estado civil",
        "type": "select",
        "options": [
          "Soltero/a",
          "Casado/a",
          "Viudo/a",
          "Divorciado/a",
          "Conviviente"
        ],
        "required": true
      },
      {
        "key": "ocupacionImputado",
        "label": "Ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "instruccionImputado",
        "label": "Grado de instrucción",
        "type": "text",
        "required": true
      },
      {
        "key": "dniImputado",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioImputado",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "circunstancias",
        "label": "Circunstancias",
        "type": "textarea",
        "required": true
      },
      {
        "key": "especies",
        "label": "Especies incautadas",
        "type": "textarea",
        "required": true
      }
    ]
  },
  "9": {
    "id": 9,
    "nombre": "Acta de Información de Derechos (Víctima/Testigo)",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "nombreInformado",
        "label": "Se informa a (Nombres)",
        "type": "text",
        "required": true
      },
      {
        "key": "dniInformado",
        "label": "DNI",
        "type": "text",
        "required": true
      }
    ]
  },
  "10": {
    "id": 10,
    "nombre": "Acta de Ingreso, Aislamiento y Traslado del Reconocedor",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "dependencia",
        "label": "Dependencia / DEPINCRI",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreReconocedor",
        "label": "Nombre del reconocedor",
        "type": "text",
        "required": true
      },
      {
        "key": "ocupacionReconocedor",
        "label": "Ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "padresReconocedor",
        "label": "Hijo de",
        "type": "text",
        "required": true
      },
      {
        "key": "dniReconocedor",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioReconocedor",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "calidadReconocedor",
        "label": "En su calidad de",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreProteccion",
        "label": "Efectivo PNP de protección",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreRMP",
        "label": "Representante Ministerio Público",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreAbogado",
        "label": "Nombre del Abogado",
        "type": "text",
        "required": true
      },
      {
        "key": "diligencia",
        "label": "Diligencia a llevarse a cabo",
        "type": "textarea",
        "required": true
      }
    ]
  },
  "11": {
    "id": 11,
    "nombre": "Acta de Inmovilización",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "distrito",
        "label": "Distrito",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "lugar",
        "label": "Lugar ubicado en",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreImputado",
        "label": "Nombre del Imputado o Testigo",
        "type": "text",
        "required": true
      },
      {
        "key": "edadImputado",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "naturalDeImputado",
        "label": "Natural de",
        "type": "text",
        "required": true
      },
      {
        "key": "estadoCivilImputado",
        "label": "Estado civil",
        "type": "select",
        "options": [
          "Soltero/a",
          "Casado/a",
          "Viudo/a",
          "Divorciado/a",
          "Conviviente"
        ],
        "required": true
      },
      {
        "key": "ocupacionImputado",
        "label": "Ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "instruccionImputado",
        "label": "Grado de instrucción",
        "type": "text",
        "required": true
      },
      {
        "key": "dniImputado",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioImputado",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "especies",
        "label": "Bienes a inmovilizar y custodio",
        "type": "textarea",
        "required": true
      }
    ]
  },
  "12": {
    "id": 12,
    "nombre": "Acta de Intervención Policial",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "lugar",
        "label": "Lugar ubicado en",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreIntervenido",
        "label": "Nombre del intervenido",
        "type": "text",
        "required": true
      },
      {
        "key": "edadIntervenido",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "naturalDeIntervenido",
        "label": "Natural de",
        "type": "text",
        "required": true
      },
      {
        "key": "estadoCivilIntervenido",
        "label": "Estado civil",
        "type": "select",
        "options": [
          "Soltero/a",
          "Casado/a",
          "Viudo/a",
          "Divorciado/a",
          "Conviviente"
        ],
        "required": true
      },
      {
        "key": "ocupacionIntervenido",
        "label": "Ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "instruccionIntervenido",
        "label": "Grado de instrucción",
        "type": "text",
        "required": true
      },
      {
        "key": "dniIntervenido",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioIntervenido",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "motivoIntervencion",
        "label": "Motivo de la intervención",
        "type": "textarea",
        "required": true
      },
      {
        "key": "actasAdjuntas",
        "label": "Actas adjuntas (separar con coma)",
        "type": "textarea",
        "required": true
      }
    ]
  },
  "13": {
    "id": 13,
    "nombre": "Acta de Lacrado",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "distrito",
        "label": "Distrito",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "lugar",
        "label": "Lugar ubicado en",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreImputado",
        "label": "Nombre del Imputado/Testigo",
        "type": "text",
        "required": true
      },
      {
        "key": "edadImputado",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "naturalDeImputado",
        "label": "Natural de",
        "type": "text",
        "required": true
      },
      {
        "key": "estadoCivilImputado",
        "label": "Estado civil",
        "type": "select",
        "options": [
          "Soltero/a",
          "Casado/a",
          "Viudo/a",
          "Divorciado/a",
          "Conviviente"
        ],
        "required": true
      },
      {
        "key": "ocupacionImputado",
        "label": "Ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "instruccionImputado",
        "label": "Grado de instrucción",
        "type": "text",
        "required": true
      },
      {
        "key": "dniImputado",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioImputado",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "padres",
        "label": "Hijo de",
        "type": "text",
        "required": true
      },
      {
        "key": "detallesLacrado",
        "label": "Detalles (especie, embalaje, lacrado)",
        "type": "textarea",
        "required": true
      }
    ]
  },
  "14": {
    "id": 14,
    "nombre": "Acta de Lectura de Derechos del Imputado",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "lugar",
        "label": "Lugar",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreImputado",
        "label": "Nombre del Imputado",
        "type": "text",
        "required": true
      },
      {
        "key": "edadImputado",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "naturalDeImputado",
        "label": "Natural de",
        "type": "text",
        "required": true
      },
      {
        "key": "estadoCivilImputado",
        "label": "Estado civil",
        "type": "select",
        "options": [
          "Soltero/a",
          "Casado/a",
          "Viudo/a",
          "Divorciado/a",
          "Conviviente"
        ],
        "required": true
      },
      {
        "key": "ocupacionImputado",
        "label": "Ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "instruccionImputado",
        "label": "Grado de instrucción",
        "type": "text",
        "required": true
      },
      {
        "key": "dniImputado",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioImputado",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "comunicarA",
        "label": "Comunicar detención a (Nombres)",
        "type": "text",
        "required": false
      },
      {
        "key": "comunicarParentesco",
        "label": "Parentesco",
        "type": "text",
        "required": false
      },
      {
        "key": "comunicarTelefono",
        "label": "Teléfono",
        "type": "text",
        "required": false
      },
      {
        "key": "idioma",
        "label": "Idioma del intérprete",
        "type": "text",
        "required": false
      },
      {
        "key": "abogadoNombre",
        "label": "Abogado Defensor",
        "type": "text",
        "required": false
      },
      {
        "key": "abogadoTelefono",
        "label": "Teléfono del Abogado",
        "type": "text",
        "required": false
      },
      {
        "key": "abogadoOficio",
        "label": "¿Abogado de oficio?",
        "type": "select",
        "options": [
          "SI",
          "NO"
        ],
        "required": true
      },
      {
        "key": "medico",
        "label": "¿Examen Médico?",
        "type": "select",
        "options": [
          "SI",
          "NO"
        ],
        "required": true
      }
    ]
  },
  "15": {
    "id": 15,
    "nombre": "Acta de Lectura de Obligaciones del Testigo",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "nombreTestigo",
        "label": "Nombre del Testigo",
        "type": "text",
        "required": true
      },
      {
        "key": "dniTestigo",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "dependencia",
        "label": "Dependencia Policial",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreInstructor",
        "label": "Nombre del Instructor",
        "type": "text",
        "required": true
      }
    ]
  },
  "16": {
    "id": 16,
    "nombre": "Acta de Levantamiento de Cadáver",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "fiscalia",
        "label": "Fiscalía de Turno que autoriza",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreFiscal",
        "label": "Nombre del Fiscal",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreInstructor",
        "label": "Nombre del Instructor",
        "type": "text",
        "required": true
      },
      {
        "key": "medicoLegista",
        "label": "Médico Legista",
        "type": "text",
        "required": true
      },
      {
        "key": "efectivos",
        "label": "Efectivos intervinientes",
        "type": "text",
        "required": true
      },
      {
        "key": "lugarExacto",
        "label": "Lugar exacto",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreOcciso",
        "label": "Nombre del occiso",
        "type": "text",
        "required": true
      },
      {
        "key": "edadOcciso",
        "label": "Edad aproximada",
        "type": "text",
        "required": true
      },
      {
        "key": "pertenencias",
        "label": "Detalle de pertenencias",
        "type": "textarea",
        "required": true
      },
      {
        "key": "descripcionCadaver",
        "label": "Descripción (Posición, Ubicación, Ropa)",
        "type": "textarea",
        "required": true
      },
      {
        "key": "signosViolencia",
        "label": "Signos de violencia",
        "type": "textarea",
        "required": true
      },
      {
        "key": "registroPersonal",
        "label": "Registro personal",
        "type": "textarea",
        "required": true
      },
      {
        "key": "evidencias",
        "label": "Cuadro de Evidencias (Vestigios, armas, etc)",
        "type": "textarea",
        "required": true
      },
      {
        "key": "diagnosticoMuerte",
        "label": "Diagnóstico Presuntivo de Muerte",
        "type": "textarea",
        "required": true
      },
      {
        "key": "tiempoMuerte",
        "label": "Tiempo aproximado de muerte",
        "type": "text",
        "required": true
      },
      {
        "key": "justificacion",
        "label": "Justificación del requerimiento de necropsia",
        "type": "textarea",
        "required": true
      },
      {
        "key": "traslado",
        "label": "Traslado por / hacia",
        "type": "text",
        "required": true
      }
    ]
  },
  "17": {
    "id": 17,
    "nombre": "Acta de Llegada a la Escena del Delito",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "lugar",
        "label": "Lugar de la escena",
        "type": "text",
        "required": true
      },
      {
        "key": "personalLlega",
        "label": "Personal que llegó a la escena",
        "type": "text",
        "required": true
      },
      {
        "key": "motivoLlegada",
        "label": "Conocimiento por / Orden de",
        "type": "text",
        "required": true
      },
      {
        "key": "violencia",
        "label": "Signos de violencia (descripción)",
        "type": "textarea",
        "required": true
      },
      {
        "key": "cuerpos",
        "label": "Hallazgo de cuerpos (descripción)",
        "type": "textarea",
        "required": true
      },
      {
        "key": "heridos",
        "label": "Hallazgo de heridos (nombres, evacuación)",
        "type": "textarea",
        "required": true
      },
      {
        "key": "indicios",
        "label": "Detalle de indicios / evidencias",
        "type": "textarea",
        "required": true
      },
      {
        "key": "testigos",
        "label": "Testigos presentes",
        "type": "textarea",
        "required": true
      },
      {
        "key": "perennizacion",
        "label": "Acciones de perennización",
        "type": "textarea",
        "required": true
      },
      {
        "key": "aislamiento",
        "label": "Medios de aislamiento",
        "type": "text",
        "required": true
      },
      {
        "key": "llegadaEspecializada",
        "label": "Llegada de personal especializado / Fiscal",
        "type": "textarea",
        "required": true
      },
      {
        "key": "entregaActa",
        "label": "Entrega del acta a",
        "type": "text",
        "required": true
      },
      {
        "key": "anexos",
        "label": "Anexos / Observaciones",
        "type": "textarea",
        "required": false
      }
    ]
  },
  "18": {
    "id": 18,
    "nombre": "Acta de Recepción de Persona por Arresto Ciudadano",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "dependencia",
        "label": "Dependencia Policial",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "nombreAprehensor",
        "label": "Nombre del Aprehensor",
        "type": "text",
        "required": true
      },
      {
        "key": "relacionArrestado",
        "label": "Relación con el arrestado",
        "type": "text",
        "required": true
      },
      {
        "key": "dniAprehensor",
        "label": "DNI Aprehensor",
        "type": "text",
        "required": true
      },
      {
        "key": "direccionAprehensor",
        "label": "Dirección Aprehensor",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreArrestado",
        "label": "Nombre del Arrestado",
        "type": "text",
        "required": true
      },
      {
        "key": "dniArrestado",
        "label": "DNI Arrestado",
        "type": "text",
        "required": true
      },
      {
        "key": "direccionArrestado",
        "label": "Dirección Arrestado",
        "type": "text",
        "required": true
      },
      {
        "key": "datosArresto",
        "label": "Lugar y motivos del arresto",
        "type": "textarea",
        "required": true
      },
      {
        "key": "victimas",
        "label": "Datos de víctimas/testigos",
        "type": "textarea",
        "required": true
      },
      {
        "key": "lesiones",
        "label": "Constatación de lesiones",
        "type": "textarea",
        "required": true
      },
      {
        "key": "evidencias",
        "label": "Efectos personales y evidencias",
        "type": "textarea",
        "required": true
      },
      {
        "key": "personalRecibe",
        "label": "Datos del policía que recibe",
        "type": "text",
        "required": true
      }
    ]
  },
  "19": {
    "id": 19,
    "nombre": "Acta de Recepción de Denuncia Verbal",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "oficina",
        "label": "Oficinas de",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "nombreDenunciante",
        "label": "Nombre del Denunciante",
        "type": "text",
        "required": true
      },
      {
        "key": "edadDenunciante",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "naturalDeDenunciante",
        "label": "Natural de",
        "type": "text",
        "required": true
      },
      {
        "key": "estadoCivilDenunciante",
        "label": "Estado civil",
        "type": "select",
        "options": [
          "Soltero/a",
          "Casado/a",
          "Viudo/a",
          "Divorciado/a",
          "Conviviente"
        ],
        "required": true
      },
      {
        "key": "ocupacionDenunciante",
        "label": "Ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "instruccionDenunciante",
        "label": "Grado de instrucción",
        "type": "text",
        "required": true
      },
      {
        "key": "dniDenunciante",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioDenunciante",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "hechos",
        "label": "Descripción de los hechos",
        "type": "textarea",
        "required": true
      },
      {
        "key": "autor",
        "label": "Presunto autor",
        "type": "textarea",
        "required": false
      },
      {
        "key": "testigos",
        "label": "Testigos",
        "type": "textarea",
        "required": false
      }
    ]
  },
  "20": {
    "id": 20,
    "nombre": "Acta de Reconocimiento Físico/Fotográfico",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "grupoTurno",
        "label": "Grupo de Turno",
        "type": "text",
        "required": true
      },
      {
        "key": "autorizacionFiscal",
        "label": "Fecha y Autoridad Fiscal",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorNombre",
        "label": "Nombre del Instructor (Grado/Nombres)",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorCIP",
        "label": "CIP",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorUnidad",
        "label": "Unidad",
        "type": "text",
        "required": true
      },
      {
        "key": "presenciaDe",
        "label": "En presencia de (Fiscal, Abogado)",
        "type": "textarea",
        "required": true
      },
      {
        "key": "tipoReconocimiento",
        "label": "Tipo de Reconocimiento",
        "type": "select",
        "options": [
          "Físico",
          "Fotográfico",
          "Voces",
          "Sonidos"
        ],
        "required": true
      },
      {
        "key": "tipoTestigo",
        "label": "Condición del Reconocedor",
        "type": "select",
        "options": [
          "TESTIGO",
          "VICTIMA"
        ],
        "required": true
      },
      {
        "key": "nombreTestigo",
        "label": "Nombre del Reconocedor",
        "type": "text",
        "required": true
      },
      {
        "key": "dniTestigo",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "descripcionPrevia",
        "label": "Descripción previa de la persona",
        "type": "textarea",
        "required": true
      },
      {
        "key": "personasPresentadas",
        "label": "Personas o imágenes presentadas",
        "type": "textarea",
        "required": true
      },
      {
        "key": "resultados",
        "label": "Resultados del reconocimiento",
        "type": "textarea",
        "required": true
      }
    ]
  },
  "21": {
    "id": 21,
    "nombre": "Acta de Registro de Bienes Muebles o Inmuebles e Incautación",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "distrito",
        "label": "Distrito",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "lugar",
        "label": "Sito en",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorNombre",
        "label": "Nombre del Instructor (Grado/Nombres)",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorCIP",
        "label": "CIP",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorUnidad",
        "label": "Unidad",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreImputado",
        "label": "Nombre del Imputado",
        "type": "text",
        "required": true
      },
      {
        "key": "edadImputado",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "naturalDeImputado",
        "label": "Natural de",
        "type": "text",
        "required": true
      },
      {
        "key": "estadoCivilImputado",
        "label": "Estado civil",
        "type": "select",
        "options": [
          "Soltero/a",
          "Casado/a",
          "Viudo/a",
          "Divorciado/a",
          "Conviviente"
        ],
        "required": true
      },
      {
        "key": "ocupacionImputado",
        "label": "Ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "instruccionImputado",
        "label": "Grado de instrucción",
        "type": "text",
        "required": true
      },
      {
        "key": "dniImputado",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioImputado",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "inmueble",
        "label": "Inmueble / Bien registrado",
        "type": "text",
        "required": true
      },
      {
        "key": "circunstancias",
        "label": "Circunstancias",
        "type": "textarea",
        "required": true
      },
      {
        "key": "especies",
        "label": "Especies incautadas",
        "type": "textarea",
        "required": true
      }
    ]
  },
  "22": {
    "id": 22,
    "nombre": "Acta de Registro de Equipaje e Incautación",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "distrito",
        "label": "Distrito",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "lugar",
        "label": "Sito en",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorNombre",
        "label": "Nombre del Instructor (Grado/Nombres)",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorCIP",
        "label": "CIP",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorUnidad",
        "label": "Unidad",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreImputado",
        "label": "Nombre del Imputado",
        "type": "text",
        "required": true
      },
      {
        "key": "edadImputado",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "naturalDeImputado",
        "label": "Natural de",
        "type": "text",
        "required": true
      },
      {
        "key": "estadoCivilImputado",
        "label": "Estado civil",
        "type": "select",
        "options": [
          "Soltero/a",
          "Casado/a",
          "Viudo/a",
          "Divorciado/a",
          "Conviviente"
        ],
        "required": true
      },
      {
        "key": "ocupacionImputado",
        "label": "Ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "instruccionImputado",
        "label": "Grado de instrucción",
        "type": "text",
        "required": true
      },
      {
        "key": "dniImputado",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioImputado",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "inmueble",
        "label": "Inmueble / Bien registrado",
        "type": "text",
        "required": true
      },
      {
        "key": "circunstancias",
        "label": "Circunstancias",
        "type": "textarea",
        "required": true
      },
      {
        "key": "especies",
        "label": "Especies incautadas",
        "type": "textarea",
        "required": true
      }
    ]
  },
  "23": {
    "id": 23,
    "nombre": "Acta de Registro y Verificación Domiciliaria",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "lugar",
        "label": "Vivienda sito en",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreImputado",
        "label": "Propiedad de",
        "type": "text",
        "required": true
      },
      {
        "key": "edadImputado",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "naturalDeImputado",
        "label": "Natural de",
        "type": "text",
        "required": true
      },
      {
        "key": "estadoCivilImputado",
        "label": "Estado civil",
        "type": "select",
        "options": [
          "Soltero/a",
          "Casado/a",
          "Viudo/a",
          "Divorciado/a",
          "Conviviente"
        ],
        "required": true
      },
      {
        "key": "ocupacionImputado",
        "label": "Ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "instruccionImputado",
        "label": "Grado de instrucción",
        "type": "text",
        "required": true
      },
      {
        "key": "dniImputado",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioImputado",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreRMP",
        "label": "Nombre del RMP",
        "type": "text",
        "required": true
      },
      {
        "key": "drogas",
        "label": "Para Drogas",
        "type": "text",
        "required": true
      },
      {
        "key": "armas",
        "label": "Para Armas / Insumos",
        "type": "text",
        "required": true
      },
      {
        "key": "evidencias",
        "label": "Evidencias incriminatorias",
        "type": "textarea",
        "required": true
      },
      {
        "key": "carpetaFiscal",
        "label": "Carpeta Fiscal / Prioridad",
        "type": "text",
        "required": false
      }
    ]
  },
  "24": {
    "id": 24,
    "nombre": "Acta de Registro Personal e Incautación",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "lugar",
        "label": "Lugar ubicado en",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreImputado",
        "label": "Nombre del Imputado",
        "type": "text",
        "required": true
      },
      {
        "key": "edadImputado",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "naturalDeImputado",
        "label": "Natural de",
        "type": "text",
        "required": true
      },
      {
        "key": "estadoCivilImputado",
        "label": "Estado civil",
        "type": "select",
        "options": [
          "Soltero/a",
          "Casado/a",
          "Viudo/a",
          "Divorciado/a",
          "Conviviente"
        ],
        "required": true
      },
      {
        "key": "ocupacionImputado",
        "label": "Ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "instruccionImputado",
        "label": "Grado de instrucción",
        "type": "text",
        "required": true
      },
      {
        "key": "dniImputado",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioImputado",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "resultado",
        "label": "Resultado del registro (especies)",
        "type": "textarea",
        "required": true
      },
      {
        "key": "observaciones",
        "label": "Observaciones",
        "type": "textarea",
        "required": false
      }
    ]
  },
  "25": {
    "id": 25,
    "nombre": "Acta de Registro de Vehículo e Incautación",
    "grupo": "A",
    "categoria": "Acta",
    "campos": [
      {
        "key": "ciudad",
        "label": "Ciudad",
        "type": "text",
        "required": true
      },
      {
        "key": "distrito",
        "label": "Distrito",
        "type": "text",
        "required": true
      },
      {
        "key": "fechaHora",
        "label": "Fecha y hora",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "lugar",
        "label": "Sito en",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorNombre",
        "label": "Nombre del Instructor (Grado/Nombres)",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorCIP",
        "label": "CIP",
        "type": "text",
        "required": true
      },
      {
        "key": "instructorUnidad",
        "label": "Unidad",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreImputado",
        "label": "Nombre del Imputado",
        "type": "text",
        "required": true
      },
      {
        "key": "edadImputado",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "naturalDeImputado",
        "label": "Natural de",
        "type": "text",
        "required": true
      },
      {
        "key": "estadoCivilImputado",
        "label": "Estado civil",
        "type": "select",
        "options": [
          "Soltero/a",
          "Casado/a",
          "Viudo/a",
          "Divorciado/a",
          "Conviviente"
        ],
        "required": true
      },
      {
        "key": "ocupacionImputado",
        "label": "Ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "instruccionImputado",
        "label": "Grado de instrucción",
        "type": "text",
        "required": true
      },
      {
        "key": "dniImputado",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioImputado",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "marcaVehiculo",
        "label": "Marca del Vehículo",
        "type": "text",
        "required": true
      },
      {
        "key": "placaVehiculo",
        "label": "Placa",
        "type": "text",
        "required": true
      },
      {
        "key": "colorVehiculo",
        "label": "Color",
        "type": "text",
        "required": true
      },
      {
        "key": "circunstancias",
        "label": "Circunstancias",
        "type": "textarea",
        "required": true
      },
      {
        "key": "especies",
        "label": "Especies incautadas",
        "type": "textarea",
        "required": true
      }
    ]
  },
  "26": {
    "id": 26,
    "nombre": "Apreciación de Situación de Inteligencia",
    "grupo": "C",
    "categoria": "Inteligencia",
    "campos": [
      {
        "key": "clasificacion",
        "label": "Clasificación (Secreto, Reservado)",
        "type": "text",
        "required": true
      },
      {
        "key": "unidad",
        "label": "Unidad",
        "type": "text",
        "required": true
      },
      {
        "key": "lugarFecha",
        "label": "Lugar y fecha",
        "type": "text",
        "required": true
      },
      {
        "key": "mision",
        "label": "I. Misión Re-expresada",
        "type": "textarea",
        "required": true
      },
      {
        "key": "meteorologicas",
        "label": "II. Condiciones Meteorológicas",
        "type": "textarea",
        "required": true
      },
      {
        "key": "terreno",
        "label": "Terreno",
        "type": "textarea",
        "required": true
      },
      {
        "key": "poblacion",
        "label": "Población",
        "type": "textarea",
        "required": true
      },
      {
        "key": "situacionOponente",
        "label": "III. Situación del Oponente",
        "type": "textarea",
        "required": true
      },
      {
        "key": "posibilidadesOponente",
        "label": "IV. Posibilidades del Oponente",
        "type": "textarea",
        "required": true
      },
      {
        "key": "conclusiones",
        "label": "V. Conclusiones y EEI",
        "type": "textarea",
        "required": true
      }
    ]
  },
  "30": {
    "id": 30,
    "nombre": "Citación Policial",
    "grupo": "A",
    "categoria": "Notificación",
    "descripcion": "Documento para citar a una persona a comparecer ante la autoridad policial.",
    "campos": [
      {
        "key": "nombreCitado",
        "label": "Nombre completo del citado",
        "type": "text",
        "required": true
      },
      {
        "key": "dniCitado",
        "label": "DNI del citado",
        "type": "text",
        "required": true,
        "pattern": "^[0-9]{8}$"
      },
      {
        "key": "domicilioCitado",
        "label": "Domicilio del citado",
        "type": "text",
        "required": true
      },
      {
        "key": "dependencia",
        "label": "Dependencia policial",
        "type": "text",
        "required": true
      },
      {
        "key": "direccionDependencia",
        "label": "Dirección de la dependencia",
        "type": "text",
        "required": true
      },
      {
        "key": "motivoCitacion",
        "label": "Motivo de la citación",
        "type": "textarea",
        "required": true
      },
      {
        "key": "primeraCitacion",
        "label": "1ra citación (fecha y hora)",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "segundaCitacion",
        "label": "2da citación (fecha y hora)",
        "type": "datetime-local",
        "required": false
      },
      {
        "key": "terceraCitacion",
        "label": "3ra citación (fecha y hora)",
        "type": "datetime-local",
        "required": false
      }
    ]
  },
  "31": {
    "id": 31,
    "nombre": "Constancia",
    "grupo": "A",
    "categoria": "Certificación",
    "descripcion": "Documento que deja constancia de un acto, hecho o diligencia policial.",
    "campos": [
      {
        "key": "tipoConstancia",
        "label": "Tipo de constancia",
        "type": "text",
        "required": true,
        "placeholder": "Ej: Comparecencia, Denuncia..."
      },
      {
        "key": "gradoCargo",
        "label": "Grado y cargo del que expide",
        "type": "text",
        "required": true
      },
      {
        "key": "nombreInteresado",
        "label": "Nombre del interesado",
        "type": "text",
        "required": true
      },
      {
        "key": "dniInteresado",
        "label": "DNI del interesado",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilioInteresado",
        "label": "Domicilio del interesado",
        "type": "text",
        "required": true
      },
      {
        "key": "diligenciaRealizada",
        "label": "Documento o diligencia realizada",
        "type": "textarea",
        "required": true
      },
      {
        "key": "horaInicio",
        "label": "Hora de inicio",
        "type": "time",
        "required": true
      },
      {
        "key": "horaFin",
        "label": "Hora de finalización",
        "type": "time",
        "required": true
      },
      {
        "key": "motivo",
        "label": "Motivo de expedición",
        "type": "text",
        "required": true,
        "placeholder": "A solicitud del interesado / para fines de ley"
      }
    ]
  },
  "38": {
    "id": 38,
    "nombre": "Hoja de Datos de Identificación",
    "grupo": "A",
    "categoria": "Identificación",
    "descripcion": "Datos de identificación y características de una persona detenida sujeta a investigación.",
    "campos": [
      {
        "key": "apellidos",
        "label": "Apellidos",
        "type": "text",
        "required": true
      },
      {
        "key": "nombres",
        "label": "Nombres",
        "type": "text",
        "required": true
      },
      {
        "key": "edad",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "nacionalidad",
        "label": "Nacionalidad",
        "type": "text",
        "required": true,
        "placeholder": "Peruana"
      },
      {
        "key": "profesion",
        "label": "Profesión u ocupación",
        "type": "text",
        "required": true
      },
      {
        "key": "dni",
        "label": "DNI / Pasaporte",
        "type": "text",
        "required": true
      },
      {
        "key": "domicilio",
        "label": "Dirección domiciliaria",
        "type": "text",
        "required": true
      },
      {
        "key": "centroTrabajo",
        "label": "Centro de trabajo",
        "type": "text",
        "required": false
      },
      {
        "key": "direccionTrabajo",
        "label": "Dirección del trabajo",
        "type": "text",
        "required": false
      },
      {
        "key": "motivoIntervencion",
        "label": "Motivo de la intervención",
        "type": "textarea",
        "required": true
      },
      {
        "key": "documentoRedactado",
        "label": "Documento redactado",
        "type": "text",
        "required": true
      },
      {
        "key": "senasParticulares",
        "label": "Señas particulares",
        "type": "textarea",
        "required": false
      },
      {
        "key": "observaciones",
        "label": "Observaciones",
        "type": "textarea",
        "required": false
      }
    ]
  },
  "41": {
    "id": 41,
    "nombre": "Informe",
    "grupo": "B",
    "categoria": "Informe",
    "descripcion": "Documento para comunicar a la superioridad sobre un acto administrativo o hecho relevante.",
    "campos": [
      {
        "key": "asunto",
        "label": "Asunto",
        "type": "text",
        "required": true
      },
      {
        "key": "referencia",
        "label": "Referencia (si hubiera)",
        "type": "text",
        "required": false
      },
      {
        "key": "destinatario",
        "label": "Destinatario (grado y cargo)",
        "type": "text",
        "required": true
      },
      {
        "key": "contenido",
        "label": "Contenido del informe",
        "type": "textarea",
        "required": true,
        "placeholder": "Narración ordenada y cronológica del asunto..."
      }
    ]
  },
  "49": {
    "id": 49,
    "nombre": "Memorándum",
    "grupo": "B",
    "categoria": "Comunicación",
    "descripcion": "Documento para impartir órdenes o comunicar disposiciones a un subordinado.",
    "campos": [
      {
        "key": "destinatario",
        "label": "Destinatario (grado, nombre y cargo)",
        "type": "text",
        "required": true
      },
      {
        "key": "referencia",
        "label": "Referencia (si hubiera)",
        "type": "text",
        "required": false
      },
      {
        "key": "contenido",
        "label": "Contenido (órdenes/disposiciones)",
        "type": "textarea",
        "required": true,
        "placeholder": "Me dirijo a Ud., para..."
      }
    ]
  },
  "55": {
    "id": 55,
    "nombre": "Notificación de Detención",
    "grupo": "A",
    "categoria": "Notificación",
    "descripcion": "Documento que notifica a una persona el motivo de la privación de su libertad.",
    "campos": [
      {
        "key": "nombreDetenido",
        "label": "Nombre y apellidos del detenido",
        "type": "text",
        "required": true
      },
      {
        "key": "edadDetenido",
        "label": "Edad",
        "type": "number",
        "required": true
      },
      {
        "key": "dniDetenido",
        "label": "DNI",
        "type": "text",
        "required": true,
        "pattern": "^[0-9]{8}$"
      },
      {
        "key": "domicilio",
        "label": "Domicilio",
        "type": "text",
        "required": true
      },
      {
        "key": "delito",
        "label": "Delito presunto",
        "type": "text",
        "required": true
      },
      {
        "key": "agraviado",
        "label": "Nombre del agraviado",
        "type": "text",
        "required": true
      },
      {
        "key": "edadAgraviado",
        "label": "Edad del agraviado",
        "type": "number",
        "required": false
      },
      {
        "key": "fechaHoraHechos",
        "label": "Fecha y hora de los hechos",
        "type": "datetime-local",
        "required": true
      },
      {
        "key": "lugarHechos",
        "label": "Lugar de los hechos",
        "type": "text",
        "required": true
      }
    ]
  },
  "56": {
    "id": 56,
    "nombre": "Oficio",
    "grupo": "B",
    "categoria": "Comunicación",
    "descripcion": "Documento para comunicar, gestionar, requerir o coordinar con otra dependencia o entidad.",
    "campos": [
      {
        "key": "destinatarioGrado",
        "label": "Grado o título del destinatario",
        "type": "text",
        "required": true
      },
      {
        "key": "destinatarioNombre",
        "label": "Nombre del destinatario",
        "type": "text",
        "required": true
      },
      {
        "key": "destinatarioCargo",
        "label": "Cargo del destinatario",
        "type": "text",
        "required": true
      },
      {
        "key": "asunto",
        "label": "Asunto",
        "type": "text",
        "required": true
      },
      {
        "key": "referencia",
        "label": "Referencia (si hubiera)",
        "type": "text",
        "required": false
      },
      {
        "key": "jerarquiaDestinatario",
        "label": "Relación jerárquica",
        "type": "select",
        "required": true,
        "options": [
          "Superior",
          "Igual grado",
          "Menor grado",
          "Entidad externa"
        ]
      },
      {
        "key": "contenido",
        "label": "Contenido del oficio",
        "type": "textarea",
        "required": true
      }
    ]
  },
  "61": {
    "id": 61,
    "nombre": "Parte",
    "grupo": "B",
    "categoria": "Comunicación",
    "descripcion": "Documento para dar cuenta a la superioridad sobre hechos, actividades o diligencias del servicio policial.",
    "campos": [
      {
        "key": "asunto",
        "label": "Asunto (hecho o actividad)",
        "type": "text",
        "required": true
      },
      {
        "key": "referencia",
        "label": "Referencia (si hubiera)",
        "type": "text",
        "required": false
      },
      {
        "key": "antecedentes",
        "label": "I. Antecedentes",
        "type": "textarea",
        "required": true
      },
      {
        "key": "ampliacion",
        "label": "II. Ampliación detallada",
        "type": "textarea",
        "required": true
      },
      {
        "key": "acciones",
        "label": "III. Acciones adoptadas",
        "type": "textarea",
        "required": true
      },
      {
        "key": "recomendacion",
        "label": "IV. Recomendación",
        "type": "textarea",
        "required": false
      }
    ]
  },
  "68": {
    "id": 68,
    "nombre": "Solicitud",
    "grupo": "A",
    "categoria": "Administrativo",
    "descripcion": "Documento para gestionar o peticionar un derecho o beneficio ante la superioridad.",
    "campos": [
      {
        "key": "destinatarioGrado",
        "label": "Grado del destinatario",
        "type": "text",
        "required": true
      },
      {
        "key": "destinatarioCargo",
        "label": "Cargo del destinatario (MAYÚSCULAS)",
        "type": "text",
        "required": true
      },
      {
        "key": "solicitanteNombre",
        "label": "Nombre del solicitante",
        "type": "text",
        "required": true
      },
      {
        "key": "solicitanteGrado",
        "label": "Grado del solicitante",
        "type": "text",
        "required": true
      },
      {
        "key": "solicitanteCargo",
        "label": "Cargo del solicitante",
        "type": "text",
        "required": true
      },
      {
        "key": "solicitanteDependencia",
        "label": "Dependencia",
        "type": "text",
        "required": true
      },
      {
        "key": "solicitanteCIP",
        "label": "CIP",
        "type": "text",
        "required": true
      },
      {
        "key": "solicitanteDNI",
        "label": "DNI",
        "type": "text",
        "required": true
      },
      {
        "key": "sumilla",
        "label": "Sumilla (motivo breve)",
        "type": "text",
        "required": true
      },
      {
        "key": "exposicion",
        "label": "Exposición (fundamentos)",
        "type": "textarea",
        "required": true
      },
      {
        "key": "peticion",
        "label": "Petición concreta",
        "type": "textarea",
        "required": true
      }
    ]
  }
};

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
