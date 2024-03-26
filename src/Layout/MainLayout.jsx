import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

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
