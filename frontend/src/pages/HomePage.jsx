import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { AxiosInstance } from "../../api/AxiosInstance";
import toast from "react-hot-toast";
import NavBar from "../components/user/NavBar";

function HomePage() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.userdata);

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Notes
  useEffect(() => {
    AxiosInstance.get("/getnote")
      .then((response) => {
        setNotes(response.data.notes || []);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
        toast.error(error.response?.data?.error || "Failed to load notes");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Format Date
  const formatDate = (date) => {
    if (!date) return "Recently";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const recentNotes = [...notes]
    .sort(
      (a, b) =>
        new Date(b.updatedAt || b.createdAt || 0) -
        new Date(a.updatedAt || a.createdAt || 0),
    )
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        {/* Welcome Section */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-medium text-violet-600">
              YOUR WORKSPACE
            </p>

            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Welcome back, {user?.name || "User"}! 👋
            </h1>

            <p className="mt-3 text-gray-500">
              Manage your thoughts, ideas and notes all in one place.
            </p>
          </div>

          <button
            onClick={() => navigate("/addnote")}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-violet-700"
          >
            <span className="text-xl">+</span>
            Create New Note
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Total Notes */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-violet-100 p-3 text-2xl">📝</div>
              <span className="text-sm text-gray-400">All time</span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900">
              {loading ? "..." : notes.length}
            </h2>

            <p className="mt-1 text-sm text-gray-500">Total Notes</p>
          </div>

          {/* Recent Notes */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-blue-100 p-3 text-2xl">🕒</div>
              <span className="text-sm text-gray-400">Latest</span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900">
              {loading ? "..." : recentNotes.length}
            </h2>

            <p className="mt-1 text-sm text-gray-500">Recently Updated</p>
          </div>

          {/* Quick Access */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-green-100 p-3 text-2xl">✨</div>
              <span className="text-sm text-gray-400">Workspace</span>
            </div>

            <h2 className="text-xl font-bold text-gray-900">Stay Organized</h2>

            <p className="mt-1 text-sm text-gray-500">
              Keep all your ideas in one place.
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-10">
          <h2 className="mb-5 text-xl font-bold text-gray-900">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Link
              to="/addnote"
              className="group flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="rounded-xl bg-violet-100 p-4 text-2xl transition group-hover:bg-violet-200">
                ✏️
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Create a Note</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Write down your thoughts and ideas.
                </p>
              </div>

              <span className="ml-auto text-xl text-gray-400">→</span>
            </Link>

            <Link
              to="/listnote"
              className="group flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="rounded-xl bg-blue-100 p-4 text-2xl transition group-hover:bg-blue-200">
                📚
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">View All Notes</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Access and manage your saved notes.
                </p>
              </div>

              <span className="ml-auto text-xl text-gray-400">→</span>
            </Link>
          </div>
        </div>

        {/* Recent Notes Section */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Recent Notes</h2>

              <p className="mt-1 text-sm text-gray-500">
                Your recently updated notes.
              </p>
            </div>

            <Link
              to="/listnote"
              className="text-sm font-semibold text-violet-600 hover:text-violet-800"
            >
              View All →
            </Link>
          </div>

          {loading ? (
            <p className="py-10 text-center text-gray-500">
              Loading your notes...
            </p>
          ) : notes.length === 0 ? (
            <div className="py-12 text-center">
              <div className="mb-4 text-5xl">📝</div>

              <h3 className="text-lg font-semibold text-gray-800">
                No notes yet
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Start organizing your ideas by creating your first note.
              </p>

              <button
                onClick={() => navigate("/addnote")}
                className="mt-5 rounded-lg bg-violet-600 px-5 py-2.5 font-medium text-white transition hover:bg-violet-700"
              >
                Create Your First Note
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {recentNotes.map((note) => (
                <div
                  key={note._id}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-5 transition hover:border-violet-200 hover:bg-violet-50/30"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
                      Note
                    </span>

                    <span className="text-xs text-gray-400">
                      {formatDate(note.updatedAt || note.createdAt)}
                    </span>
                  </div>

                  <h3 className="mb-2 font-semibold text-gray-900">
                    {note.title}
                  </h3>

                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-500">
                    {note.content}
                  </p>

                  <Link
                    to={`/editnote/${note._id}`}
                    className="text-sm font-semibold text-violet-600 hover:text-violet-800"
                  >
                    Edit Note →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-200 bg-white py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} WebApp. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;
