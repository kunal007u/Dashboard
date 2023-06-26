
const ADMIN_PREFIX =  import.meta.env.VITE_REACT_APP_ADMIN ; 

export const Routing = {
    Dashboard: `${ADMIN_PREFIX}/dashboard`,
    Users: `${ADMIN_PREFIX}/users`,
    UserWallet: `${ADMIN_PREFIX}/userwallet`,
    
    MarketResults : `${ADMIN_PREFIX}/marketresults`,
    WithdrawalRequest : `${ADMIN_PREFIX}/withdrawalrequest`,
    MarketProfitLoss : `${ADMIN_PREFIX}/marketprofitLoss`,
    AllMarket:`${ADMIN_PREFIX}/Market/AllMarket`,
    
    Login: `/login`,
    ForgotPassword: `/forgot-password`,
    ResetPassword: `/reset-password`,
    MyProfile: `/myProfile`,
    Admin: `/admin`,
    UserDetails: `/admin/users/:id?`,
    Role: `/admin/role`,
    RolePermissionForm: `/admin/role/:id?`,
    Designation: `/admin/designation`,
    WorkingDays: `/admin/workingDays`,
    Client: `/client`,
    ClientDetails: `/client/:id`,
    Vendor: `/vendor`,
    VendorDetails: `/vendor/:id?`,
    Technology: `/technology`,
    Resources: `/resources`,
    AllResources: `/resources/allResource`,
    AllResourceDetails: `/resources/allResource/:id?`,
    DedicatedResources: `/resources/dedicatedResource`,
    DedicatedResourceDetails: `/resources/dedicatedResource/:id?`,
    MonthlyInvoiceForDedicated: `/resources/dedicatedResource/monthlyInvoice`,
    MonthlyInvoiceDetails: `/resources/dedicatedResource/monthlyInvoice/:id?`,
    NotFound: `*`,
};
