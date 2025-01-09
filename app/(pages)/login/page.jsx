import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen" style={{ backgroundColor: "#f9f9fd" }}>
      <div
        className="w-full max-w-md p-8 rounded-lg shadow-lg"
        style={{ backgroundColor: "#FFF" }}
      >
        {/* Header */}
        <h1
          className="text-3xl font-bold text-center mb-4"
          style={{ color: "#111032" }}
        >
          Welcome Back!
        </h1>
        <p className="text-center text-sm mb-6" style={{ color: "#9C46EB" }}>
          Sign in to continue to your account
        </p>

        {/* Buttons */}
        <div className="space-y-4">
          {/* Google Sign-In Button */}
          <button
            className="flex items-center justify-center w-full px-4 py-3 rounded-lg font-medium shadow transition hover:scale-105"
            style={{ backgroundColor: "#f9f9fd", border: "1px solid #9C46EB" }}
          >
            <FcGoogle className="mr-3 text-lg" />
            <span style={{ color: "#111032" }}>Sign in with Google</span>
          </button>

          {/* GitHub Sign-In Button */}
          <button
            className="flex items-center justify-center w-full px-4 py-3 rounded-lg font-medium shadow transition hover:scale-105"
            style={{ backgroundColor: "#111032", color: "#FFF" }}
          >
            <FaGithub className="mr-3 text-lg" />
            <span>Sign in with GitHub</span>
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs mt-6" style={{ color: "#9C46EB" }}>
          Don’t have an account?{" "}
          <a href="#" className="font-semibold underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
