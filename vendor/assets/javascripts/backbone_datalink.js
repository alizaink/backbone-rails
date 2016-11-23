(function($) {
  return $.extend($.fn, {
    backboneLink: function(model) {
      return $(this).find(":input").each(function() {
        var that = this;
        var el = $(that);
        var name = el.attr("name");
        model.bind("change:" + name, function() {
          var start, end;
          
          if (that.selectionStart && that.selectionEnd) {
            start = that.selectionStart;
            end = that.selectionEnd;
          }
          
          var retVal = el.val(model.get(name));
          
          if (that.setSelectionRange)
            that.setSelectionRange(start, end);
          
          return retVal;
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
