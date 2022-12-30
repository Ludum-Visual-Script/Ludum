import * as Blockly from 'blockly/core';
import 'blockly/blocks'
import { luaGenerator } from 'blockly/lua';
window.Generator = luaGenerator;

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

window.Generator['event_server_startup'] = function(block) {
    return "-- Generated using Ludum Visual Script\n";
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

// Uncaught TypeError: Cannot read properties of undefined (reading 'nameDB_')
//     at window.Generator.event_player_join (events.js:38:39)
//     at r.CodeGenerator$$module$build$src$core$generator.blockToCode (generator.ts:233:21)
//     at r.CodeGenerator$$module$build$src$core$generator.workspaceToCode (generator.ts:125:23)
//     at document.getElementById.onclick (workspace.js:409:31)

window.Generator['event_player_join'] = function(block) {
    var variable_player = Blockly.Lua.nameDB_.getName(block.getFieldValue('PLAYER'), Blockly.Variables.NAME_TYPE);
    var statements_statement = Blockly.Lua.statementToCode(block, 'STATEMENT');
    // TODO: Assemble Lua into code variable.
    var code = '...\n';
    return code;
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