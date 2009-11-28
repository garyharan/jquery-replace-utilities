// Gary Haran => gary@talkerapp.com
// This code is released under MIT licence
(function($){
  var replacer = function(finder, replacement, element) {
    if (!finder || typeof replacement === 'undefined') {
      return
    }
    var regex = (typeof finder == 'string') ? new RegExp(finder, 'g') : finder;
    
    var childNodes = element.childNodes;
    var len = childNodes.length;
    
    while (len--) {
      var node = childNodes[len];
      
      if (node.nodeType === 1 && ('html,head,style,title,link,meta,script,object,iframe,pre,'.indexOf(node.nodeName.toLowerCase()) === -1)) {
        replacer(finder, replacement, node);
      }
      
      if (node.nodeType !== 3 || !regex.test(node.data)) {
        continue;
      }
      
      var frag = (function(){
        var html = node.data.replace(regex, replacement);
        var wrap = document.createElement('span');
        var frag = document.createDocumentFragment();
        
        wrap.innerHTML = html;
        
        while (wrap.firstChild) {
          frag.appendChild(wrap.firstChild);
        }
        
        return frag;
      })();
      
      var parent = node.parentNode;
      parent.insertBefore(frag, node);
      parent.removeChild(node);
    }
  }
  
  $.fn.replace = function(finder, replacement){
    return this.each(function(){
      replacer(finder, replacement, $(this).get(0));
    })
  } 
})(jQuery);
