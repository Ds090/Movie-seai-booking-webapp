const SpinnerLoader = () => {
  return (
    <div className="flex justify-center items-center absolute bg-[#00000071] w-full h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-b-8 border-b-black border-teal-500 text-xl"></div>
    </div>
  );
};

export default SpinnerLoader;