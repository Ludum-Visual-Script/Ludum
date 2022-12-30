import * as Blockly from 'blockly/core';
import 'blockly/blocks'

Blockly.Blocks['event_server_startup'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("on server startup");
        this.appendStatementInput("CODE")
            .setCheck(null)
            .appendField("do");
        this.setTooltip("A normal server script anything in here will get ran on server startup!");
        this.setHelpUrl("https://create.roblox.com/docs/reference/engine/classes/Script");
    }
};

Blockly.Blocks['event_player_join'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("on player joined")
            .appendField(new Blockly.FieldVariable("Player"), "PLAYER");
        this.appendStatementInput("CODE")
            .setCheck(null)
            .appendField("do");
        this.setTooltip("A normal server script anything in here will get ran on server startup!");
        this.setHelpUrl("https://create.roblox.com/docs/reference/engine/classes/Script");
    }
};

Blockly.Blocks['event_player_leave'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("on player left")
            .appendField(new Blockly.FieldVariable("Player"), "PLAYER");
        this.appendStatementInput("CODE")
            .setCheck(null)
            .appendField("do");
        this.setTooltip("A normal server script anything in here will get ran on server startup!");
        this.setHelpUrl("https://create.roblox.com/docs/reference/engine/classes/Script");
    }
};

Blockly.Blocks['event_character_added'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("on character added")
            .appendField(new Blockly.FieldVariable("Character"), "Character");
        this.appendStatementInput("CODE")
            .setCheck(null)
            .appendField("do");
        this.setTooltip("A normal server script anything in here will get ran on server startup!");
        this.setHelpUrl("https://create.roblox.com/docs/reference/engine/classes/Script");
    }
};