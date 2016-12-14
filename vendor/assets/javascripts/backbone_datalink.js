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
        return $(this).bind("change input", function() {
          var attrs;
          var value;
          el = $(this);
          value = this.type == "checkbox" ? this.checked : el.val();
          attrs = {};
          
          if (el.attr("name"))
            attrs[el.attr("name")] = value;
          
          return model.set(attrs);
        });
      });
    }
  });
})(jQuery);
