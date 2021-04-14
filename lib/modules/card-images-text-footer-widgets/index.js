module.exports = {
  extend: 'apostrophe-widgets',
  label: 'CARD img/text/footer',
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
    name: 'id',
    label: 'ID del elemento',
    type: 'string'
    // required: true,
    // contextual: true
  },{
    name: 'link',
    label: 'LINK del elemento',
    type: 'string'
    // required: true,
    // contextual: true
  },
  {
    name: 'imag',
    label: 'Inserte la imagen',
    type: 'area',
    options: {
      widgets: {          
        'apostrophe-images': {
          limit: 1,
          minSize: [ 200, 200 ],
          addLabel: 'Inserte la imagen',
          editLabel: 'Cambie la imagen',
          controls: {
            movable: false,
            removable: false,
            position: 'bottom-right'
          }
        }
      }
    }
  },{
  name: 'header',
  label: 'Contenido del header',
  type: 'area',
  options: {
    widgets: {
      'apostrophe-rich-text': {
       toolbar: [ 'Styles', 'Bold', 'Italic', 'Link', 'Anchor', 'Unlink', 'BulletedList' ],
       styles: [
       { name: 'H1', element: 'h1' },
       { name: 'H2', element: 'h2' },
       { name: 'H3', element: 'h3' },
       { name: 'H4', element: 'h4' },
       { name: 'H5', element: 'h5' }
       ]
     }
   }
 }
},
{
  name: 'footer',
  label: 'Contenido del footer',
  type: 'area',
  options: {
    widgets: {
      'apostrophe-rich-text': {
       toolbar: [ 'Styles', 'Bold', 'Italic', 'Link', 'Anchor', 'Unlink', 'BulletedList' ],
       styles: [
       { name: 'H1', element: 'h1' },
       { name: 'H2', element: 'h2' },
       { name: 'H3', element: 'h3' },
       { name: 'H4', element: 'h4' },
       { name: 'H5', element: 'h5' }
       ]
     }
   }
 }
}
  ]
};


//CARD CON IMAGEN TEXTO Y FOOTER AMARILLO
