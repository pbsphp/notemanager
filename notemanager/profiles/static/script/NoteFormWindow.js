(function() {
    NoteFormWindow = Ext.extend(Ext.Window, {
        title: "Add note",
        collapsible: true,
        maximizable: true,
        width: 750,
        height: 500,
        minWidth: 300,
        minHeight: 200,
        layout: "fit",
        plain: true,
        bodyStyle: "padding: 5px;",
        buttonAlign: "center",

        initComponent: function() {
            NoteFormWindow.superclass.initComponent.call(this);
        }
    });
})();
