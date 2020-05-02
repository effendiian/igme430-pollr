// ////////////////////////
// MEMBER INIT
// ////////////////////////

// An action pairs a pattern with a callback.
class Endpoint {

    // Constructor.
    constructor(pattern, callback){
        this.pattern = pattern;
        this.callback = callback;
    }

    // Set the path.
    registerPath(pattern) {
        this.pattern = pattern;
    }

    // Set the callback.
    registerCallback(callback) {
        this.callback = callback;
    }

    // Configure an express application.
    configure(app, method) {
        app[method](this.pattern, this.callback);
        return app;
    }

}

// A route is a pairing of a method with an endpoint.
class Route {

    // Constructor.
    constructor(method, endpoint){
        this.method = method;
        this.endpoint = endpoint;
    }

    registerMethod (method) {
        this.method = method;
    }

    registerEndpoint ({ pattern, callback }) {
        this.endpoint = new Endpoint(pattern, callback);
    }

    // Configure an express application to use the specified route.
    configure(app) {
        this.action.configure(app, this.method);
        return app;
    }

}

// Route collection used to configure routes for an express application.
class RouteCollection {

    // Construct the collection.
    constructor(routes){
        this.routes = routes || [];
    }

    // Push new route onto the collection. (Assigns them in order when configure is called).
    addRoute(route) {
        this.routes.push(route);
    }

    // Constructs a new route and adds it.
    registerRoute( method, { pattern, callback }){
        this.addRoute(new Route(method, { pattern, callback }));
    }

    // Helper method shortcut functions.

    head({pattern, callback}) {
        this.registerRoute('head', pattern, callback);
    }

    get({pattern, callback}) {
        this.registerRoute('get', pattern, callback);
    }
    
    post({pattern, callback}) {
        this.registerRoute('post', pattern, callback);
    }
    
    put({pattern, callback}) {
        this.registerRoute('put', pattern, callback);
    }    

    delete({pattern, callback}) {
        this.registerRoute('delete', pattern, callback);
    }

    // Add all stored 
    configure(app) {
        // Configures in order.
        this.routes.forEach((route) => {
            route.configure(app);
        });
        return app;
    }

};


// ////////////////////////
// MODULE EXPORTS
// ////////////////////////
module.exports = {
    Endpoint,
    Route,
    RouteCollection
};