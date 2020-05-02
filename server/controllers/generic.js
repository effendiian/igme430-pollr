// ////////////////////////
// MEMBERS
// ////////////////////////

// Returns function for a specific page.
const getPageAction = (page, options) => {
    return (req, res) => {
        res.render(page, options);
    };
};

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

// Return factory function.
module.exports = {
    getPageAction
}