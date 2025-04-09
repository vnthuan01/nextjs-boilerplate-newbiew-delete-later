enum UserRoutes {
  Profile = "/user/profile",
  ChangePassword = "/user/change-password",
}

enum AdminRoutes {
  Profile = "/admin/profile",
  ChangePassword = "/admin/change-password",
  Dashboard = "/admin/dashboard",
}

enum SuperAdminRoutes {
  Profile = AdminRoutes.Profile,
  ChangePassword = AdminRoutes.ChangePassword,
  Dashboard = AdminRoutes.Dashboard,
  AdminList = "/dashboard/super-admin/admins",
  AddAdmin = "/dashboard/super-admin/add-admin",
}
