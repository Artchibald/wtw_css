requirejs.config({
    paths: {
        'JET_BASE_URL': 'https://static.oracle.com/cdn/jet/11.0.0/default/js',
        'LIB_BASE_URL': 'https://static.oracle.com/cdn/jet/11.0.0/3rdparty',
        '3RD_LIB_BASE_URL': '../lib/3rdparty'
    },

    map: {
        '*': {
            'knockout':                 'LIB_BASE_URL/knockout/knockout-3.5.1',
            'knockout-mapping':         'LIB_BASE_URL/knockout/knockout.mapping-latest',
            'jquery':                   'LIB_BASE_URL/jquery/jquery-3.6.0.min',
            'jqueryui-amd':             'LIB_BASE_URL/jquery/jqueryui-amd-1.12.1.min',
            'hammerjs':                 'LIB_BASE_URL/hammer/hammer-2.0.8.min',
            'promise':                  'LIB_BASE_URL/es6-promise/es6-promise.min',
            'signals':                  'LIB_BASE_URL/js-signals/signals.min',
            'ojdnd':                    'LIB_BASE_URL/dnd-polyfill/dnd-polyfill-1.0.2.min',
            'customElements':           'LIB_BASE_URL/webcomponents/custom-elements.min',

            'ojs':                      'JET_BASE_URL/min',
            'ojL10n':                   'JET_BASE_URL/ojL10n',
            'ojtranslations':           'JET_BASE_URL/resources',

            'crossroads':               '3RD_LIB_BASE_URL/crossroads/crossroads.min',
            'history':                  '3RD_LIB_BASE_URL/history/history.iegte8.min',
            'codemirror':               '3RD_LIB_BASE_URL/codemirror/v5.8.0',
            'ckeditor':                 '3RD_LIB_BASE_URL/ckeditor/v4.14.0/ckeditor',
            'bots':                     '3RD_LIB_BASE_URL/bots-client-sdk/v21.08/web-sdk',
            'preact':                   'LIB_BASE_URL/preact/dist/preact.umd',
        }
    },

    shim: {
        'LIB_BASE_URL/jquery/jquery-3.6.0.min': {
            'exports': '$'
        },
        '3RD_LIB_BASE_URL/crossroads/crossroads.min': {
            'deps': ['signals'],
            'exports': 'crossroads'
        },
        '3RD_LIB_BASE_URL/ckeditor/v4.14.0/ckeditor': {
            'exports': 'CKEDITOR'
        },
        '3RD_LIB_BASE_URL/bots-client-sdk/v21.08/web-sdk': {
            'exports': 'BotSDK'
        }
    },

    waitSeconds: 60
});
