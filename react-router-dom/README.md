```bash
1 Getting-Started
2 Upgrading
3 Routers
- createBrowserRouter : create routes
- createHashRouter : create routes if you are unable to configure web server "#"
- createMemoryRouter : create routes with own history stack in memory
- RouterProvider : provide routes to the app
- createStaticHandler : perform the data fetching and submission on the server
- createStaticRouter : create routes on the server side
- StaticRouterProvider : provide routes to the app on the server side
4 Router Components
- BrowserRouter : is container for route location
- HashRouter : is container route location if you are unable to configure web server "#"
- MemoryRouter : is container route location with own history stack in memory
- NativeRouter : is container route location for React Native App
- Router : is container for routes
- StaticRouter : is container for routes for app rendered in node
5 Route
- Describe route element in the app
  - action : perform action when app sends submission to route
  - errorElement : rendered when exception are thrown
  - lazy : pozwala na załadowanie komponentu, dopiero kiedy będzie potrzebny
  - loader : provide data to the loader before it render
  - shouldRevalidate : define whether component should be updated
6 Components
- Await : used to render deferred values
- Form : wrapper around html form that emulates the browser for client side
- Link : allow to navigate through pages
- NavLink : special link that knows if is active
- Navigate : change location when is rendered
- Outlet : declare place, where child elements should be rendered
- Routes : container for routes
- ScrollRestoration : emulate scroll restoration on location change
7 Hooks
- useActionData : provides data from the previous navigation
- useAsyncError : provides rejection value from the nearest await component
- useAsyncValue : provides resolved data from the nearest await component
- useBeforeUnload : save app data before user navigate away
- useFetcher : to manage interaction event without navigating
- useFetchers : return an array of all inflight fetchers
- useFormAction : resolve default and relative actions to the current context
- useHref : return url
- useInRouterContext : return bool if vomponent is being rendered in router
- useLinkClickHandler : return click event handler for custom Link
- useLinkPressHandler : return press event handler for custom Link
- useLoaderData : return value from loader
- useLocation  : return current location
- matchPath : match url to obtain params
- useMatches : get current route data
- useNavigate : allow to naviagte automatically
- useNavigation : return everythink about a page
- useNavigationType : return current type of navigation
- useOutlet : reruen the element for the child route
- useOutletContext : allow parent to manage state shared with child
- useParams : return params from url
- useResolvedPath : resolve the full pathname against relative to
- useRevalidator : revalidate data for any reason
- useRouteError : return anythink thrown during rendering
- useRouteLoaderData : return data from any currently rendered route
- useRoutes : equivalent of Routes
- useSearchParams : read nad modify query from url
- useSubmit :let programmer submit a form
8 Fetch-Utilities
- json : shortcut for return JSON.stringify...
- redirect : redirection to another route e.g in loader
9 Utilities
- createRoutesFromChildren : allow to create router with Route
- createRoutesFromElements  : allow to create router with Route
- createSearchParams : create url search params
- defer : return promises instead of resolves values
- generatePath : generate route path
- isRouteErrorResponse : return bool if is route error response
10 Guides
- Object.fromEntries() : turn the entire formData into a object