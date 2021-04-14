var path = require('path');
var fs = require('fs');

var apos = require('apostrophe')({
    shortName: 'Besthing',

    // See lib/modules for basic project-level configuration of our modules
    // responsible for serving static assets, managing page templates and
    // configuring user accounts.
    baseUrl: process.env.APHE_BASE_URL,
    modules: {
        'multimedia-widgets': {},
        'clearcode-widgets': {},
         'carousel-widgets': {},
        'containers-widgets': {},
        'cards-widgets': {},
        'botones-widgets': {},
        'card-images-text-footer-widgets': {},
        'card-solotexto-widgets': {},

        'card-pequenos-widgets': {},
        'section-dark-widgets': {},
        'two-column-widgets': {},
        'three-column-widgets': {},
        'info-texts-widgets': {},
        'bottom-red-widgets': {},
        'bottom-gris-widgets': {},
        'apostrophe-pages': {
            types: [
                {
                    name: 'default',
                    label: 'Default'
                },
                {
                    name: 'home',
                    label: 'Home'
                }
            ]
        },
        'apostrophe-express': {
            csrf: {
                exceptions: ['/clients/insert']
            },
            csrf: {
                exceptions: ['/condos/get']
            },
            session: {
                secret: 'xyzpdq'
            }
        },
        'clients': {},
        'clients-widgets': {
            extend: 'apostrophe-pieces-widgets'
          },
        // Apostrophe module configuration

        // Note: most configuration occurs in the respective
        // modules' directories. See lib/apostrophe-assets/index.js for an example.

        // However any modules that are not present by default in Apostrophe must at
        // least have a minimal configuration here: `moduleName: {}`

        // If a template is not found somewhere else, serve it from the top-level
        // `views/` folder of the project
        'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') }
        // 'apostrophe-passport': {
        //     strategies: [
        //         {
        //             module: 'passport-fusionauth',
        //             match: 'email',
        //             options: {
        //                 //requestTokenURL: 'https://auth.vrewardsapps.com/request_token',
        //                 authorizationURL: process.env.FUSIONAUTH_URL + '/oauth2/authorize',
        //                 tokenURL: process.env.FUSIONAUTH_URL + '/oauth2/token',
        //                 userProfileURL: process.env.FUSIONAUTH_URL + '/api/user/',
        //                 clientID: fs.readFileSync(process.env.CLIENT_ID, 'utf8'),
        //                 clientSecret: fs.readFileSync(process.env.CLIENT_SECRET, 'utf8'),
        //                 callbackURL: process.env.APHE_BASE_URL + '/auth/oauth2/callback',
        //                 passReqToCallback: false,
        //                 response_type: 'code',
        //                 skipUserProfile: false
        //             }
        //         }
        //     ],
        //     create: {
        //         // Presence of "group" means we'll add them to a group...
        //         group: {
        //             // Called "google"...
        //             title: 'fusionauth',
        //             // With these Apostrophe permissions (admin can do ANYTHING, so be careful)
        //             permissions: ['admin']
        //         }
        //     }
        //     //,
        //     // authenticate: {
        //     //   // minimum scopes for matching logins based on email addresses.
        //     //   // profile is absolutely required, you almost certainly want email too
        //     //   scope: ['profile', 'email']
        //     // }
        // },
        // 'apostrophe-login': {
        //     // We disable it here, by configuring the built-in apostrophe-login` module
        //     localLogin: true
        // },
        // 'apostrophe-db': {
        //     uri: 'mongodb://' + process.env.MONGODB_TCP_ADDR + ':' + process.env.MONGODB_TCP_PORT + '/besthingscms'
        // }
    }
});
