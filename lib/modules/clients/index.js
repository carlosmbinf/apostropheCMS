module.exports = {
    extend: 'apostrophe-pieces',
    name: 'clients',
    label: 'clients',
    alias: 'clients',
    //Estos campos por ahora se estan ignorando
    //la collection acepta cualquier cosa
    addFields: [
        {
            name: 'title',
            label: 'Full Name',
            type: 'string',
            required: true,
            contextual: true
          },
        {
          name: 'firstName',
          label: 'First Name',
          type: 'string',
          required: true
        },
        {
          name: 'lastName',
          label: 'Last Name',
          type: 'string',
          required: true
        },
        {
          name: 'body',
          label: 'Biography',
          type: 'area',
          options: {
            widgets: {
              'apostrophe-rich-text': {
                toolbar: [ 'Bold', 'Italic', 'Link', 'Unlink' ]
              },
              'apostrophe-images': {}
            }
          }
        },
        {
          name: 'phone',
          label: 'Phone',
          type: 'string'
        },
        {
          name: 'thumbnail',
          label: 'Thumbnail',
          type: 'singleton',
          widgetType: 'apostrophe-images',
          options: {
            limit: 1,
            minSize: [ 200, 200 ],
            aspectRatio: [ 1, 1 ]
          }
        }
      ],
      arrangeFields: [
        {
          name: 'contact',
          label: 'Contact',
          fields: [ 'firstName', 'lastName', 'phone' ]
        },
        {
          name: 'admin',
          label: 'Administrative',
          fields: [ 'slug', 'published', 'tags' ]
        },
        {
          name: 'content',
          label: 'Biographical',
          fields: [ 'thumbnail', 'body' ]
        }
      ],
    

    construct: function (self, options) {
        
        // self.apos.app.post('/clients/insert', function (req, res) {
        //     self.apos.db.collection('clients', (error, collection) => {
        //         if (error) {
        //             res.send({ status: 400, error: error.message });
        //         }
        //         collection.insert({ createdAt: new Date(), ...req.body });
        //         res.send({ status: 200 })
        //     })
        // });
        
        self.beforeSave = function(req, piece, options, callback) {
            piece.title = piece.firstName + ' ' + piece.lastName;
            return callback();


    }
}
}