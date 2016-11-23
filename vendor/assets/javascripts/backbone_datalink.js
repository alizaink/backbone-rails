(function($) {
  return $.extend($.fn, {
    backboneLink: function(model) {
      return $(this).find(":input").each(function() {
        var that = this;
        var el = $(that);
        var name = el.attr("name");
        model.bind("change:" + name, function() {
          if (el.val() != model.get(name))
            el.val(model.get(name));
        });        
        return $(this).bind("change keyup", function() {
          var attrs;
          el = $(this);
          attrs = {};
          attrs[el.attr("name")] = el.val();
          return model.set(attrs);
        });
      });
    }
  });
})(jQuery);
