import * as Blockly from 'blockly/core';
import 'blockly/blocks'
import {luaGenerator} from 'blockly/lua';
import * as En from 'blockly/msg/en'

Blockly.setLocale(En);
import Theme from '@blockly/theme-modern';

import {ContinuousToolbox, ContinuousFlyout, ContinuousMetrics} from '@blockly/continuous-toolbox';

// set the editor background to dark theme
Theme.setComponentStyle('workspaceBackgroundColour', '#1e1e1e');
// also set toolbox bg to dark theme
Theme.setComponentStyle('toolboxBackgroundColour', '#1e1e1e');
// and fg to white
Theme.setComponentStyle('toolboxForegroundColour', '#fff');
// flyout bg to a little bit lighter but still dark theme
Theme.setComponentStyle('flyoutBackgroundColour', '#2b2b2b');
// and fg to white
Theme.setComponentStyle('toolboxForegroundColour', '#fff');
console.log(Theme)
const toolbox = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "contents": [
                {
                    "kind": "BLOCK",

                    "type": "controls_if"
                },
                {
                    "kind": "BLOCK",

                    "type": "logic_compare"
                },
                {
                    "kind": "BLOCK",

                    "type": "logic_operation"
                },
                {
                    "kind": "BLOCK",

                    "type": "logic_negate"
                },
                {
                    "kind": "BLOCK",

                    "type": "logic_boolean"
                },
                {
                    "kind": "block",

                    "type": "logic_null",
                    "disabled": "true"
                },
                {
                    "kind": "BLOCK",

                    "type": "logic_ternary"
                }
            ],
            "name": "Logic",
            "categorystyle": "logic_category"
        },
        {
            "kind": "category",
            "contents": [
                {
                    "kind": "BLOCK",

                    "type": "controls_repeat_ext"
                },
                {
                    "kind": "BLOCK",

                    "type": "controls_repeat",
                    "disabled": "true"
                },
                {
                    "kind": "BLOCK",

                    "type": "controls_whileUntil"
                },
                {
                    "kind": "BLOCK",

                    "type": "controls_for"
                },
                {
                    "kind": "BLOCK",

                    "type": "controls_forEach"
                },
                {
                    "kind": "BLOCK",

                    "type": "controls_flow_statements"
                }
            ],
            "name": "Loops",
            "categorystyle": "loop_category"
        },
        {
            "kind": "category",
            "contents": [
                {
                    "kind": "BLOCK",

                    "type": "math_number",
                    "gap": "32"
                },
                {
                    "kind": "BLOCK",

                    "type": "math_arithmetic"
                },
                {
                    "kind": "BLOCK",

                    "type": "math_single"
                },
                {
                    "kind": "BLOCK",

                    "type": "math_trig"
                },
                {
                    "kind": "BLOCK",

                    "type": "math_constant"
                },
                {
                    "kind": "BLOCK",

                    "type": "math_number_property"
                },
                {
                    "kind": "BLOCK",

                    "type": "math_round"
                },
                {
                    "kind": "BLOCK",

                    "type": "math_on_list"
                },
                {
                    "kind": "BLOCK",

                    "type": "math_modulo"
                },
                {
                    "kind": "BLOCK",

                    "type": "math_constrain"
                },
                {
                    "kind": "BLOCK",

                    "type": "math_random_int"
                },
                {
                    "kind": "BLOCK",

                    "type": "math_random_float"
                },
                {
                    "kind": "BLOCK",

                    "type": "math_atan2"
                }
            ],
            "name": "Math",
            "categorystyle": "math_category"
        },
        {
            "kind": "category",
            "contents": [
                {
                    "kind": "BLOCK",

                    "type": "text"
                },
                {
                    "kind": "BLOCK",

                    "type": "text_multiline"
                },
                {
                    "kind": "BLOCK",

                    "type": "text_join"
                },
                {
                    "kind": "BLOCK",

                    "type": "text_append"
                },
                {
                    "kind": "BLOCK",

                    "type": "text_length"
                },
                {
                    "kind": "BLOCK",

                    "type": "text_isEmpty"
                },
                {
                    "kind": "BLOCK",

                    "type": "text_indexOf"
                },
                {
                    "kind": "BLOCK",

                    "type": "text_charAt"
                },
                {
                    "kind": "BLOCK",

                    "type": "text_getSubstring"
                },
                {
                    "kind": "BLOCK",

                    "type": "text_changeCase"
                },
                {
                    "kind": "BLOCK",

                    "type": "text_trim"
                },
                {
                    "kind": "BLOCK",

                    "type": "text_count"
                },
                {
                    "kind": "BLOCK",

                    "type": "text_replace"
                },
                {
                    "kind": "BLOCK",

                    "type": "text_reverse"
                },
                {
                    "kind": "LABEL",
                    "text": "Input/Output:",
                    "web-class": "ioLabel"
                },
                {
                    "kind": "BLOCK",

                    "type": "text_print"
                },
                {
                    "kind": "BLOCK",

                    "type": "text_prompt_ext"
                }
            ],
            "name": "Text",
            "categorystyle": "text_category"
        },
        {
            "kind": "category",
            "contents": [
                {
                    "kind": "BLOCK",

                    "type": "lists_create_with"
                },
                {
                    "kind": "BLOCK",

                    "type": "lists_create_with"
                },
                {
                    "kind": "BLOCK",

                    "type": "lists_repeat"
                },
                {
                    "kind": "BLOCK",

                    "type": "lists_length"
                },
                {
                    "kind": "BLOCK",

                    "type": "lists_isEmpty"
                },
                {
                    "kind": "BLOCK",

                    "type": "lists_indexOf"
                },
                {
                    "kind": "BLOCK",

                    "type": "lists_getIndex"
                },
                {
                    "kind": "BLOCK",

                    "type": "lists_setIndex"
                },
                {
                    "kind": "BLOCK",

                    "type": "lists_getSublist"
                },
                {
                    "kind": "BLOCK",

                    "type": "lists_split"
                },
                {
                    "kind": "BLOCK",

                    "type": "lists_sort"
                },
                {
                    "kind": "BLOCK",

                    "type": "lists_reverse"
                }
            ],
            "name": "Lists",
            "categorystyle": "list_category"
        },
        {
            "kind": "SEP"
        },
        {
            "kind": "category",
            "name": "Variables",
            "categorystyle": "variable_category",
            "custom": "VARIABLE"
        },
        {
            "kind": "category",
            "name": "Functions",
            "categorystyle": "procedure_category",
            "custom": "PROCEDURE"
        },
        {
            "kind": "SEP"
        }
    ],
};

