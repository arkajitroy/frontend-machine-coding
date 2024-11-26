import React from "react";
import FeatureFlagProvider from "./context/feature-flag/Provider";
import FeatureFlagToggle from "./features/feature-flag-toggle";
import BetaModeAlert from "./components/beta-mode";
import FeatureFlagDahboard from "./components/feature-flag-dashboard";
import DummyDashboard from "./components/dummy-dashboard";

export default function App() {
  return (
    <main className="max-w-3xl mx-auto px-4 bg-gray-200">
      <FeatureFlagProvider>
        <h3 className="text-2xl mb-4 text-blue-700 font-bold text-center">
          Feature Flag System
        </h3>

        <FeatureFlagToggle
          flag={"enableNewDashboard"}
          fallback={<span>New Dashboard is coming soon!</span>}
        >
          <DummyDashboard />
        </FeatureFlagToggle>

        <FeatureFlagToggle flag="enableBetaMode">
          <BetaModeAlert />
        </FeatureFlagToggle>

        <FeatureFlagDahboard />
      </FeatureFlagProvider>
    </main>
  );
}
