


import React, { lazy } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Routing } from "./routing";

/* Developer Pages */
const UserWallet = lazy(()=>import("../Components/UserWallet"))
const MarketResults = lazy(()=>import("../Components/MarketResults"))
const WithdrawalRequest = lazy(()=>import("../Components/WithdrawalRequest"))
const MarketProfitLoss = lazy(()=>import("../Components/MarketProfitLoss"))

const MainLayout = lazy(()=>import("../Layout/MainLayout"))
const PublicLayout = lazy(()=>import("../Layout/PublicLayout"))
const Dashboard = lazy(()=>import("../Components/Dashboard"))
const Users = lazy(()=>import("../Components/Users"))
const Login = lazy(()=>import("../Account/Login"))
const AllMarket = lazy(()=>import("../Components/AllMarket"))


const privateRoute = (Element: React.ComponentType<unknown>) => {
  return <ProtectedRoute element={<Element />} />
}

const routes = createBrowserRouter([
  {
      path: "/",
      element: <Navigate to={Routing.Login} />,
  },
  {
      path: Routing.Login,
      element: <PublicLayout><Login /></PublicLayout>,
  },
  // {
  //     path: Routing.ForgotPassword,
  //     element: <PublicLayout><ForgotPassword /></PublicLayout>,
  // },
  // {
  //     path: Routing.ResetPassword,
  //     element: <PublicLayout><ResetPassword /></PublicLayout>,
  // },
  // {
  //     path: Routing.MyProfile,
  //     element: <MainLayout>{privateRoute(MyProfile)}</MainLayout>,
  // },
  {
      path: Routing.Dashboard,
      element: <MainLayout>{privateRoute(Dashboard)}</MainLayout>,
  },
  {
      path: Routing.Users,
      element: <MainLayout>{privateRoute(Users)}</MainLayout>,
  },
  {
      path: Routing.UserWallet,
      element: <MainLayout>{privateRoute(UserWallet)}</MainLayout>,
  },
  {
      path: Routing.MarketResults,
      element: <MainLayout>{privateRoute(MarketResults)}</MainLayout>,
  },
  {
      path: Routing.WithdrawalRequest,
      element: <MainLayout>{privateRoute(WithdrawalRequest)}</MainLayout>,
  },
  {
      path: Routing.MarketProfitLoss,
      element: <MainLayout>{privateRoute(MarketProfitLoss)}</MainLayout>,
  },
  {
      path: Routing.AllMarket,
      element: <MainLayout>{privateRoute(AllMarket)}</MainLayout>,
  },
  // {
  //     path: Routing.Client,
  //     element: <MainLayout>{privateRoute(Client)}</MainLayout>,
  // },
  // {
  //     path: Routing.ClientDetails,
  //     element: <MainLayout>{privateRoute(ClientDetails)}</MainLayout>,
  // },
  // {
  //     path: Routing.Vendor,
  //     element: <MainLayout>{privateRoute(Vendor)}</MainLayout>,
  // },
  // {
  //     path: Routing.VendorDetails,
  //     element: <MainLayout>{privateRoute(VendorDetails)}</MainLayout>,
  // },
  // {
  //     path: Routing.Technology,
  //     element: <MainLayout>{privateRoute(Technology)}</MainLayout>,
  // },
  // {
  //     path: Routing.AllResources,
  //     element: <MainLayout>{privateRoute(AllResource)}</MainLayout>,
  // },
  // {
  //     path: Routing.AllResourceDetails,
  //     element: <MainLayout>{privateRoute(AllResourceDetails)}</MainLayout>,
  // },
  // {
  //     path: Routing.DedicatedResources,
  //     element: <MainLayout>{privateRoute(DedicatedResource)}</MainLayout>,
  // },
  // {
  //     path: Routing.DedicatedResourceDetails,
  //     element: <MainLayout>{privateRoute(DedicatedResourceDetails)}</MainLayout>,
  // },
  // {
  //     path: Routing.MonthlyInvoiceForDedicated,
  //     element: <MainLayout>{privateRoute(MonthlyInvoiceForDedicated)}</MainLayout>,
  // },
  // {
  //     path: Routing.MonthlyInvoiceDetails,
  //     element: <MainLayout>{privateRoute(MonthlyInvoiceDetails)}</MainLayout>,
  // },
  // {
  //     path: Routing.NotFound,
  //     element: <NotFound />,
  // },
]);

const AppRouting = () => {
  return (
          <RouterProvider router={routes} />
  );
};

export default AppRouting;