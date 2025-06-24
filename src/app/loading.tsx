export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold font-mono relative">
        <span className="animate-loading">Loading...</span>
      </h1>
    </div>
  );
}