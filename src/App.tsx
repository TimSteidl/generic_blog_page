import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/routeConfig.ts";
import { Provider } from "react-redux";
import { store } from "@/store/reduxStore.ts";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
