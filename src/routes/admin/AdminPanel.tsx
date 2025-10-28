import mockProperties from "@/data/mockProperties";
import PropertyListPage from "./PropertyListPage";

const AdminPanel = () => {
  return (
    <div className="flex mx-auto justify-center">
      <PropertyListPage properties={mockProperties} />
    </div>
  );
};

export default AdminPanel;
