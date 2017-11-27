'use strict';

const path = require('path');
const del = require('del');

const dirname = path.dirname( process.execPath );

(async () => {
    await del([ `${ dirname }/**/.DS_Store` ]);

    console.log( 'success' );
})();
