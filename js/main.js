$(document).ready(function(){
  var feed = new Instafeed({
    get: 'user',
        limit:100,
        userId: '282888917',
        accessToken: '282888917.1677ed0.0c94546314fb49e8b9655ae1caf2ceb5',
        template: '<a class="col-lg-6" href="{{link}}"><img class="img-fluid" src="{{image}}" /></a>',
        filter: function(image) {
            return image.tags.indexOf('ngopi') >= 0;
        },
        sortBy:'most-commented'
  });
  feed.run();
})
