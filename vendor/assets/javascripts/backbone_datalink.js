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
          var attr_name;
          var modelNames;
          var currentModel;
          
          el = $(this);
          value = this.type == "checkbox" ? this.checked : el.val();
          attrs = {};
          currentModel = model;
          
          if (el.attr("name")) {
            attr_name = el.attr("name");
            modelNames = attr_name.split('.')
            attr_name = modelNames.pop()

            modelNames.forEach(function(modelName) {
              currentModel = currentModel.get(modelName);
            });
            
            attrs[attr_name] = value;
          }
          
          return model.set(attrs);
        });
      });
    }
  });
})(jQuery);
