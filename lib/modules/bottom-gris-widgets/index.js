module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Bottom Gris',
  // contextualOnly: true
   addFields: [
  {
    name: 'style',
    label: 'Estilos . \n Porfavor, use selectores para q no haya coincidencias con otros componentes en la Páguina ',
    type: 'string'
    // required: true,
    // contextual: true
  },
  {
    name: 'text',
    label: 'Texto del Botón',
    type: 'string',
    required: true
    // contextual: true
  }
 ]
 
};

