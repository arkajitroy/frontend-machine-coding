import React from "react";
import StatsCard from "./stats-card";
import DashboardHeader from "./header";

export default function DummyDashboard() {
  return (
    <div className="min-h-[50vh] bg-slate-100 shadow-lg rounded-lg">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Revenue"
              value="$45,231.89"
              description="+20.1% from last month"
            />
            <StatsCard
              title="Active Users"
              value="1,257"
              description="+15.3% from last week"
            />
            <StatsCard
              title="New Signups"
              value="328"
              description="+5.7% from yesterday"
            />
            <StatsCard
              title="Conversion Rate"
              value="3.2%"
              description="+1.2% from last quarter"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
