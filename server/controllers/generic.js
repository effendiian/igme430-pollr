// ////////////////////////
// MEMBERS
// ////////////////////////

// Generate CSRF Token.
const generateToken = (req) => {
    return req.csrfToken();
};

// Returns function for a specific page.
const getPageAction = (page) => {
    return (req, res) => {
        res.render(page, {
            navbarLinks: [ 
              { title: 'Pricing', href: '/pricing' },
              { title: 'Login', href: '/login' },
              { title: 'Signup', href: '/signup' },
            ],
            footerLinks: [
              { title: 'About', href: '/about' },
              { title: 'Contact', href: '/contact' },
            ],
        });
    };
};

// Returns function for a specific page.
const getPageForm = (page) => {
    return (req, res) => {
        res.render(page, {
            csrfToken: generateToken(req),
            navbarLinks: [ 
              { title: 'Pricing', href: '/pricing' },
              { title: 'Login', href: '/login' },
              { title: 'Signup', href: '/signup' },
            ],
            footerLinks: [
              { title: 'About', href: '/about' },
              { title: 'Contact', href: '/contact' },
            ],
        });
    };
};

// Generate a page CSRF token.
const getPageToken = (req, res) => {
    res.json({
        csrfToken: generateToken(req)
    });
};

// Redirect page.
const getPageRedirect = (destination) => {
    return (req, res) => {
        return res.redirect(`${destination}`);
    }
};

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

// Return factory function.
module.exports = {
    getPageToken,
    getPageAction,
    getPageRedirect,
    getPageForm,
}