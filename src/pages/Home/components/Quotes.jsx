const Quotes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 gap-y-20 mt-20">
      <div
        className=" mx-auto rounded-lg dark:bg-[#1e2329] bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"
        style={{ maxWidth: 500 }}
      >
        <div className="w-full pt-1 pb-5">
          <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
            <img
              className=" rounded-full bg-gray-50"
              src="https://www.mymac.com/wp-content/uploads/2011/10/steve_jobs135148.jpg"
              alt
            />
          </div>
        </div>
        <div className="w-full mb-10">
          <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-sm text-gray-600 dark:text-white text-center px-5">
            The only way to do great work is to love what you do.
          </p>
          <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
            ”
          </div>
        </div>
        <div className="w-full">
          <p className="text-md text-indigo-500 font-bold text-center">
            Steve Jobs
          </p>
          <p className="text-xs text-gray-500 text-center">@SteveJobs</p>
        </div>
      </div>
      <div
        className=" mx-auto rounded-lg bg-white dark:bg-[#1e2329] shadow-lg px-5 pt-5 pb-10 text-gray-800"
        style={{ maxWidth: 500 }}
      >
        <div className="w-full pt-1 pb-5">
          <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
            <img
              className=" rounded-full bg-gray-50"
              src="https://www.mymac.com/wp-content/uploads/2011/10/steve_jobs135148.jpg"
              alt
            />
          </div>
        </div>
        <div className="w-full mb-10">
          <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-sm text-gray-600 dark:text-white text-center px-5">
            The code you write makes you a programmer. The code you delete makes
            you a good one.
          </p>
          <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
            ”
          </div>
        </div>
        <div className="w-full">
          <p className="text-md text-indigo-500 font-bold text-center">
            Steve Jobs
          </p>
          <p className="text-xs text-gray-500 text-center">@SteveJobs</p>
        </div>
      </div>
      <div
        className=" mx-auto rounded-lg bg-white dark:bg-[#1e2329] shadow-lg px-5 pt-5 pb-10 text-gray-800"
        style={{ maxWidth: 500 }}
      >
        <div className="w-full pt-1 pb-5">
          <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
            <img
              className=" rounded-full bg-gray-50"
              src="https://stevemaraboli.net/wp-content/uploads/2016/02/stevemarabolivet.jpg"
              alt
            />
          </div>
        </div>
        <div className="w-full mb-10">
          <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
            “
          </div>
          <p className="text-sm text-gray-600 dark:text-white text-center px-5">
            Change starts from within. Be your own source of motivation.
          </p>
          <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
            ”
          </div>
        </div>
        <div className="w-full">
          <p className="text-md text-indigo-500 font-bold text-center">
            Steve Maraboli
          </p>
          <p className="text-xs text-gray-500 text-center">@scott.windon</p>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
