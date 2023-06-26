import { ReactElement } from "react"
import { Routing } from "../Routes/routing"

export interface RouteIModel {
    path?: string,
    Name: string,
    icon?: string,
    id: number,
    ParentRouteId: number | null
    Priority: number
    IsActive: boolean

}
export const routes: RouteIModel[] = [
    {
        id: 1,
        ParentRouteId: null,
        Name: "Dashboard",
        Priority: 1,
        IsActive: true,
        path: Routing.Dashboard,
    },
    {
        id: 2,
        ParentRouteId: null,
        Name: "Users",
        Priority: 2,
        IsActive: true,
        path: Routing.Users,

    },
    {
        id: 3,
        ParentRouteId: null,
        Name: "UserWallet",
        Priority: 3,
        IsActive: true,
        path:Routing.UserWallet,

    },
    {
        id: 4,
        ParentRouteId: null,
        Name: "Markets",
        Priority: 4,
        IsActive: true,
    },
    {
        id: 5,
        ParentRouteId: null,
        Name: "MarketResults",
        Priority: 5,
        IsActive: true,
        path: Routing.MarketResults,
        icon: 'MarketResults',
    },
    {
        id: 6,
        ParentRouteId: null,
        Name: "WithdrawalRequest",
        Priority: 6,
        IsActive: true,
        path: Routing.WithdrawalRequest

    },
    {
        id: 7,
        ParentRouteId: null,
        Name: "MarketProfitLoss",
        Priority: 7,
        IsActive: true,
        path: Routing.MarketProfitLoss
    },
    {
        id: 9,
        ParentRouteId: null,
        Name: "Settings",
        Priority: 9,
        IsActive: true,
    },
    {
        id: 10,
        ParentRouteId: null,
        Name: "StarLineMarkets",
        Priority: 10,
        IsActive: true,
    },
    {
        id: 11,
        ParentRouteId: 4,
        Name: "AllMarkets",
        Priority: 1,
        IsActive: true,
        path: Routing.AllMarket

    },
    {
        id: 12,
        ParentRouteId: 4,
        Name: "MarketGameRate",
        Priority: 2,
        IsActive: true,
        path: "MarketGameRate"
    },
    {
        id: 13,
        ParentRouteId: 9,
        Name: "Banners",
        Priority: 1,
        IsActive: true,
        path: "Banners"

    },
    {
        id: 14,
        ParentRouteId: 9,
        Name: "RolePermission",
        Priority: 2,
        IsActive: true,
        path: "RolePermission"
    },
    {
        id: 15,
        ParentRouteId: 9,
        Name: "WithdrawalConfiguration",
        Priority: 3,
        IsActive: true,
        path: "WithdrawalConfiguration"

    },
    {
        id: 16,
        ParentRouteId: 9,
        Name: "Notifications",
        Priority: 4,
        IsActive: true,
        path: "Notifications"

    },
    {
        id: 17,
        ParentRouteId: 9,
        Name: "CMS",
        Priority: 5,
        IsActive: true,
        path: "CMS"
    },
    {
        id: 18,
        ParentRouteId: 9,
        Name: "AuthUsers",
        Priority: 6,
        IsActive: true,
        path: "AuthUsers"
    },
    {
        id: 19,
        ParentRouteId: 10,
        Name: "StarLineMarketDashboard",
        Priority: 1,
        IsActive: true,
        path: "StarLineMarketDashboard"
    },
    {
        id: 20,
        ParentRouteId: 10,
        Name: "AllStarLineMarkets",
        Priority: 2,
        IsActive: true,
        path: "AllStarLineMarkets"
    },
    {
        id: 21,
        ParentRouteId: 10,
        Name: "StarLineMarketProfitLoss",
        Priority: 3,
        IsActive: true,
        path: "StarLineMarketProfitLoss"
    },
    {
        id: 22,
        ParentRouteId: 10,
        Name: "StarLineMarketResults",
        Priority: 4,
        IsActive: true,
        path: "StarLineMarketResults"
    },
    {
        id: 23,
        ParentRouteId: 10,
        Name: "StartLineMarketGameRate",
        Priority: 5,
        IsActive: true,
        path: "StartLineMarketGameRate"
    },
    {
        id: 24,
        ParentRouteId: 9,
        Name: "AdminUsers",
        Priority: 7,
        IsActive: true,
        path: "AdminUsers"
    },
    {
        id: 26,
        ParentRouteId: 25,
        Name: "GoogleAnalysis",
        Priority: 1,
        IsActive: true,
        path: "GoogleAnalysis"
    },
    {
        id: 27,
        ParentRouteId: 25,
        Name: "MarketAnalysis",
        Priority: 2,
        IsActive: true,
        path: "MarketAnalysis"
    },
    {
        id: 28,
        ParentRouteId: 25,
        Name: "UserAnalysis",
        Priority: 3,
        IsActive: true,
        path: "UserAnalysis"
    },
    {
        id: 8,
        ParentRouteId: null,
        Name: "Feedback",
        Priority: 8,
        IsActive: true,
        path: "Feedback"
    },
    {
        id: 25,
        ParentRouteId: null,
        Name: "Analysis",
        Priority: 11,
        IsActive: true,
    },
    {
        id: 29,
        ParentRouteId: null,
        Name: "DebitCreditAnalysis",
        Priority: 4,
        IsActive: true,
        path: "DebitCreditAnalysis"
    }
]
