/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Modern theme.
 */

import Blockly from 'blockly/core';

export default Blockly.Theme.defineTheme('modern', {
    'base': Blockly.Themes.Classic,
    'blockStyles': {
        'colour_blocks': {
            'colourPrimary': '#a5745b',
            'colourSecondary': '#dbc7bd',
            'colourTertiary': '#845d49',
        },
        'list_blocks': {
            'colourPrimary': '#7569f0',
            'colourSecondary': '#aba3ff',
            'colourTertiary': '#292366',
        },
        'logic_blocks': {
            'colourPrimary': '#ffc21c',
            'colourSecondary': '#ffdb78',
            'colourTertiary': '#967d38',
        },
        'loop_blocks': {
            'colourPrimary': '#ffc21c',
            'colourSecondary': '#ffdb78',
            'colourTertiary': '#967d38',
        },
        'math_blocks': {
            'colourPrimary': '#76e05c',
            'colourSecondary': '#b5ffa3',
            'colourTertiary': '#347325',
        },
        'procedure_blocks': {
            'colourPrimary': '#e01b1b',
            'colourSecondary': '#ff8282',
            'colourTertiary': '#5c0c0c',
        },
        'text_blocks': {
            'colourPrimary': '#27c4b4',
            'colourSecondary': '#69fff0',
            'colourTertiary': '#147067',
        },
        'variable_blocks': {
            'colourPrimary': '#cc45ca',
            'colourSecondary': '#f797f6',
            'colourTertiary': '#691e68',
        },
        'variable_dynamic_blocks': {
            'colourPrimary': '#cc45ca',
            'colourSecondary': '#f797f6',
            'colourTertiary': '#691e68',
        },
        'hat_blocks': {
            'colourPrimary': '#a55b99',
            'colourSecondary': '#dbbdd6',
            'colourTertiary': '#84497a',
            'hat': 'cap',
        },
    },
    'categoryStyles': {
        'events_category': {
            'colour': '#ffffff',
        },
        'statements_category': {
            'colour': '#ffc21c',
        },
        'operators_category': {
            'colour': '#76e05c',
        },
        'strings_category': {
            'colour': '#27c4b4',
        },
        'tables_category': {
            'colour': '#7569f0',
        },
        'variables_category': {
            'colour': '#cc45ca',
        },
        'funtions_category': {
            'colour': '#e01b1b',
        },
    },
    'componentStyles': {},
    'fontStyle': {},
    'startHats': null,
});