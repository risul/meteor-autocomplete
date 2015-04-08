Package.describe({
    name: 'risul:autocomplete',
    summary: 'Meteor package for At.js - Add Github like mentions autocomplete to your application',
    version: '0.6.0',
    git: 'https://github.com/risul/meteor-autocomplete'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.0');
    api.use("jquery", "client");
    api.use("risul:caret@0.0.2", "client")
    api.addFiles(['lib/jquery.atwho.css', 'lib/jquery.atwho.js'], ['client']);
});