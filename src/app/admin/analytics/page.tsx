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
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Tabs
            value={timeframe}
            onValueChange={setTimeframe}
            className="w-[400px]"
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
        <Card className="bg-black text-white shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2,350</div>
            <p className="text-xs text-green-500">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-black text-white shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-green-500">+2 from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-black text-white shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,780</div>
            <p className="text-xs text-green-500">+18.2% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-black text-white shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68.2%</div>
            <p className="text-xs text-green-500">+5.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-black text-white shadow-lg">
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription className="text-gray-400">User engagement over time</CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart data={userActivityData} />
          </CardContent>
        </Card>
        <Card className="bg-black text-white shadow-lg">
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <CardDescription className="text-gray-400">Monthly revenue breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart data={revenueData} />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-black text-white shadow-lg">
          <CardHeader>
            <CardTitle>Course Engagement</CardTitle>
            <CardDescription className="text-gray-400">Completion rates by course</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart data={courseEngagementData} />
          </CardContent>
        </Card>
        <Card className="bg-black text-white shadow-lg">
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