const PageLoader = ({ message = "Finding opportunities for you..." }) => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-gray-200 border-t-[#331D2C] rounded-full animate-spin mx-auto mb-6" />
      <h2 className="text-2xl font-extrabold tracking-tight">
        <span className="text-amber-500">i</span>
        <span className="text-[#331D2C]">ApplyNow</span>
      </h2>
      <p className="text-gray-400 text-sm mt-2">{message}</p>
    </div>
  </div>
);

export default PageLoader;
