(function() {
    NoteForm = Ext.extend(Ext.form.FormPanel, {
        baseCls: "x-plain",
        url: "/note/",

        layout: {
            type: "vbox",
            align: "stretch"
        },

        initComponent: function() {
            Ext.applyIf(this, {
                items: [
                    {
                        fieldLabel: "Title",
                        name: "title",
                        xtype: "textfield"
                    },
                    {
                        fieldLabel: "Category",
                        name: "category__id",
                        xtype: "combo",
                        hiddenName: "category__id",
                        emptyText: "Select one...",
                        triggerAction: "all",
                        store: window.categoriesStore,
                        displayField: "name",
                        valueField: "id",
                        forceSelection: true,
                        allowBlank: false,
                        editable: false,
                    },
                    {
                        fieldLabel: "Make favorite?",
                        name: "is_favorite",
                        xtype: "checkbox"
                    },
                    {
                        fieldLabel: "Text",
                        name: "text",
                        xtype: "textarea"
                    },
                ]
            });

            NoteForm.superclass.initComponent.call(this);
        }
    });
})();
