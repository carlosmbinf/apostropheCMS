module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Three Column',
  addFields: [
   {
    name: 'style',
    label: 'Estilos . \n Porfavor, use selectores para q no haya coincidencias con otros componentes en la Páguina ',
    type: 'string'
    // required: true,
    // contextual: true
  },
  {
    name: 'clasecontainerprincipal',
    label: 'Clase del contenedor Principal',
    type: 'string'
    // required: true,
    
  },
  {
    name: 'estilo',
    label: 'Estilo del contenedor Principal',
    type: 'string'
    // required: true,
    
  },
  {
      name: 'clase1',
      type: 'string',
      label: 'Clase del 1er Contenedor'
    },
    {
      name: 'clase2',
      type: 'string',
      label: 'Clase del 2do Contenedor'
    },
    {
      name: 'clase3',
      type: 'string',
      label: 'Clase del 3er Contenedor'
    },
    {
      name: 'one',
      label: 'Contenido del 1er Contenedor',
      type: 'area',
      contextual: true
    },
    {
      name: 'two',
      label: 'Contenido del 2do Contenedor',
      type: 'area',
      contextual: true
    },
    {
      name: 'three',
      label: 'Contenido del 3er Contenedor',
      type: 'area',
      contextual: true
    },
  ]
};

