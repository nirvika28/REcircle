"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [username, setUsername] = useState("User123");
  const [email, setEmail] = useState("user@example.com");
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        Settings
      </h1>

      <div className="space-y-6">
        {/* Profile Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Profile Settings
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Security
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                Change Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="New Password"
                className="w-full mt-1 p-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
          </div>
        </section>

        {/* Preferences Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Preferences
          </h2>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Dark Mode</span>
            <label className="relative inline-block w-10 h-6">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="opacity-0 w-0 h-0"
              />
              <span
                className={`absolute cursor-pointer inset-0 bg-gray-300 dark:bg-gray-700 rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1 before:w-4 before:h-4 before:bg-white before:rounded-full before:transition-transform ${
                  darkMode
                    ? "before:translate-x-full before:bg-blue-500"
                    : ""
                }`}
              ></span>
            </label>
          </div>
        </section>

        {/* Save Button */}
        <div className="text-right">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
