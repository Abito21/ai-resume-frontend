import { Link, Outlet } from "react-router";
import { FileTerminal, MessageCircle, Zap } from "lucide-react";

export const DashboardLayout = () => {
  return (
    <div className="h-screen flex bg-gray-200">
      <aside className="w-[250px] bg-gray-100 border-r border-gray-300 p-6">
        <div className=" mb-6 ml-2">
          <div className="text-xl font-bold">DevHire</div>
          <p className="text-xs text-gray-600">By Devscale Indonesia</p>
          <p className="text-xs text-gray-600">Bootacamp</p>
        </div>
        <section className="space-y-1">
          <MenuItem label="Dashboard" href="/dashboard" icon={<Zap size={15} />} />
          <MenuItem label="Resumes" href="/resumes" icon={<FileTerminal size={15} />} />
          <MenuItem label="Chatbot" href="/chatbot" icon={<MessageCircle size={15} />} />
        </section>
      </aside>
      <main className="flex-1 h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

interface MenuItemProps {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export const MenuItem = ({ label, href, icon }: MenuItemProps) => {
  return (
    <Link to={href} className="flex items-center p-2 rounded-md hover:bg-blue-700 hover:text-white transition duration-75">
      <div className="mr-2">{icon}</div>
      <div>{label}</div>
    </Link>
  );
};