import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import NavBar from "../pages/shared/navBar/NavBar";

const MainLayout = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  return (
    <div>
      {navigation.state === "loading" ? (
        "loading"
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
