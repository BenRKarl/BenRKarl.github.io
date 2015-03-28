var should;

require(['should'], function(should){
  should = should;
});

describe('App', function(){
  it('should be defined', function(){
    App.should.be.defined;
  });

  it('should have functions as arguments', function(){
    App.should.have.property('closeVisible');
    App.should.have.property('scrollToggle');
    App.should.have.property('getContentNode');
    App.should.have.property('contentToggle');
    App.should.have.property('toggleThumbnail');
  });

});


