import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import axios from "../configs/axios";
import AuthContext from "../context/AuthContext";
import Stats from "../components/Stats";
import Performance from "../components/Performance";
import DashAside from "../components/DashAside";

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
export const MemoizedBarChart = React.memo(({ data }) => (
  <Bar data={data} options={{ maintainAspectRatio: true }} />
));

// Memoized Line Chart
export const MemoizedLineChart = React.memo(({ data }) => (
  <Line data={data} options={{ maintainAspectRatio: true }} />
));

export const Dashboard = () => {
  const { authState } = useContext(AuthContext);
  const [stats, setsStats] = useState("");
  const [performanceScores, setPerformanceScores] = useState([]);

  const [modules, setModules] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [error, setError] = useState('');

  const userRole = authState.user.role.toLowerCase();

  // Data for the Bar chart (Performance)
  const performanceData = useMemo(() => {
    const labels = performanceScores.map((score) => `Test ${score.testIndex + 1}`);
    const data = performanceScores.map((score) => score.testScorePercentage);

    return {
      labels, // Use dynamic labels from performanceScores
      datasets: [
        {
          label: "Scores",
          data, // Use dynamic data from performanceScores
          backgroundColor: "rgba(75, 192, 192, 0.7)",
          fill: true,
        },
      ],
    };
  }, [performanceScores]); 

  // Data for the Line chart (Module Progress)
  const progressData = useMemo(() => ({
    labels: performanceScores.map((score) => `Test ${score.testIndex + 1}`),
    datasets: [
      {
        label: "Completion (%)",
        data: performanceScores.map((score) => score.testScorePercentage),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  }),[performanceScores]);

  // Fetch stats from the backend
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("/stats", {
          headers: {
            Authorization: `Bearer ${authState.user.accessToken}`,
          },
        });
        setsStats(response.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    const fetchPerformanceData = async () => {
      try {
        const response = await axios.get("/results", {
          headers: {
            Authorization: `Bearer ${authState.user.accessToken}`,
          },
        });
        const scores = response.data;
        setPerformanceScores(scores);
      } catch (error) {
        console.error("Error fetching performance data:", error);
      }
    };

    const fetchEnrolledModules = async () => {
      try {
        const response = await axios.get('/enrolled',{headers:{Authorization: `Bearer ${authState.user.accessToken}`}});
        setModules(response.data);
      } catch (error) {
        console.error(`Error fetching enrolled modules ${error.message}`);
        setError(error.message);
      }
    }

    const fetchAllInstructors = async () => {
      try {
        const response = await axios.get('/instructors');

        const result = response.data.instructors;
        setInstructors(result);
      } catch (error) {
        console.error("Error fetching instructors:", error);
        setError(error.message);
      }
    }

    fetchStats();
    fetchPerformanceData();
    fetchEnrolledModules();
    fetchAllInstructors();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-700 text-white p-6 shadow-md">
        <h1 className="text-3xl text-center font-semibold">
          Finite Automata Learning Dashboard
        </h1>
      </header>
      <div className="flex flex-1">
        <DashAside userRole={userRole} />
        <main className="flex-1 p-10">
          {/* Stats Section */}
          <Stats stats={stats} performanceScores={performanceScores} userRole={userRole} />

          {userRole === "student" && (
            <Performance progressData={progressData} performanceData={performanceData} instructors={instructors} modules={modules} error={error} />
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
