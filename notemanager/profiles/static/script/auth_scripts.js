// Run on register and login pages
// ONLY after setting 'window.page' global variable
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

    // Login/signup form
    var form = new Ext.form.FormPanel({
        url: page.url,
        method: "POST",
        standardSubmit: true,
        labelWidth: 75,
        bodyStyle:'padding:5px 5px 0',


        defaultType: 'textfield',
        items: page.formFields,
        buttons: [{
            text: "submit",
            handler: function() {
                form.getForm().submit();
            }
        }]
    });


    // Login/signup form window
    var win = new Ext.Window({
        layout: "fit",
        width: 300,
        height: 200,
        closable: false,
        plain: true,
        items: form,
        title: "Login",
    });
    win.show(this);

    if (page.error) {
        Ext.MessageBox.alert("Error!", page.error);
    }

});
