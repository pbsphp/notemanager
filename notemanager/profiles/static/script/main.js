// After all work done
Ext.onReady(function() {
    // Add csrf token to every ajax request
    // Snippet from stackoverflow
    var token = Ext.util.Cookies.get('csrftoken');
    if(!token){
        Ext.Error.raise("Missing csrftoken cookie");
    } else {
        Ext.Ajax.defaultHeaders = Ext.apply(Ext.Ajax.defaultHeaders || {}, {
            'X-CSRFToken': token
        });
    }


    // Render main notes grid and stretch it to fullscreen
    var viewport = new Ext.Viewport({
        layout: {
            type: 'hbox',
            pack: 'start',
            align: 'stretch'
        },
        items: [grid]
    });
});