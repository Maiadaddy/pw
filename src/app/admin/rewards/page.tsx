"use client";

import { useState, useEffect } from "react";
import { Award, Search, Plus, Filter, RefreshCw, Star, Trophy, Medal, Gift, Crown } from "lucide-react";

export default function RewardsAndBadges() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-primary border-solid rounded-full border-t-transparent animate-spin mb-4"></div>
          <p className="text-gray-400 animate-pulse">Loading rewards data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Rewards & Badges</h1>
        <p className="text-gray-400">Manage achievement rewards and badges for your learning platform.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-black rounded-xl p-4 border border-gray-800 shadow-md">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-gray-400 text-sm">Total Badges</h3>
            <div className="p-2 rounded-lg bg-blue-500/10">
              <Award className="w-5 h-5 text-blue-500" />
            </div>
          </div>
          <p className="text-2xl font-bold text-white">24</p>
        </div>
        
        <div className="bg-black rounded-xl p-4 border border-gray-800 shadow-md">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-gray-400 text-sm">Badges Awarded</h3>
            <div className="p-2 rounded-lg bg-primary/10">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-bold text-white">1,248</p>
        </div>
        
        <div className="bg-black rounded-xl p-4 border border-gray-800 shadow-md">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-gray-400 text-sm">Achievement Rate</h3>
            <div className="p-2 rounded-lg bg-green-500/10">
              <Star className="w-5 h-5 text-green-500" />
            </div>
          </div>
          <p className="text-2xl font-bold text-white">68%</p>
        </div>
        
        <div className="bg-black rounded-xl p-4 border border-gray-800 shadow-md">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-gray-400 text-sm">Reward Types</h3>
            <div className="p-2 rounded-lg bg-purple-500/10">
              <Gift className="w-5 h-5 text-purple-500" />
            </div>
          </div>
          <p className="text-2xl font-bold text-white">8</p>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search rewards..."
            className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg w-full sm:w-64 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <button className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white flex items-center space-x-1">
            <Filter className="w-4 h-4 mr-1" />
            <span>Filter</span>
          </button>
          
          <button className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white flex items-center">
            <RefreshCw className="w-4 h-4 mr-1" />
            <span>Refresh</span>
          </button>
          
          <button className="px-3 py-2 bg-primary text-black rounded-lg font-medium flex items-center">
            <Plus className="w-4 h-4 mr-1" />
            <span>New Badge</span>
          </button>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Sample Badge Cards */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div key={index} className="bg-black rounded-xl border border-gray-800 overflow-hidden shadow-md hover:border-primary/50 transition-colors">
            <div className="p-4 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-3 shadow-lg">
                {index % 4 === 0 && <Trophy className="w-10 h-10 text-white" />}
                {index % 4 === 1 && <Medal className="w-10 h-10 text-white" />}
                {index % 4 === 2 && <Award className="w-10 h-10 text-white" />}
                {index % 4 === 3 && <Crown className="w-10 h-10 text-white" />}
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                {index % 4 === 0 && "Course Master"}
                {index % 4 === 1 && "Knowledge Seeker"}
                {index % 4 === 2 && "Blockchain Pioneer"}
                {index % 4 === 3 && "Web3 Champion"}
              </h3>
              <p className="text-gray-400 text-sm text-center mb-3">
                {index % 4 === 0 && "Complete all modules in a course"}
                {index % 4 === 1 && "Complete 5 different courses"}
                {index % 4 === 2 && "Submit a verified project"}
                {index % 4 === 3 && "Achieve 95% or higher on all assessments"}
              </p>
              <div className="flex items-center space-x-1 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                {index % 2 === 0 ? (
                  <Star className="w-4 h-4 fill-current" />
                ) : (
                  <Star className="w-4 h-4 text-gray-600" />
                )}
                <Star className="w-4 h-4 text-gray-600" />
              </div>
              <p className="text-xs text-gray-500 mt-2">Awarded {128 - (index * 12)} times</p>
            </div>
            <div className="border-t border-gray-800 p-3 flex justify-between items-center">
              <span className="text-xs text-gray-400">Created 2 months ago</span>
              <button className="text-primary text-xs hover:underline">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}