function loadExtension(extension) {
    for (let i = 0; i < extension.categories.length; i++) {
        let category = extension.categories[i];
        let newCategory = {
            "kind": "category",
            "name": category.name,
            "contents": [],
        }
        for (let i = 0; i < category.blocks.length; i++) {
            let block = category.blocks[i];
            newCategory.contents.push({
                "kind": "BLOCK",
                "type": block.type,
            });
            Blockly.Blocks[block.type] = block.block;
            luaGenerator[block.type] = block.generator;
        }

        toolbox.contents.push(newCategory);
    }
    toolbox.contents.push({"kind": "SEP"});
    workspace.updateToolbox(toolbox);
    workspace.refreshToolboxSelection();
}

// an extension called "Hello World" with two categories:
// one has a block which prints "Hello World" to the console
// the other has a block which prints "Goodbye World" to the console
let HelloWorld = {
    "name": "Hello World", // Users will see this name in the extension manager
    "description": "A simple extension that add blocks which print \"Hello World\" or \"Goodbye World\" to the console.", // Also shown in the extension manager
    "version": "1.0.0", // Must be in format Major.Minor.Patch (see https://semver.org/)
    "ludumVersion": "1.0.0", // The version of Ludum this extension was made for
    "categories": [ // The categories that the extension adds to the left toolbox
        {
            "name": "Hello", // The name of the category
            "blocks": [ // The blocks that the category contains
                {
                    "type": "hello_world", // The internal name of the block
                    "block": { // The block definition (see https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks)
                        "init": function() {
                            this.appendDummyInput()
                                .appendField("Hello World");
                            this.setPreviousStatement(true, null);
                            this.setNextStatement(true, null);
                            this.setColour(230);
                            this.setTooltip("Prints \"Hello World\" to the console.");
                            this.setHelpUrl(""); // Optional, remove if not needed
                        }
                    },
                    "generator": function(block) { // The Lua generator (see https://developers.google.com/blockly/guides/create-custom-blocks/generating-code)
                        return "print(\"Hello World\")\n";
                    }
                }
            ]
        },
        {
            "name": "Goodbye",
            "blocks": [
                {
                    "type": "goodbye_world",
                    "block": {
                        "init": function() {
                            this.appendDummyInput()
                                .appendField("Goodbye World");
                            this.setPreviousStatement(true, null);
                            this.setNextStatement(true, null);
                            this.setColour(230);
                            this.setTooltip("Prints \"Goodbye World\" to the console.");
                            this.setHelpUrl("");
                        }
                    },
                    "generator": function(block) {
                        return "print(\"Goodbye World\")\n";
                    }
                }
            ]
        }
    ]
}

inputDiv = document.getElementById("input");
document.getElementById("extensions").onclick = () => {
    // show the extensions input
    inputDiv.style.display = "block";
}
document.getElementById("load").onclick = () => {
    // get the input eval and load
    // also hide the input
    inputDiv.style.display = "none";
    let extension = eval(`(${document.getElementById("inputTextarea").value})`);
    console.log(extension);
    loadExtension(extension);
}

const workspace = Blockly.inject('workspace', {
    renderer: "zelos",
    theme: Theme,
    zoom: {
        controls: true,
        startScale: 0.9,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2
    },
    toolbox: toolbox,
    plugins: {
        'toolbox': ContinuousToolbox,
        'flyoutsVerticalToolbox': ContinuousFlyout,
        'metricsManager': ContinuousMetrics,
    }
},);
const output = document.getElementById("output");
const outputText = document.getElementById("outputText")
output.onclick = () => {
    output.style.display = "none";
}
document.getElementById("generate").onclick = () => {
    const code = luaGenerator.workspaceToCode(workspace);
    output.style.display = "block";
    outputText.innerHTML = code;
    hljs.highlightElement(outputText);
}