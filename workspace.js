import * as Blockly from 'blockly/core';
import 'blockly/blocks'
import { luaGenerator } from 'blockly/lua';
import * as En from 'blockly/msg/en'

// Declare custom blocks
import './blocks/events.js';

Blockly.setLocale(En);
import Theme from './theme.js';
import hljs from './packages/highlight.js';
import { ContinuousToolbox, ContinuousFlyout, ContinuousMetrics } from '@blockly/continuous-toolbox';

console.log(Theme)
const toolbox = {
    "kind": "categoryToolbox",
    "contents": [{
            "kind": "category",
            "contents": [{
                    "kind": "BLOCK",

                    "type": "event_server_startup"
                },
                {
                    "kind": "BLOCK",

                    "type": "event_player_join"
                },
                {
                    "kind": "BLOCK",

                    "type": "event_player_left"
                },
                {
                    "kind": "BLOCK",

                    "type": "event_character_added"
                },
                {
                    "kind": "BLOCK",

                    "type": "event_character_removing"
                }
            ],
            "name": "Events",
            "categorystyle": "events_category"
        },
        {
            "kind": "category",
            "contents": [{
                    "kind": "BLOCK",

                    "type": "controls_if"
                },
                {
                    "kind": "BLOCK",

                    "type": "controls_repeat_ext"
                },
                {
                    "kind": "BLOCK",

                    "type": "controls_repeat",
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
            "name": "Statements",
            "categorystyle": "statements_category"
        },
        {
            "kind": "category",
            "contents": [{
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
            "name": "Operators",
            "categorystyle": "operators_category"
        },
        {
            "kind": "category",
            "contents": [{
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
            "name": "Strings",
            "categorystyle": "strings_category"
        },
        {
            "kind": "category",
            "contents": [{
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
            "name": "Tables",
            "categorystyle": "tables_category"
        },
        {
            "kind": "SEP"
        },
        {
            "kind": "category",
            "name": "Variables",
            "categorystyle": "variables_category",
            "custom": "VARIABLE"
        },
        {
            "kind": "category",
            "name": "Functions",
            "categorystyle": "funtions_category",
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

        //Theme.categoryStyles[category.name] = category.category_style

        let newCategory = {
            "kind": "category",
            "name": category.name,
            "contents": [],
            "colour": category.category_style,
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
    toolbox.contents.push({ "kind": "SEP" });
    workspace.updateToolbox(toolbox);
    workspace.refreshToolboxSelection();
    //workspace.refreshTheme();
    console.log("Sucessfully loaded extension");
}


let inputDiv = document.getElementById("input");
document.getElementById("extensions").onclick = () => {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {

        var file = e.target.files[0];

        var reader = new FileReader();
        reader.readAsText(file, 'UTF-8');

        reader.onload = readerEvent => {
            var content = readerEvent.target.result;
            loadExtension(eval(content));
        }

    }

    input.click();
    //inputDiv.style.display = "block";
}

// document.getElementById("load").onclick = () => {
//     inputDiv.style.display = "none";
//     let extension = eval(`(${document.getElementById("inputTextarea").value})`);
//     console.log(extension);
//     loadExtension(extension);
// }

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
}, );
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