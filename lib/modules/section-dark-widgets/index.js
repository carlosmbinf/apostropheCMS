module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Sección con estilo opcional',
  // contextualOnly: true,
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
    name: 'id',
    label: 'ID del elemento',
    type: 'string'
    // required: true,
    
  },
  {
    name: 'one',
    type: 'area',
    contextual: true
  }
  ]
};

