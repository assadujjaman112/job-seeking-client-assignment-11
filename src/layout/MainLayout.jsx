import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import NavBar from "../pages/shared/navBar/NavBar";
import PageLoader from "../components/PageLoader";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <ScrollRestoration />
      {navigation.state === "loading" ? (
        <PageLoader />
      ) : (
        <div>
          <NavBar></NavBar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
