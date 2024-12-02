import { Divider } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import FooterCustom from "./components/Footer/FooterCustom";
import Header from "./components/Header/Header";
import Page404 from "./pages/Page404";
import { publicRoutes } from "./routes/routes";

const App = () => {
  const location = useLocation();
  // lấy lọc đường dẫn có header và không có header
  const showHeader =
    !location.pathname.startsWith("/authentication/") &&
    // !location.pathname.includes("payment") &&
    !location.pathname.includes("/blog");

  const showFooter =
    !location.pathname.includes("learning") &&
    !location.pathname.includes("payment") &&
    !location.pathname.startsWith("/authentication/");

  return (
    <>
      {/* <Header /> */}
      {showHeader && <Header mode={"light"} />}

      <Routes>
        {publicRoutes.map((item: any, index: any) => {
          const Page = item.component;
          return <Route key={index} path={item.path} element={<Page />} />;
        })}

        <Route path="*" element={<Page404 />} />
      </Routes>
      <Divider />
      {showFooter && (
        <FooterCustom />
      )}
    </>
  );
};

export default App;
