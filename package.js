'use strict';
Package.describe({
  name: 'firrae:react-mediumeditor',
  summary: 'MediumEditor wrapped up in a ReactJS component.',
  version: '0.1.5',
  git: 'https://github.com/firrae/react-mediumeditor',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.1');

  api.use([
    "ecmascript",
    "less",
    "jquery",
    "mediumeditor:mediumeditor@5.2.0",
    "react@0.14.1"
  ], ['client','server']);

  api.addFiles([
    'editor.jsx',
    'editor.less'
  ], 'client', 'server');

  api.export("MediumEditorComp", "client", "server");
});
