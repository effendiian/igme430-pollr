// ////////////////////////
// MODULE IMPORTS
// ////////////////////////

const path = require('path');

// ////////////////////////
// MEMBER INIT
// ////////////////////////

// Construction of Link objects.
class Link {
  constructor(title, href){
    this.title = title;
    this.href = href;
  }
}

// Collection of navbar links.
const navbarLinkData = [
  new Link("/pricing", "Pricing"),
  new Link("/login", "Login"),
  new Link("/signup", "Signup"),
];

// Collection of footer links.
const footerLinkData = [
  new Link("/about", "About"),
  new Link("/contact", "Contact"),
];

const helpers = function() {
    let blocks = Object.create(null);
    return {
        extend: function (name,context) {
            var block = blocks[name];
            if (!block) {
                block = blocks[name] = [];
            }

            block.push(context.fn(this));
        },
        block: function (name) {
            var val = (blocks[name] || []).join('\n');

            // clear the block
            blocks[name] = [];
            return val;
        },        
        footerLinks: function() { return footerLinkData; },
        navbarLinks: function() { return navbarLinkData; },
    }
};

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

module.exports = {
  extname: 'handlebars',
  defaultLayout: 'main',
  layoutsDir: path.resolve(`${__dirname}/../views/layouts/`),
  partialsDir: [ 
      path.resolve(`${__dirname}/../views/partials/`),
      path.resolve(`${__dirname}/../views/partials/includes/`),
  ],
  helpers: helpers(),
};
