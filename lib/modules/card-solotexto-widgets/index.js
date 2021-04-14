module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Card Solo Texto',
  contextualOnly: true,
  addFields: [
  {
    name: 'style',
    label: 'Estilos . \n Porfavor, use selectores para q no haya coincidencias con otros componentes en la Páguina ',
    type: 'string'
    // required: true,
    // contextual: true
  },
    {
      name: 'title',
      type: 'area'
      // contextual: true
    },
    {
      name: 'subtitle',
      type: 'area'
      // contextual: true
    },
    {
      name: 'texts',
      type: 'area'
      // contextual: true
    },
    
  ]
};


