module.exports = {
	extend: 'apostrophe-widgets',
	label: 'TIPO DE CARD 2',
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
    name: 'info',
    label: 'Inserte la Info',
    type: 'area',
    options: {
      widgets: {          
        'info': {}
      }
    }
  },{
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
    name: 'title',
    label: 'Título',
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
 },{
  name: 'content',
  label: 'Contenido',
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

