# jQuery.replace.js

## What is it for?

Allows you to search and replace using strings or regular expressions within HTML documents.  Ideal when you want to keep HTML intact but only change text nodes.

**jQuery.replace(string, replacement)**
  
  Finds `string` and replaces with `replacement`.
  
    $('#my_div').replace('half empty', 'half full');
  
**jQuery.replace(regexp, replacement)**

  Finds items matching regexp and replaces all text nodes with the given replacement.
  
    $('#my_div').replace(/\btent\b/, 'tenth'); // replaces word `tent` with `tenth`
  
  Common regular expression flags like `i` and `g` work as well so you can replace more than just the first element it finds.
  
  You can also use a lambda function to replace your string.  The matched string is provided as an argument:
    
    // replaces all instances of `content` with `CONTENT`
    $('#my_div').replace(/content/gi, function(match){ return match.toUpperCase() }).html()); 

## Questions and feedback

    {email: 'gary@talkerapp.com', twitter: '@xutopia'}
