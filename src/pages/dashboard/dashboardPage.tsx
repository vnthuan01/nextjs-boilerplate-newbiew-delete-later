import BarChart from "./barChart";
import LineChart from "./lineChart";

//Tên của hàm chữ phải bắt buộc là chữ in Hoa
export default function DashboardPage() {
  return (
    <div className="grid min-h-100 p-4">
      <h1 className="text-center">Đây là trang Dashboard của tôi</h1>
      <div className="flex flex-row items-center justify-center gap-4">
        <div>
          <LineChart />
        </div>
        <div>
          <BarChart />
        </div>
      </div>
      <div className="">Đây là bảng thống kê dữ liệu</div>
    </div>
  );
}
