import { useAuth } from "./hooks/use-auth";
import Route from "./router/Route";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";

function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) {
    return <Loading />;
  }
  return (
    <>
      <Route />;
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
      />
    </>
  );
}

export default App;
