'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { FiDollarSign, FiActivity, FiTrendingUp, FiPieChart } from 'react-icons/fi';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// StatCard component
const StatCard = ({ title, value, change, trendDirection, icon: Icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {change !== undefined && (
            <p className={`flex items-center text-sm mt-1 ${trendDirection === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {trendDirection === 'up' ? '+' : ''}{change}%
              <span className="ml-1">
                {trendDirection === 'up' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9v9a1 1 0 01-2 0V8H4a1 1 0 010-2h12a1 1 0 01.707 1.707l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 0112 7z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M14 13a1 1 0 01-1 1h-3v3a1 1 0 01-2 0v-3H5a1 1 0 010-2h12a1 1 0 01.707 1.707l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 0114 13z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
            </p>
          )}
        </div>
        <div className="p-3 bg-sky-50 dark:bg-sky-900/20 rounded-lg">
          {Icon && <Icon className="h-6 w-6 text-sky-500" />}
        </div>
      </div>
    </div>
  );
};

export default function Dashboard() {
  const [portfolioValue, setPortfolioValue] = useState(23567.89);
  const [portfolioChange, setPortfolioChange] = useState(5.67);
  const [dailyProfit, setDailyProfit] = useState(347.25);
  const [dailyProfitChange, setDailyProfitChange] = useState(2.34);
  const [currentAssets, setCurrentAssets] = useState(12);
  const [totalTransactions, setTotalTransactions] = useState(145);

  // Chart data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Portfolio Value',
        data: [18500, 19200, 20100, 19800, 20500, 21300, 22100, 21900, 22500, 23100, 23400, 23567.89],
        fill: true,
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        borderColor: 'rgba(14, 165, 233, 0.8)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: '#222222',
        titleColor: '#ffffff',
        bodyColor: '#e0e0e0',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#a0a0a0',
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#a0a0a0',
        }
      },
    },
  };

  // Assets data
  const topAssets = [
    { name: 'Bitcoin', symbol: 'BTC', value: 9845.32, change: 3.42, color: '#F7931A' },
    { name: 'Ethereum', symbol: 'ETH', value: 7523.18, change: -1.23, color: '#627EEA' },
    { name: 'Solana', symbol: 'SOL', value: 3257.45, change: 8.76, color: '#00FFA3' },
    { name: 'Cardano', symbol: 'ADA', value: 1893.65, change: 0.87, color: '#0033AD' },
    { name: 'Polkadot', symbol: 'DOT', value: 1048.29, change: -2.15, color: '#E6007A' },
  ];

  // Recent transactions data
  const recentTransactions = [
    { 
      id: 1, 
      type: 'buy', 
      asset: 'Bitcoin', 
      symbol: 'BTC', 
      amount: 0.05, 
      price: 29750.81, 
      total: 1487.54, 
      date: '2025-05-10T09:23:17' 
    },
    { 
      id: 2, 
      type: 'sell', 
      asset: 'Ethereum', 
      symbol: 'ETH', 
      amount: 0.75, 
      price: 1850.27, 
      total: 1387.70, 
      date: '2025-05-09T14:45:32' 
    },
    { 
      id: 3, 
      type: 'buy', 
      asset: 'Solana', 
      symbol: 'SOL', 
      amount: 3.2, 
      price: 121.34, 
      total: 388.29, 
      date: '2025-05-08T11:12:05' 
    },
    { 
      id: 4, 
      type: 'buy', 
      asset: 'Cardano', 
      symbol: 'ADA', 
      amount: 125, 
      price: 0.52, 
      total: 65.00, 
      date: '2025-05-07T17:33:41' 
    },
    { 
      id: 5, 
      type: 'sell', 
      asset: 'Polkadot', 
      symbol: 'DOT', 
      amount: 12.5, 
      price: 7.82, 
      total: 97.75, 
      date: '2025-05-06T10:15:23' 
    },
  ];

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Welcome and summary */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Welcome back! Here's a summary of your portfolio.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="text-sm text-gray-500 dark:text-gray-400">Last updated</div>
          <div className="font-medium text-gray-700 dark:text-gray-200">{new Date().toLocaleString()}</div>
        </div>
      </div>

      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Portfolio Value"
          value={`$${portfolioValue.toLocaleString()}`}
          change={portfolioChange}
          trendDirection="up"
          icon={FiDollarSign}
        />
        <StatCard
          title="Daily Profit/Loss"
          value={`$${dailyProfit.toLocaleString()}`}
          change={dailyProfitChange}
          trendDirection="up"
          icon={FiActivity}
        />
        <StatCard
          title="Current Assets"
          value={currentAssets}
          icon={FiPieChart}
        />
        <StatCard
          title="Total Transactions"
          value={totalTransactions}
          icon={FiTrendingUp}
        />
      </div>

      {/* Portfolio chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Portfolio Performance</h2>
        <div className="h-80">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Two column layout for assets and transactions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top assets */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Top Assets</h2>
          <div className="space-y-4">
            {topAssets.map((asset) => (
              <div key={asset.symbol} className="flex justify-between items-center">
                <div className="flex items-center">
                  <div 
                    className="w-8 h-8 rounded-full mr-3" 
                    style={{ backgroundColor: asset.color }}
                  />
                  <div>
                    <div className="font-medium text-gray-800 dark:text-gray-200">{asset.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{asset.symbol}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-gray-800 dark:text-gray-200">${asset.value.toLocaleString()}</div>
                  <div className={`text-sm ${asset.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {asset.change >= 0 ? '+' : ''}{asset.change}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent transactions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Recent Transactions</h2>
          <div className="space-y-4">
            {recentTransactions.map((tx) => (
              <div key={tx.id} className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center ${tx.type === 'buy' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {tx.type === 'buy' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 00-.707.293l-4 4a1 1 0 101.414 1.414L10 5.414l3.293 3.293a1 1 0 001.414-1.414l-4-4A1 1 0 0010 3z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M10 17a1 1 0 00.707-.293l4-4a1 1 0 00-1.414-1.414L10 14.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4A1 1 0 0010 17z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16 10a1 1 0 01-1 1H5a1 1 0 110-2h10a1 1 0 011 1z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-gray-200">
                      {tx.type === 'buy' ? 'Bought' : 'Sold'} {tx.amount} {tx.symbol}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{formatDate(tx.date)}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-gray-800 dark:text-gray-200">${tx.total.toLocaleString()}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">${tx.price.toLocaleString()} per {tx.symbol}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}