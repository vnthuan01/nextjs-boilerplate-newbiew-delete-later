// import { NextRequest, NextResponse } from "next/server";
// import { userRole } from "@constants/enum/userRole";
// import { decodedToken } from "@utils/decodeToken";
// import { IUserInfo } from "@constants/interfaces/userInfor";

// export async function middleware(request: NextRequest) {
//   //Tạo pathname lấy url cần route tới
//   const { pathname } = request.nextUrl;
//   const url = request.nextUrl.clone();

//   //Lấy accessToken từ cookie hoặc response của BE
//   const cookie = request.cookies.get(process.env.ACCESS_TOKEN as string);
//   //const accessToken = useSelector(selectAccessToken)
//   const token = cookie?.value;

//   //Check token có tồn tại thì verify ra
//   if (token) {
//     //Set default page
//     url.pathname = "/not-found";

//     //Function này trong utils
//     // const user: IUserInfo = await decodedToken(token as string);

//     if (user?.exp < Date.now() / 1000) {
//       url.pathname = "/login";
//       return NextResponse.redirect(url);
//     }
//     //Check user role rồi render
//     //Nếu mà user không phải Admin hoặc Super Admin nhưng cố gắng truy cập trang của Admin
//     if (
//       (user.role !== userRole.ADMIN &&
//         user.role !== userRole.SUPER_ADMIN &&
//         Object.values(AdminRoutes).includes(pathname as AdminRoutes)) ||
//       Object.values(SuperAdminRoutes).includes(pathname as SuperAdminRoutes)
//     ) {
//       return NextResponse.redirect(url);
//     }
//     //Nếu mà user là Admin nhưng cố gắng truy cập các trang của User
//     if (
//       user.role === userRole.ADMIN ||
//       (user.role === userRole.SUPER_ADMIN &&
//         Object.values(UserRoutes).includes(pathname as UserRoutes))
//     ) {
//       return NextResponse.redirect(url);
//     }
//     //Nếu Admin cố gắng truy cập trang của Super Admin
//     if (
//       user.role === userRole.ADMIN &&
//       Object.values(SuperAdminRoutes).includes(pathname as SuperAdminRoutes)
//     ) {
//       return NextResponse.redirect(url);
//     }
//   }
// }
