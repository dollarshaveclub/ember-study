/*jshint node:true*/
module.exports = {
  description: 'ember-study',

  afterInstall() {
    return this.addBowerPackagesToProject([
      { name: 'studyjs', target: '1.1.2' }
    ]);
  }

};
