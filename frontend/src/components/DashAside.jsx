import React from 'react'

export default function DashAside({userRole}) {
  return (
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
  );
}
