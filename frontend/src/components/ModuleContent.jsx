import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import axios from "../configs/axios";
import AuthContext from "../context/AuthContext";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const ModuleContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { authState } = useContext(AuthContext);
  const [module, setModule] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { modules, currentIndex } = location.state || {
    modules: [],
    currentIndex: 0,
  };

  useEffect(() => {
    const fetchModuleContent = async () => {
      setLoading(true);
      setError(null);
      setFileUrl("");

      try {
        const response = await axios.get(`/module/${id}`, {
          headers: {
            Authorization: `Bearer ${authState.user.accessToken}`,
          },
        });

        if (
          response.data.content.type === "pdf" &&
          response.data.content.data
        ) {
          const base64Data = response.data.content.data;
          const binaryString = atob(base64Data);
          const len = binaryString.length;
          const bytes = new Uint8Array(len);

          for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }

          const pdfBlob = new Blob([bytes], { type: "application/pdf" });
          const pdfUrl = URL.createObjectURL(pdfBlob);
          setFileUrl(pdfUrl);
        }

        setModule(response.data);
      } catch (error) {
        console.error("Error fetching or processing module content:", error);
        setError("Error loading module content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchModuleContent();
  }, [id, authState.user.accessToken]);

  const handleNavigation = (index) => {
    const newModule = modules[index];
    if (newModule) {
      navigate(`/module/${newModule._id}`, {
        state: { modules, currentIndex: index },
      });
    }
  };

  const completeModule = async () => {
    try {
      const response = await axios.post(
        "/complete",
        { moduleId: module._id },
        {
          headers: {
            Authorization: `Bearer ${authState.user.accessToken}`,
          },
        }
      );

      alert(response.data.message);
      navigate("/learning");
    } catch (error) {
      console.error(
        "Error completing the module:",
        error.response || error.message
      );
      setError("Error completing the module. Please try again later.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const renderTextContent = (content) => {
    // Split based on the numbered headings like "1.", "2." and so on
    const sections = content.split(/(\d+\.\s)/).filter(Boolean);

    return (
      <div className="text-content">
        {sections.map((section, index) => {
          // Check if the section starts with a number and period
          const isNumberedHeading = /^\d+\.\s/.test(section);

          // If it's a numbered heading, make it bold
          if (isNumberedHeading) {
            const nextSection = sections[index + 1] || "";
            // Extract the first sentence from the next section
            const firstSentenceEnd = nextSection.search(/[.?:]/) + 1;
            const firstSentence = nextSection.slice(0, firstSentenceEnd).trim();
            const remainingText = nextSection.slice(firstSentenceEnd).trim();

            return (
              <div key={index}>
                <h2 className="text-lg text-blue-600 font-bold mb-4">
                  {section.trim()} {firstSentence}
                </h2>
                {remainingText && <p className="mb-4">{remainingText}</p>}
              </div>
            );
          } else {
            // Render the rest as a paragraph
            return null; // We handle the section rendering above
          }
        })}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between mb-6">
        <button
          className="bg-blue-500 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
          onClick={() => handleNavigation(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-gray-800 px-4 py-2 rounded disabled:opacity-50"
          onClick={() => handleNavigation(currentIndex + 1)}
          disabled={currentIndex === modules.length - 1}
        >
          Next
        </button>
      </div>

      <h1 className="text-3xl font-semibold mb-6">{module?.title}</h1>
      <p className="text-lg mb-4 text-slate-500">{module?.description}</p>

      {module?.content.type === "pdf" && fileUrl ? (
        <div className="pdf-viewer" style={{ height: "750px" }}>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl={fileUrl} />
          </Worker>
        </div>
      ) : module?.content.type === "text" ? (
        renderTextContent(module?.content.data)
      ) : module?.content.type === "video" ? (
        <div className="video-content">
          <h2 className="text-xl font-semibold mb-4">
            {module?.content.title}
          </h2>
          <video controls width="100%">
            <source src={module?.content.data} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : module?.content.type === "quiz" ? (
        <div className="quiz-content">
          <h2 className="text-xl font-semibold mb-4">
            {module?.content.title}
          </h2>
          <div>
            {module?.content.data.map((question, index) => (
              <div key={index} className="quiz-question mb-4">
                <p className="font-semibold">{question.question}</p>
                <ul>
                  {question.options.map((option, i) => (
                    <li key={i} className="mb-2">
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : module?.content.type === "exercise" ? (
        <div className="exercise-content">
          <h2 className="text-xl font-semibold mb-4">
            {module?.content.title}
          </h2>
          <p>{module?.content.data}</p>
        </div>
      ) : (
        <div className="content">
          {module?.content.title || "No content available"}
        </div>
      )}

      <div className="w-full flex justify-end p-3">
        <button
          onClick={completeModule}
          className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white transition-all ease-in-out rounded shadow-lg"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default ModuleContent;
