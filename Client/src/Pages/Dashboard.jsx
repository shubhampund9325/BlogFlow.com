import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../component/DashSidebar';
import DashProfile from '../component/DashProfile';
import DashPosts from '../component/DashPosts';
import DashboardComp from '../component/DashboardComp'; // Import DashboardComp

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('dashboard'); // Default to 'dashboard'

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  // Render the appropriate tab based on the `tab` state
  const renderTab = () => {
    switch (tab) {
      case 'dashboard':
        return <DashboardComp />; // Render the DashboardComp here
      case 'profile':
        return <DashProfile />;
      case 'posts':
        return <DashPosts />;
      default:
        return (
          <div className="flex justify-center items-center min-h-screen">
            <h1 className="text-gray-500 text-lg">Tab not found!</h1>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-56">
        <DashSidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 p-4">{renderTab()}</div>
    </div>
  );
}