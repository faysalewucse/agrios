import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Homepage from "./pages/home/Homepage";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ShopPage from "./pages/ShopPage/ShopPage";
import { ConfigProvider } from "antd";
import ProductDetails from "./pages/ShopPage/ProductDetails";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./pages/ProjectDetails";
import NewsPage from "./pages/NewsPage";
import NewsDetails from "./pages/NewsDetails";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetails from "./pages/ServiceDetails";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { AuthProvider } from "./contexts/AuthContext";
import PublicRoute from "./utils/PublicRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/service/:serviceName",
        element: <ServiceDetails />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/news/:newsId",
        element: <NewsDetails />,
      },
      {
        path: "/project/:projectId",
        element: <ProjectDetails />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/category/:productId",
        element: <ProductDetails />,
      },
    ],
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
            colorBgContainer: "#f6ffed",
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </AuthProvider>
  );
};

export default App;
