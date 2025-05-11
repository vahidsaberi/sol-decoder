import { cn } from '@/lib/utils';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  trendDirection = 'up',
  className,
  valuePrefix = '',
  valueSuffix = '',
}) {
  const isPositiveChange = trendDirection === 'up';
  
  return (
    <div className={cn(
      'rounded-xl border border-light-500/10 bg-dark-300 p-4 shadow-sm',
      className
    )}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-light-500">{title}</p>
          <p className="mt-2 text-2xl font-semibold">
            {valuePrefix}{value}{valueSuffix}
          </p>
        </div>
        
        {Icon && (
          <div className="p-2 bg-primary-500/10 rounded-lg">
            <Icon className="h-5 w-5 text-primary-500" />
          </div>
        )}
      </div>
      
      {typeof change !== 'undefined' && (
        <div className="mt-2 flex items-center text-sm">
          <span
            className={cn(
              'flex items-center',
              isPositiveChange ? 'text-success' : 'text-error'
            )}
          >
            {isPositiveChange ? (
              <FiArrowUp className="mr-1 h-3 w-3" />
            ) : (
              <FiArrowDown className="mr-1 h-3 w-3" />
            )}
            {change}%
          </span>
          <span className="text-light-500 ml-2">from previous period</span>
        </div>
      )}
    </div>
  );
}