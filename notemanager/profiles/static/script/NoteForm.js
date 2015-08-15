(function() {
    NoteForm = Ext.extend(Ext.form.FormPanel, {
        baseCls: "x-plain",
        url: "/note/",
        labelWidth: 90,
        bodyStyle:'padding: 5px 5px 0',

        layout: {
            type: "vbox",
            align: "stretch"
        },

        initComponent: function() {
            Ext.applyIf(this, {
                labelWidth: 70,
                items: [
                    {
                        fieldLabel: "Title",
                        name: "title",
                        xtype: "textfield",
                        plugins: [ Ext.ux.FieldLabeler ],
                    },
                    {
                        fieldLabel: "Category",
                        name: "category__id",
                        xtype: "combo",
                        hiddenName: "category__id",
                        emptyText: "Select one...",
                        triggerAction: "all",
                        store: categoriesStore,
                        displayField: "name",
                        valueField: "id",
                        forceSelection: true,
                        allowBlank: false,
                        editable: false,
                        plugins: [ Ext.ux.FieldLabeler ],
                    },
                    {
                        fieldLabel: "Text",
                        name: "text",
                        xtype: "htmleditor"
                    },
                ]
            });

            NoteForm.superclass.initComponent.call(this);
        }
    });
})();
