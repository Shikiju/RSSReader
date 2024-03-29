/**
 * @author Andrea Cammarata (@AndreaCammarata)
 * @class RSS.store.Feeds
 * @extends Ext.data.Store
 * Store which contains all the feeds specified
 * by the user and managed by the application.
 */
Ext.define('RSS.store.BlockedUsers', {
    extend: 'Ext.data.Store',
    config: {
        model: 'RSS.model.BlockedUser',
        autoLoad: true,
        autoSync: true,
        reader: {
            type: 'json'
        }
    }    
});