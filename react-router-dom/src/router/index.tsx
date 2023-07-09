import { createBrowserRouter, createRoutesFromElements, Route, json, redirect } from 'react-router-dom'
import { RootLayout } from '../layouts'
import { AboutPage, HomePage, InfoPage } from '../pages'
import { ErrorBoundary } from '../components';

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route
        index
        element={<HomePage />}
      />
      <Route
        path='about'
        lazy={() => import("../lazy/about")}
        element={<AboutPage />}

        loader={async () => {
          const user = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
          if (!user) redirect("/");
          return "laoder data"
        }}
      />
      <Route
        path='info/:infoId'
        element={<InfoPage />}
        errorElement={<ErrorBoundary />}
        shouldRevalidate={({ currentUrl }) => {
          return currentUrl.pathname === "info/777"
        }}
        action={({ params }) => {
          if (params.userId) {
            const res = fetch(`https://jsonplaceholder.typicode.com/todos/1`);
            return json(res);
          } else {
            return {}
          }
        }}
      />
    </Route>
  )
)