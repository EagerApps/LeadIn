(function(){
  var init, options;

  options = INSTALL_OPTIONS;

  init = function() {
    var script = document.createElement('script');
    script.id = 'LeadinEmbed-' + options.id;
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.setAttribute('crossorigin', 'use-credentials');
    script.src = '//js.leadin.com/js/v1/' + optins.id + '.js';
    document.body.appendChild(script);
  };

  init();
})();
