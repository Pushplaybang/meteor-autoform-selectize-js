Package.describe({
  name: 'pushplaybang:autoform-selectize',
  summary: 'Updated Custom "selectize" input type for AutoForm',
  version: '3.0.0',
  git: 'https://github.com/comerc/meteor-autoform-selectize.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('meteor-base@1.0.4');
  api.use('blaze-html-templates@1.0.4');
  api.use('aldeed:autoform@6.0.0');
  api.use('underscore@1.0.10');
  api.addFiles([
    'autoform-selectize.html',
    'autoform-selectize.js',
    'autoform-selectize-input.html',
    'autoform-selectize-input.js',
    'themes/bootstrap3.css',
  ], 'client');
});
