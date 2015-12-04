'use strict';
Package.describe({
  name: 'firrae:react-mediumeditor',
  summary: 'MediumEditor wrapped up in a ReactJS component.',
  version: '0.1.0',
  git: 'https://github.com/firrae/react-mediumeditor',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use([
    "ecmascript",
    "less",
    "jquery",
    "mediumeditor:mediumeditor",
    "react"
  ], ['client','server']);

  api.addFiles([
    'editor.jsx',
    'editor.less'
  ], 'client', 'server');

  api.export("MediumEditorComp", "client", "server");
});
