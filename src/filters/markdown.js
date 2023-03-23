const markdownIt = require('markdown-it')({
    html: true,
    breaks: true,
    linkify: true,
  });
  
  module.exports = function markdown(value) {
    if (value) {
      return markdownIt.render(value);
    }
  
    return '';
  };
  