module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Carousel-items',
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
    name: 'url',
    label: 'Direccion de la Imagen',
    type: 'url'
    // required: true,
    
  },
  {
    name: 'modulos',
    type: 'area',
    contextual: true
  }
 
  ]
};

