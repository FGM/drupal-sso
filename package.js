Package.describe({
  name: 'fgm:drupal-sso',
  version: '0.0.4',
  summary: 'A transparent authentication package for Drupal 8 and Meteor 1.2 : deprecated in favor of fgm:accounts-drupal',
  git: 'https://github.com/FGM/drupal-sso',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('arunoda:streams@0.1.17');
  api.use('webapp');

  api.addFiles('lib/constants.js');
  api.addFiles('lib/drupalsso.js');
  api.addFiles('client/helpers.js', 'client');
  api.addFiles('client/sso.js', 'client');
  api.addFiles('server/sso.js', 'server');
  api.addFiles('server/web.js', 'server');

  api.export('DrupalSSO');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fgm:drupal-sso');
  api.addFiles('drupal-sso-tests.js');
});
