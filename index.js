/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-study',

  included: function(app) {
    this._super.included(app);

    try {
      var stats = fs.statSync(app.bowerDirectory + '/studyjs/build/study.min.js');
      if (!stats.errno) {
        app.import(app.bowerDirectory + '/studyjs/build/study.min.js');
      }
    } catch (e) {
      console.log('studyjs will not be loaded from bower installation');
    }
  },


};
