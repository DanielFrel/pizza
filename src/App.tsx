import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "./scss/app.scss";
import MainLayout from "./layouts/MainLayout";

type ContextProp = {
  searachValue: string;
  setSerachValue: (str: string) => void;
};

export const SearchContext = React.createContext<ContextProp>({
  searachValue: "",
  setSerachValue: () => {},
});

const Cart = React.lazy(() => import(/*webpackChunkName: "Cart" */ "./pages/Cart"));
const FullPizza = React.lazy(() => import(/*webpackChunkName: "FullPizza" */ "./pages/FullPizza"));
const NotFound = React.lazy(() => import(/*webpackChunkName: "NotFound" */ "./pages/NotFound"));

function App() {
  const [searachValue, setSerachValue] = React.useState("");

  return (
    <SearchContext.Provider value={{ searachValue, setSerachValue }}>
      <Routes>
        <Route path="/rizza/" element={<MainLayout />}>
          <Route path="/rizza/" element={<Home />} />
          <Route
            path="cart"
            element={
              <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="/rizza/pizza/:id"
            element={
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <FullPizza />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Идёт загрузка...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </SearchContext.Provider>
  );
}

export default App;