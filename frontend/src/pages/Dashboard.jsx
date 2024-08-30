import React, { useContext, useEffect, useMemo, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import axios from "axios";
import AuthContext from "../context/AuthContext";

// Register components for chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

// Memoized Bar Chart
const MemoizedBarChart = React.memo(({ data }) => (
  <Bar data={data} options={{ maintainAspectRatio: true }} />
));

// Memoized Line Chart
const MemoizedLineChart = React.memo(({ data }) => (
  <Line data={data} options={{ maintainAspectRatio: true }} />
));

export const Dashboard = () => {
  const { authState } = useContext(AuthContext);
  const [stats, setsStats] = useState("");

  const userRole = authState.user.role.toLowerCase();

  // Data for the Bar chart (Performance)
  const performanceData = useMemo(
    () => ({
      labels: ["Module 1", "Module 2", "Module 3"],
      datasets: [
        {
          label: "Scores",
          data: [85, 92, 78],
          backgroundColor: "rgba(54, 162, 235, 0.5)",
        },
      ],
    }),
    []
  );

  // Data for the Line chart (Module Progress)
  const progressData = useMemo(
    () => ({
      labels: ["Module 1", "Module 2", "Module 3", "Module 4"],
      datasets: [
        {
          label: "Completion (%)",
          data: [25, 50, 75, 100],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    }),
    []
  );

  // Fetch stats from the backend
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("http://localhost:3000/stats", {
          headers: {
            Authorization: `Bearer ${authState.user.accessToken}`,
          },
        });
        setsStats(response.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-700 text-white p-6 shadow-md">
        <h1 className="text-3xl text-center font-semibold">
          Finite Automata Learning Dashboard
        </h1>
      </header>
      <div className="flex flex-1">
        <aside className="w-56 bg-white shadow-lg rounded p-6">
          <nav>
            <ul>
              <li className="mb-4">
                <a
                  href="#stats"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Stats
                </a>
              </li>
              {userRole === "student" && (
                <>
                  <li className="mb-4">
                    <a
                      href="#performance"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Performance
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#instructors"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Instructors
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#modules"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Modules
                    </a>
                  </li>
                </>
              )}
              {userRole === "instructor" && (
                <>
                  <li className="mb-4">
                    <a
                      href="#modules"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Manage Modules
                    </a>
                  </li>
                </>
              )}
              {userRole === "admin" && (
                <>
                  <li className="mb-4">
                    <a
                      href="#admin"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Admin Panel
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="#userManagement"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      User Management
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-10">
          {/* Stats Section */}
          <section id="stats" className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Your Stats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-lg font-medium text-gray-600">
                  Total Modules Enrolled
                </h3>
                <p className="text-3xl font-bold text-red-800 text-center">
                  {stats.totalEnrolledModules}
                </p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-lg font-medium text-center text-gray-600">
                  Total Modules Completed
                </h3>
                <p className="text-3xl font-bold text-center text-red-800">
                  {stats.completedModules}
                </p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-lg font-medium text-gray-600">
                  Active Modules
                </h3>
                <p className="text-3xl text-center font-bold text-red-800">
                  {stats.activeModules}
                </p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-lg">
                <h3 className="text-lg font-medium text-gray-600">
                  Total Time Spent
                </h3>
                <p className="text-3xl text-center font-bold text-red-800">
                  {stats.totalTimeSpent} hrs
                </p>
              </div>
            </div>
          </section>

          {userRole === "student" && (
            <>
              {/* Performance Section */}
              <section id="performance" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                  Performance
                </h2>
                <div className="bg-white p-6 shadow-md rounded-lg">
                  <MemoizedBarChart data={performanceData} />
                </div>
              </section>
              {/* Instructors Section */}
              <section id="instructors" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                  Instructors
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-lg font-medium text-gray-600">
                      Dr. John Doe
                    </h3>
                    <p className="text-gray-700">
                      Expert in Finite Automata and Regular Languages.
                    </p>
                  </div>
                  <div className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-lg font-medium text-gray-600">
                      Prof. Jane Smith
                    </h3>
                    <p className="text-gray-700">
                      Specializes in Theoretical Computer Science.
                    </p>
                  </div>
                </div>
              </section>
              {/* Modules Section */}
              <section id="modules" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                  Enrolled Modules
                </h2>
                <div className="bg-white p-6 shadow-md rounded-lg mb-6">
                  <h3 className="text-lg font-medium text-gray-600 mb-4">
                    Progress
                  </h3>
                  <MemoizedLineChart data={progressData} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-lg font-medium text-gray-600">
                      Module 1: Introduction to Finite Automata
                    </h3>
                    <p className="text-gray-700">
                      Understanding the basics of finite automata.
                    </p>
                  </div>
                  <div className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-lg font-medium text-gray-600">
                      Module 2: Regular Languages
                    </h3>
                    <p className="text-gray-700">
                      Deep dive into regular languages and their properties.
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}
          {userRole === "instructor" && (
            <>
              {/* Manage Modules Section */}
              <section id="modules" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                  Manage Modules
                </h2>
                <div className="bg-white p-6 shadow-md rounded-lg">
                  <p className="text-gray-700">
                    Here you can manage your assigned modules.
                  </p>
                </div>
              </section>
            </>
          )}

          {userRole === "admin" && (
            <>
              {/* Admin Panel Section */}
              <section id="admin" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                  Admin Panel
                </h2>
                <div className="bg-white p-6 shadow-md rounded-lg">
                  <p className="text-gray-700">
                    Manage platform settings and configurations.
                  </p>
                </div>
              </section>

              {/* User Management Section */}
              <section id="userManagement" className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                  User Management
                </h2>
                <div className="bg-white p-6 shadow-md rounded-lg">
                  <p className="text-gray-700">
                    Oversee user roles and access rights.
                  </p>
                </div>
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
};
