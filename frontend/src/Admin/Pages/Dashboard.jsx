import Sidebar from "../Components/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex bg-indigo-50">
      <Sidebar />
      <div className="h-[200vh] w-full"></div>
    </div>
  );
}
