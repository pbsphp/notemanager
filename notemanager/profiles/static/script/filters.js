// Notes grid filter config
var filters = new Ext.ux.grid.GridFilters({
    local: true,
    filters: [
        {
            type: "string",
            dataIndex: "title"
        },
        {
            type: "date",
            dataIndex: "created_at"
        },
        {
            type: "boolean",
            dataIndex: "is_favorite"
        }
    ]
});
