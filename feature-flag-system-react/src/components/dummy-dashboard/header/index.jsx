import React from "react";

export default function DashboardHeader() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <span className="text-gray-600 hover:text-gray-900">Home</span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-900">Profile</span>
              </li>
              <li>
                <span className="text-gray-600 hover:text-gray-900">Settings</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
