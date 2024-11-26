import { useFeatureFlags } from "../../context/feature-flag/hooks";

const FeatureToggle = ({ flag, children, fallback = null }) => {
  const { featureFlags } = useFeatureFlags();

  const isFlagEnabled = (flagKey) => {
    const flag = featureFlags[flagKey];
    if (typeof flag === "boolean") return flag;
    if (typeof flag === "object" && flag.enabled) {
      // Handle percentage rollout
      if (flag.percentageRollout) {
        const randomValue = Math.random() * 100;
        return randomValue < flag.percentageRollout;
      }
      return true;
    }
    return false;
  };

  return isFlagEnabled(flag) ? children : fallback;
};

export default FeatureToggle;
