// ////////////////////////
// MIDDLEWARE FUNCTIONS
// ////////////////////////

// Require a secure HTTP protocol.
const requiresSecure = (req, res, next) => {
    // If not on a secure protocol, redirect to it.
    if(req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(`https://${req.hostname}${req.url}`);
    }
    // If already on secure profile, continue to next middleware.
    return next();
};

// Bypass the security for development purposes.
const bypassSecure = (req, res, next) => {
    next();
}

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

// Select the security based on environmet.
module.exports.requiresSecure = 
    (process.env.NODE_ENV === 'production') 
    ? requiresSecure : bypassSecure;