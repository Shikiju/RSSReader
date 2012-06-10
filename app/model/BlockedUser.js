/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * @class RSS.model.Feed
 * @extends Ext.data.Model
 * Model which contains all the information related
 * to a single Feed managed by the application.
 */
Ext.define('RSS.model.BlockedUser', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'name', type: 'string' },
            { name: 'long', type: 'string' },
            { name: 'lat', type: 'string' }
        ],
        /* This model use a localstorage proxy to be able to save
         * all the user feeds locally without needing to be specified 
         * by the user every time he open the application. */
        proxy: {
            type: 'localstorage',
            id: 'blockedusers'
        }
    }
});