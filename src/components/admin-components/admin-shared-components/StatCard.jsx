import { TrendingUp } from "lucide-react";

export const StatCard = ({ title, value, change, subtitle, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-6 ${className}`}>
      <h3 className="text-sm font-medium text-gray-600 mb-2">{title}</h3>
      <div className="flex items-baseline space-x-2">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        {change && (
          <div className="flex items-center text-green-600">
            <TrendingUp size={16} className="mr-1" />
            <span className="text-sm font-medium">{change}</span>
          </div>
        )}
      </div>
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
    </div>
  );
};
