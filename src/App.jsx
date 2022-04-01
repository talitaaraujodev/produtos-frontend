import React, { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
const Routes = lazy(()=> import("./Routes"));
const App = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
    </React.Fragment>
  );
};

export default App;
