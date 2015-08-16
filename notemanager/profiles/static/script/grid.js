// Main grid containing notes
var grid = new Ext.grid.GridPanel({
    store: notesStore,

    plugins: [filters],

    tbar: [
        {
            text: "Add",
            handler: function() {
                var form = new NoteForm({
                    buttons: [
                        {
                            text: "Add",
                            handler: function() {
                                form.getForm().submit({
                                    url: "/notes/create/",
                                    method: "POST",
                                    success: function() {
                                        Ext.Msg.alert("Success",
                                            "Note created.");
                                        notesStore.reload();
                                    },
                                    failure: function() {
                                        Ext.Msg.alert("Error",
                                            "Unable to create note");
                                    }
                                })
                            }
                        }
                    ]
                });

                var win = new NoteFormWindow({
                    items: form
                });

                win.show();
            },
            scope: this
        },
        "-",
        {
            text: "Change",
            handler: function() {
                var selected = grid.getSelectionModel().getSelected();
                if (selected) {

                    var form = new NoteForm({
                        baseCls: "x-plain",
                        url: "/note/",
                        layout: {
                            type: "vbox",
                            align: "stretch"
                        },
                        buttons: [
                            {
                                text: "Change",
                                handler: function() {
                                    form.getForm().submit({
                                        url: "/notes/update/",
                                        method: "POST",
                                        success: function() {
                                        Ext.Msg.alert("Success",
                                            "Note changed.");
                                            notesStore.reload();
                                        },
                                        failure: function() {
                                            Ext.Msg.alert("Error",
                                                "Unable to change note");
                                        }
                                    })
                                }
                            }
                        ]
                    });

                    form.add({
                        xtype: "hidden",
                        name: "id"
                    });

                    form.getForm().loadRecord(selected);

                    var win = new NoteFormWindow({
                        items: form,
                    });

                    win.show();
                }
            },
            scope: this
        },
        "-",
        {
            text: "Delete",
            handler: function() {
                var selected = grid.getSelectionModel().getSelected();
                if (selected) {
                    sendPostRequest("/notes/destroy/", {
                        id: selected.get("id")
                    });
                }
            },
            scope: this
        },
        "-"
    ],

    columns: [
        {
            header: "ID",
            dataIndex: "id",
            filterable: true
        },
        {
            header: "Title",
            dataIndex: "title"
        },
        {
            header: "Favourite",
            dataIndex: "is_favorite",
            xtype: "booleancolumn",
            trueText: "&#9733;",
            falseText: "&#9734;",
            listeners: {
                click: function() {
                    var selected = grid.getSelectionModel().getSelected();
                    if (selected) {
                        var url = (selected.get("is_favorite") ?
                            "/notes/unfavourite/" :
                            "/notes/favourite/");

                        sendPostRequest(url, {
                            id: selected.get("id")
                        });
                    }
                }
            }
        },
        {
            header: "Created at",
            dataIndex: "created_at",
            xtype: "datecolumn",
            format: "d.m.Y g:i",
        },
        {
            header: "Category",
            dataIndex: "category__name"
        },
        {
            header: "Public",
            dataIndex: "uuid",
            xtype: "booleancolumn",
            trueText: "&#9733;",
            falseText: "&#9734;",
            listeners: {
                click: function() {
                    var selected = grid.getSelectionModel().getSelected();
                    if (selected) {
                        var url = (selected.get("uuid") ?
                            "/notes/unshare/" :
                            "/notes/share/");

                        sendPostRequest(url, {
                            id: selected.get("id")
                        });
                    }
                }
            }
        },
        {
            header: "Public link",
            dataIndex: "uuid",
            renderer: getPublicLinkFromUuid,
            sortable: false
        }
    ],
    autoWidth: true,
    autoHeight: true,
    sm: new Ext.grid.RowSelectionModel({
        singleSelect: true,
    }),
    flex: 1,
    title: "User notes",
});
