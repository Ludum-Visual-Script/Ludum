import * as Blockly from 'blockly/core';
import 'blockly/blocks'
import { luaGenerator } from 'blockly/lua';
window.Generator = luaGenerator;

Blockly.Blocks['event_server_startup'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("On server startup");
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

window.Generator['event_server_startup'] = function(block) {
    var code = '-- Generated using Ludum Visual Script\n';
    return code
};

Blockly.Blocks['event_player_join'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("On player joined")
            .appendField(new Blockly.FieldVariable("player"), "PLAYER");
        this.appendStatementInput("STATEMENT")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

window.Generator['event_player_join'] = function(block) {
    // var variable_player = window.Generator.nameDB_.getName(block.getFieldValue('PLAYER'), Blockly.Variables.NAME_TYPE);
    var statements_statement = window.Generator.statementToCode(block, 'STATEMENT');
    var code = 'game.Players.PlayerAdded:Connect(function(player)\n' + statements_statement + 'end)\n';
    return code
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