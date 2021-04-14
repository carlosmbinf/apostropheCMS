module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Insertar Código html',
  // contextualOnly: true,
  addFields: [
  {
      name: 'style',
      label: 'Insertar Estilo en el HTML',
      help: 'Porfavor, use selectores para q no haya coincidencias con otros componentes en la Páguina ',
      type: 'string',
      textarea: true
      
    },
    {
      name: 'element',
      label: 'Insertar Elemento HTML',
      help: 'Inserte el Tipo de Elemento html a insertar en el documento',
      type: 'string'
      // textarea: true
      
    },
    {
      name: 'id',
      label: 'Insertar ID del Elemento HTML',
      help: 'Inserte el ID del Elemento html a insertar en el documento',
      type: 'string'
      // textarea: true
      
    },
    {
      name: 'class',
      label: 'Insertar Clase del Elemento HTML',
      help: 'Inserte la Clase en Elemento html a insertar en el documento',
      type: 'string',
      textarea: true
      
    },
    {
      name: 'estilo',
      label: 'Insertar Estilo del Elemento HTML',
      help: 'Inserte el Estilo del Elemento html a insertar en el documento',
      type: 'string',
      textarea: true
      
    },
    {
      name: 'caracteristicas',
      label: 'Insertar Caracteristicas del Elemento HTML',
      help: 'Inserte las caracteristicas, como la clase, estilos para el Elemento html a insertar en el documento',
      type: 'string',
      textarea: true
      
    },
    {
      name: 'texto',
      label: 'Insertar Texto',
      help: 'Inserte el Texto',
      type: 'string',
      textarea: true
      
    },
    {
      name: 'modulo',
      label: 'Insertar Modulos HTML',
      type: 'area',
      // textarea: true
      contextual: true
    }
  ]
};

