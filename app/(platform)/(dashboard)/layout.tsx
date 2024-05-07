import Navbar from "./_components/navbar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full ">
      <Navbar></Navbar>
      {children}
    </div>
  );
}
