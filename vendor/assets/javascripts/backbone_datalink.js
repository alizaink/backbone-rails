(function($) {
  return $.extend($.fn, {
    backboneLink: function(model) {
      return $(this).find(":input").each(function() {
        var el, name;
        el = $(this);
        name = el.attr("name");
        model.bind("change:" + name, function() {
          var start, end;
          
          if (el.selectionStart && el.selectionEnd) {
            start = el.selectionStart;
            end = el.selectionEnd;
          }
          
          var retVal = el.val(model.get(name));
          
          if (el.setSelectionRange)
            el.setSelectionRange(start, end);
          
          return retVal;
        });
        return $(this).bind("keyup", function() {
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
