"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, BarChart, PieChart } from "@/components/charts";
import { useState, useEffect } from "react";

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState("week");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Enhanced sample data for charts with more detailed information
  const userActivityData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Active Users",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        fill: false,
      },
      {
        label: "New Signups",
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
        fill: false,
      },
    ],
  };

  const courseEngagementData = {
    labels: ["Blockchain Fundamentals", "Smart Contract Dev", "DeFi Principles", "Web3 Security", "NFT Creation"],
    datasets: [
      {
        label: "Completion Rate (%)",
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
      },
    ],
  };

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const userDemographicsData = {
    labels: ["18-24", "25-34", "35-44", "45-54", "55+"],
    datasets: [
      {
        label: "User Demographics",
        data: [15, 35, 25, 15, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };
  
  // Additional data for enhanced analytics
  const engagementMetricsData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Avg. Session Duration (min)",
        data: [12, 15, 18, 22],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1,
        fill: true,
      },
      {
        label: "Pages per Session",
        data: [4.2, 5.1, 5.8, 6.3],
        borderColor: "rgb(153, 102, 255)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        tension: 0.1,
        fill: true,
      },
    ],
  };
  
  const topCoursesData = [
    { name: "Blockchain Fundamentals", students: 456, completion: 78, rating: 4.8 },
    { name: "Smart Contract Development", students: 342, completion: 65, rating: 4.7 },
    { name: "DeFi Principles", students: 289, completion: 82, rating: 4.9 },
    { name: "Web3 Security", students: 267, completion: 71, rating: 4.6 },
    { name: "NFT Creation Workshop", students: 198, completion: 59, rating: 4.5 },
  ];

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
      {loading ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-primary border-solid rounded-full border-t-transparent animate-spin mb-4"></div>
            <p className="text-gray-400 animate-pulse">Loading analytics data...</p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">Analytics Dashboard</h2>
              <p className="text-gray-400 mt-1">Comprehensive overview of platform performance metrics</p>
            </div>
            <div className="flex items-center">
              <Tabs
                value={timeframe}
                onValueChange={setTimeframe}
                className="w-full md:w-[400px]"
              >
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="day">Day</TabsTrigger>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <div className="p-2 rounded-full bg-blue-500/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,350</div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-green-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                    +12.5% from last month
                  </p>
                  <p className="text-xs text-gray-500">258 active now</p>
                </div>
                {/* Mini sparkline chart */}
                <div className="h-1 w-full bg-gray-800 mt-3 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '65%' }}></div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                <div className="p-2 rounded-full bg-purple-500/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-green-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                    +2 from last month
                  </p>
                  <p className="text-xs text-gray-500">3 in development</p>
                </div>
                {/* Mini sparkline chart */}
                <div className="h-1 w-full bg-gray-800 mt-3 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full rounded-full" style={{ width: '45%' }}></div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <div className="p-2 rounded-full bg-green-500/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24,780</div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-green-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                    +18.2% from last month
                  </p>
                  <p className="text-xs text-gray-500">$820 today</p>
                </div>
                {/* Mini sparkline chart */}
                <div className="h-1 w-full bg-gray-800 mt-3 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full rounded-full" style={{ width: '78%' }}></div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                <div className="p-2 rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68.2%</div>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-green-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                    +5.1% from last month
                  </p>
                  <p className="text-xs text-gray-500">Target: 75%</p>
                </div>
                {/* Mini sparkline chart */}
                <div className="h-1 w-full bg-gray-800 mt-3 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '68.2%' }}></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Charts */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>User Activity</CardTitle>
                    <CardDescription className="text-gray-400">User engagement over time</CardDescription>
                  </div>
                  <select className="bg-gray-900 border border-gray-800 rounded-md text-sm text-white px-2 py-1">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
              </CardHeader>
              <CardContent>
                <LineChart data={userActivityData} />
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400">Avg. Daily Active Users</span>
                      <span className="text-lg font-bold text-white">62.3</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400">Avg. New Signups</span>
                      <span className="text-lg font-bold text-white">48.3</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Revenue</CardTitle>
                    <CardDescription className="text-gray-400">Monthly revenue breakdown</CardDescription>
                  </div>
                  <select className="bg-gray-900 border border-gray-800 rounded-md text-sm text-white px-2 py-1">
                    <option>Last 6 months</option>
                    <option>Last 12 months</option>
                    <option>YTD</option>
                  </select>
                </div>
              </CardHeader>
              <CardContent>
                <BarChart data={revenueData} />
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400">Total Revenue</span>
                      <span className="text-lg font-bold text-white">$123,000</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400">Avg. Monthly</span>
                      <span className="text-lg font-bold text-white">$20,500</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Course Engagement and Demographics */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Course Engagement</CardTitle>
                    <CardDescription className="text-gray-400">Completion rates by course</CardDescription>
                  </div>
                  <button className="text-xs text-primary hover:underline">View All Courses</button>
                </div>
              </CardHeader>
              <CardContent>
                <BarChart data={courseEngagementData} />
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <h4 className="text-sm font-medium text-white mb-3">Top Performing Courses</h4>
                  <div className="space-y-3">
                    {topCoursesData.slice(0, 3).map((course, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold mr-3">
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{course.name}</p>
                            <p className="text-xs text-gray-400">{course.students} students</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-white">{course.completion}%</p>
                          <div className="flex items-center text-xs text-yellow-500">
                            {Array(5).fill(0).map((_, i) => (
                              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill={i < Math.floor(course.rating) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" className="mr-0.5">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                              </svg>
                            ))}
                            <span className="ml-1 text-gray-400">{course.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>User Demographics</CardTitle>
                    <CardDescription className="text-gray-400">Age distribution of users</CardDescription>
                  </div>
                  <select className="bg-gray-900 border border-gray-800 rounded-md text-sm text-white px-2 py-1">
                    <option>Age</option>
                    <option>Location</option>
                    <option>Device</option>
                  </select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <div className="w-[250px] h-[250px]">
                    <PieChart data={userDemographicsData} />
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <h4 className="text-sm font-medium text-white mb-3">Key Insights</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[rgba(54,162,235,0.8)] mr-2"></div>
                      <p className="text-sm text-gray-300">25-34 age group represents the largest user segment (35%)</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[rgba(255,206,86,0.8)] mr-2"></div>
                      <p className="text-sm text-gray-300">35-44 age group shows highest course completion rates</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-[rgba(255,99,132,0.8)] mr-2"></div>
                      <p className="text-sm text-gray-300">18-24 age group growing fastest month-over-month</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Engagement Metrics */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Engagement Metrics</CardTitle>
                    <CardDescription className="text-gray-400">User session data and interaction metrics</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <LineChart data={engagementMetricsData} />
                <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-800">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400">Avg. Session</span>
                    <span className="text-lg font-bold text-white">16.8 min</span>
                    <span className="text-xs text-green-500">+24%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400">Bounce Rate</span>
                    <span className="text-lg font-bold text-white">32.4%</span>
                    <span className="text-xs text-green-500">-5.2%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400">Pages/Session</span>
                    <span className="text-lg font-bold text-white">5.3</span>
                    <span className="text-xs text-green-500">+12%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Platform Growth</CardTitle>
                    <CardDescription className="text-gray-400">Key growth metrics and trends</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-gray-400 text-sm">User Growth</h3>
                      <span className="text-xs text-green-500">+32%</span>
                    </div>
                    <p className="text-xl font-bold text-white">768</p>
                    <p className="text-xs text-gray-500 mt-1">New users this month</p>
                    <div className="h-1 w-full bg-gray-800 mt-3 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-gray-400 text-sm">Content Growth</h3>
                      <span className="text-xs text-green-500">+18%</span>
                    </div>
                    <p className="text-xl font-bold text-white">24</p>
                    <p className="text-xs text-gray-500 mt-1">New lessons this month</p>
                    <div className="h-1 w-full bg-gray-800 mt-3 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full" style={{ width: '58%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-gray-400 text-sm">Revenue Growth</h3>
                      <span className="text-xs text-green-500">+42%</span>
                    </div>
                    <p className="text-xl font-bold text-white">$8,240</p>
                    <p className="text-xs text-gray-500 mt-1">Increase from last month</p>
                    <div className="h-1 w-full bg-gray-800 mt-3 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-gray-400 text-sm">Retention Rate</h3>
                      <span className="text-xs text-green-500">+8%</span>
                    </div>
                    <p className="text-xl font-bold text-white">78.5%</p>
                    <p className="text-xs text-gray-500 mt-1">30-day retention</p>
                    <div className="h-1 w-full bg-gray-800 mt-3 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '78.5%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}