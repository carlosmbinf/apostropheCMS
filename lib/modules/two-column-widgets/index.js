module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Two Column',
  
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
      name: 'clase',
      type: 'string',
      label: 'Clase del primer contenedor'
    },
    {
      name: 'clases',
      type: 'string',
      label: 'Clase del segundo contenedor'
    },
    {
      name: 'one',
      type: 'area',
     label: 'Contenido del 1er Contenedor',
      contextual: true
    },
    {
      name: 'two',
      type: 'area',
     label: 'Contenido del 2do Contenedor',
      contextual: true
    }
  ]

};