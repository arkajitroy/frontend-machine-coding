import { useContext } from "react";
import { FeatureFlagContext } from "./context";

// Hook to use Feature Flags
export const useFeatureFlags = () => useContext(FeatureFlagContext);
