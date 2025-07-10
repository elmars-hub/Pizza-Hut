function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-stone-900/20 backdrop-blur-sm z-50">
      <div className="card p-8 flex flex-col items-center gap-4">
        <div className="loader"></div>
        <p className="text-stone-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}

export default Loader;
