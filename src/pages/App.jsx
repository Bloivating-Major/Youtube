import Head from "../components/molecules/Head";
import { Provider } from "react-redux";
import store from "../lib/store/store";
import { RouterProvider } from "react-router-dom";
import router from  "../Routes/routes";

const App = () => {

  return (
    <Provider store={store}>
      <div className="bg-[#0f0f0f] h-screen overflow-y-auto">
        <Head />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
};

export default App;
