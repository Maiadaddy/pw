"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, BarChart, PieChart } from "@/components/charts";
import { useState } from "react";

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState("week");

  // Sample data for charts
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
    labels: ["Course A", "Course B", "Course C", "Course D", "Course E"],
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

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border-gray-800">
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
            <div className="text-2xl font-bold">+2,350</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              +12.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border-gray-800">
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
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              +2 from last month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border-gray-800">
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
            <p className="text-xs text-green-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              +18.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border-gray-800">
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
            <p className="text-xs text-green-500 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
              +5.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border-gray-800">
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription className="text-gray-400">User engagement over time</CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart data={userActivityData} />
          </CardContent>
        </Card>
        <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border-gray-800">
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <CardDescription className="text-gray-400">Monthly revenue breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart data={revenueData} />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border-gray-800">
          <CardHeader>
            <CardTitle>Course Engagement</CardTitle>
            <CardDescription className="text-gray-400">Completion rates by course</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart data={courseEngagementData} />
          </CardContent>
        </Card>
        <Card className="bg-black text-white shadow-lg hover:shadow-primary/5 transition-all duration-300 border-gray-800">
          <CardHeader>
            <CardTitle>User Demographics</CardTitle>
            <CardDescription className="text-gray-400">Age distribution of users</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="w-[300px] h-[300px]">
              <PieChart data={userDemographicsData} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}