(function(){
  var options, isPreview, init;

  options = INSTALL_OPTIONS;
  isPreview = window.Eager && window.Eager.installs && window.Eager.installs.preview && window.Eager.installs.preview.appId === 'B-yKwrgZisAl';

  init = function() {
    var script = document.createElement('script');
    script.id = 'LeadinEmbed-' + options.id;
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.setAttribute('crossorigin', 'use-credentials');
    script.src = '//js.leadin.com/js/v1/' + options.id + '.js';
    document.body.appendChild(script);
  };

  init();

  if (isPreview) {
    // TODO - Run Leadin demo for the Eager preview
  }
})();
