// Store for notes
var notesStore = new Ext.data.JsonStore({
    url: "/notes/",
    root: "notes",
    autoLoad: true,
    fields: [
        "id",
        "title",
        "created_at",
        "category__id",
        "category__name",
        "is_favorite",
        "text",
        "uuid"
    ],
    sortInfo: {
        field: "created_at",
        direction: "DESC",
    }
});


// Store for categories
var categoriesStore = new Ext.data.JsonStore({
    url: "/notes/categories/",
    root: "categories",
    autoLoad: true,
    fields: [
        "id",
        "name"
    ]
});
