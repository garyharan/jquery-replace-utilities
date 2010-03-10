// Gary Haran => gary@talkerapp.com
// This code is released under MIT licence
(function($){
  var replacer = function(finder, replacement, element, blackList) {
    if (!finder || typeof replacement === 'undefined') {
      return
    }
    var regex = (typeof finder == 'string') ? new RegExp(finder, 'g') : finder;
    
    var childNodes = element.childNodes;
    var len = childNodes.length;
    
    var list = typeof blackList == 'undefined' ? 'html,head,style,title,link,meta,script,object,iframe,pre,a,' : blackList ;
    
    while (len--) {
      var node = childNodes[len];
      
      console.info(node.nodeName.toLowerCase());
      console.info(list);
      console.info(list.indexOf(node.nodeName.toLowerCase()) === -1);
      if (node.nodeType === 1 && true || (list.indexOf(node.nodeName.toLowerCase()) === -1)) {
        replacer(finder, replacement, node, list);
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
  
  $.fn.replace = function(finder, replacement, blackList) {
    return this.each(function(){
      replacer(finder, replacement, $(this).get(0), blackList);
    });
  }
})(jQuery);
