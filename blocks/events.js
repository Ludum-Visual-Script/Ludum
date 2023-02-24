import * as Blockly from 'blockly/core';
import 'blockly/blocks'
import { luaGenerator } from 'blockly/lua';
window.Generator = luaGenerator;

Blockly.Blocks['event_server_startup'] = {
    init: function() {
        this.setColour("#7500FF");
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
        this.setColour("#7500FF");
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
    var variable_player = window.Generator.nameDB_.getName(block.getFieldValue('PLAYER'), Blockly.Names.NameType.VARIABLE);
    var statements_statement = window.Generator.statementToCode(block, 'STATEMENT');
    var code = 'game.Players.PlayerAdded:Connect(function(' + variable_player + ')\n' + statements_statement + 'end)\n';
    return code
};

Blockly.Blocks['event_player_left'] = {
    init: function() {
        this.setColour("#7500FF");
        this.appendDummyInput()
            .appendField("On player left")
            .appendField(new Blockly.FieldVariable("Player"), "PLAYER");
        this.appendStatementInput("CODE")
            .setCheck(null)
            .appendField("do");
        this.setTooltip("A normal server script anything in here will get ran on server startup!");
        this.setHelpUrl("https://create.roblox.com/docs/reference/engine/classes/Script");
    }
};

window.Generator['event_player_left'] = function(block) {
    var variable_player = window.Generator.nameDB_.getName(block.getFieldValue('PLAYER'), Blockly.Names.NameType.VARIABLE);
    var statements_statement = window.Generator.statementToCode(block, 'STATEMENT');
    var code = 'game.Players.PlayerRemoving:Connect(function(' + variable_player + ')\n' + statements_statement + 'end)\n';
    return code
};

Blockly.Blocks['event_character_added'] = {
    init: function() {
        this.setColour("#7500FF");
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("Player"), "PLAYER")
            .appendField("character")
            .appendField(new Blockly.FieldVariable("Character"), "CHARACTER")
            .appendField("added");
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

window.Generator['event_character_added'] = function(block) {
    var variable_player = window.Generator.nameDB_.getName(block.getFieldValue('PLAYER'), Blockly.Names.NameType.VARIABLE);
    var variable_character = window.Generator.nameDB_.getName(block.getFieldValue('CHARACTER'), Blockly.Names.NameType.VARIABLE);
    var statements_statement = window.Generator.statementToCode(block, 'STATEMENT');
    var code = variable_player + '.CharacterAdded:Connect(function(' + variable_character + ')\n' + statements_statement + 'end)\n';
    return code
};

Blockly.Blocks['event_character_removing'] = {
    init: function() {
        this.setColour("#7500FF");
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("Player"), "PLAYER")
            .appendField("character")
            .appendField(new Blockly.FieldVariable("Character"), "CHARACTER")
            .appendField("removing");
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

window.Generator['event_character_removing'] = function(block) {
    var variable_player = window.Generator.nameDB_.getName(block.getFieldValue('PLAYER'), Blockly.Names.NameType.VARIABLE);
    var variable_character = window.Generator.nameDB_.getName(block.getFieldValue('CHARACTER'), Blockly.Names.NameType.VARIABLE);
    var statements_statement = window.Generator.statementToCode(block, 'STATEMENT');
    var code = variable_player + '.CharacterRemoving:Connect(function(' + variable_character + ')\n' + statements_statement + 'end)\n';
    return code
};