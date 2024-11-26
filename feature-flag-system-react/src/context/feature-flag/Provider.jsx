import { useEffect, useState } from "react";
import { FeatureFlagContext } from "./context";
import { featureFlagsConfig } from "../../config/feature-flag";

export default function FeatureFlagProvider({ children }) {
  const [featureFlags, setFeatureFlags] = useState({});

  // Load Feature Flags (Simulate API or Config fetch)
  useEffect(() => {
    const fetchFlags = async () => {
      // Simulate a fetch from an API or local storage
      const fetchedFlags = featureFlagsConfig;
      setFeatureFlags(fetchedFlags);
    };

    fetchFlags();
  }, []);

  const updateFlag = (key, value) => {
    setFeatureFlags((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <FeatureFlagContext.Provider value={{ featureFlags, updateFlag }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
