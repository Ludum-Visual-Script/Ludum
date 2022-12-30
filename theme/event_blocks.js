Blockly.Blocks['event_server_startup'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("on server startup");
        this.setTooltip("A normal server script anything in here will get ran on server startup!");
        this.setHelpUrl("https://create.roblox.com/docs/reference/engine/classes/Script");
    }
};