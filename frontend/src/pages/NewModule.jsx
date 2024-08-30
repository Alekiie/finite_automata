import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";

export function NewModule() {
  const { authState } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    resourceType: "pdf", // default to PDF
    resource: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file && file.type !== "application/pdf") {
        alert("Please upload a PDF file.");
        return;
      }
      setFormData({
        ...formData,
        resource: file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleResourceTypeChange = (e) => {
    setFormData({
      ...formData,
      resourceType: e.target.value,
      resource: null, // Reset resource when type changes
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("content", formData.content);
    formDataToSend.append("resourceType", formData.resourceType);
    if (formData.resource) {
      formDataToSend.append("resource", formData.resource);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/modules",
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${authState.user.accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        console.log("Module created successfully:", response.data);
        setFormData({
          title: "",
          description: "",
          content: "",
          resourceType: "pdf",
          resource: null,
        });
      } else {
        console.error("Error creating module:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container w-2/3 mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Create New Module
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Resource Type
          </label>
          <select
            name="resourceType"
            value={formData.resourceType}
            onChange={handleResourceTypeChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="pdf">PDF</option>
            <option value="video">Video</option>
            <option value="text">Text</option>
            <option value="test">Test</option>
          </select>
        </div>
        {formData.resourceType === "pdf" && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload PDF
            </label>
            <input
              type="file"
              name="resource"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        )}
        {formData.resourceType === "video" && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Video Link
            </label>
            <input
              type="text"
              name="resource"
              value={formData.resource || ""}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        )}
        {formData.resourceType === "text" && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Text Content
            </label>
            <textarea
              name="resource"
              value={formData.resource || ""}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        )}
        {formData.resourceType === "test" && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Test Questions
            </label>
            <input
              type="text"
              name="resource"
              value={formData.resource || ""}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        )}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create Module
          </button>
        </div>
      </form>
    </div>
  );
}
