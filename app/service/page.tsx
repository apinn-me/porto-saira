export default function InstagramStyleForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black p-4">
      <div className="w-full max-w-sm bg-white dark:bg-[#121212] p-8 rounded-md shadow-md border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-center mb-6 text-black dark:text-white">
          Log in to Instagram
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username or email"
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded text-sm bg-white dark:bg-[#1a1a1a] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded text-sm bg-white dark:bg-[#1a1a1a] text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 rounded"
          >
            Log In
          </button>
        </form>

        <div className="my-4 flex items-center gap-4 text-gray-400 text-sm">
          <hr className="flex-1 border-gray-300 dark:border-gray-700" />
          OR
          <hr className="flex-1 border-gray-300 dark:border-gray-700" />
        </div>

        <div className="flex justify-center text-sm text-blue-600 hover:underline cursor-pointer">
          Forgot password?
        </div>

        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Don&apos;t have an account?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
}
