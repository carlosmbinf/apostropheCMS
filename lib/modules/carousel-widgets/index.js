module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Carousels',
  // contextualOnly: true,
  addFields: [
  
 {
    name: 'style',
    label: 'Estilos . \n Porfavor, use selectores para q no haya coincidencias con otros componentes en la Páguina ',
    type: 'string'
    // required: true,
    // contextual: true
  },
  // {
  //   name: 'cantidadCarousel',
  //   label: 'Cantidad de Carousels',
  //   type: 'integer',
  //   // required: true
    
  // },
  {
    name: 'id',
    label: 'ID del elemento',
    type: 'string'
    // required: true,
    
  },
  {
    name: 'items',
    type: 'area',
  }
  ]
};

