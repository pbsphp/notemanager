
// Generate html link from uuid
function getPublicLinkFromUuid(uuid) {
    if (uuid) {
        var tpl = new Ext.Template(
            "<a href=\"{host}/notes/{uuid}\" \
                target=\"_blank\"> \
                {host}/notes/{uuid}</a>");

        return tpl.apply({
            host: window.location.origin,
            uuid: uuid
        });
    }
    return "";
}


// Send POST query to given url with given params
function sendPostRequest(url, params) {
    Ext.Msg.confirm(
        "Submit", "Are you sure?",
        function(choice) {
            if (choice == "yes") {
                Ext.Ajax.request({
                    url: url,
                    method: "POST",
                    success: function() {
                        notesStore.reload();
                    },
                    failure: function() {
                        Ext.Msg.alert(
                            "Fail",
                            "Action failed");
                    },
                    params: params
                });
            }
        }
    );
}
