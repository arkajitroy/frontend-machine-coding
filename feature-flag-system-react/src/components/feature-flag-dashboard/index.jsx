import React from "react";
import { useFeatureFlags } from "../../context/feature-flag/hooks";

export default function FeatureFlagDahboard() {
  const { featureFlags, updateFlag } = useFeatureFlags();

  const handleComplexFlagUpdate = (key, field, value) => {
    updateFlag(key, {
      ...featureFlags[key],
      [field]: value,
    });
  };

  return (
    <main className="border border-gray-300 px-4 py-6 rounded-lg bg-white shadow-md max-w-3xl mx-auto mt-8">
      <h2 className="text-xl font-semibold text-green-600 mb-4 border-b border-gray-200 pb-2">
        Feature Flag Test Dashboard
      </h2>
      <ul className="space-y-4">
        {Object.entries(featureFlags).map(([key, value]) => (
          <li key={key} className="flex flex-col gap-2">
            <span className="text-md font-medium text-gray-700">{key}</span>
            {typeof value === "boolean" ? (
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => updateFlag(key, !value)}
                  className="w-4 h-4 rounded-md border-gray-300 text-green-600 focus:ring-green-500"
                />
                <span>{value ? "Enabled" : "Disabled"}</span>
              </label>
            ) : typeof value === "object" ? (
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    checked={value.enabled}
                    onChange={(e) =>
                      handleComplexFlagUpdate(key, "enabled", e.target.checked)
                    }
                    className="w-4 h-4 rounded-md border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span>Enabled</span>
                </label>
                {value.percentageRollout !== undefined && (
                  <div className="flex items-center gap-4">
                    <label className="text-gray-600">
                      Rollout Percentage:
                      <input
                        type="number"
                        value={value.percentageRollout}
                        onChange={(e) =>
                          handleComplexFlagUpdate(
                            key,
                            "percentageRollout",
                            Number(e.target.value)
                          )
                        }
                        min="0"
                        max="100"
                        className="ml-2 w-18 p-1 border border-gray-300 rounded-md focus:ring focus:ring-green-200 focus:border-green-600"
                      />
                    </label>
                  </div>
                )}
              </div>
            ) : (
              <span className="text-red-500">Unsupported flag type</span>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
