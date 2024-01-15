const TopCompanies = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center my-5 font-bold">
        Top Companies
      </h1>
      <p className="w-11/12 md:w-4/5 lg:w-2/3 text-center mx-auto my-3">
        Explore career opportunities with our Top Companies section, showcasing
        industry leaders known for excellence and innovation. Discover workplace
        cultures, job openings, and unique benefits, propelling your career to
        new heights. Elevate your professional journey with the best employers
        featured on our platform
      </p>
      <div className="flex flex-wrap gap-5 justify-center mt-5 md:mt-8 lg:mt-12 text-center">
        <div className="bg-zinc-300 py-8 px-5 rounded-lg w-64">
          <h1 className="text-xl font-bold">Apple Inc</h1>
          <p className="font-semibold text-sm">Technology</p>
        </div>
        <div className="bg-zinc-300 py-8 px-5 rounded-lg">
          <h1 className="text-xl font-bold">Microsoft Corporation</h1>
          <p className="font-semibold text-sm">Technology</p>
        </div>
        <div className="bg-zinc-300 py-8 px-5 rounded-lg">
          <h1 className="text-xl font-bold">JPMorgan Chase & Co.</h1>
          <p className="font-semibold text-sm">Finance</p>
        </div>
        <div className="bg-zinc-300 py-8 px-5 rounded-lg">
          <h1 className="text-xl font-bold">Bank of America Corp.</h1>
          <p className="font-semibold text-sm">Finance</p>
        </div>
        <div className="bg-zinc-300 py-8 px-5 rounded-lg">
          <h1 className="text-xl font-bold">Toyota Motor Corporation</h1>
          <p className="font-semibold text-sm">Automotive</p>
        </div>
        <div className="bg-zinc-300 py-8 px-5 rounded-lg">
          <h1 className="text-xl font-bold">General Motors Company</h1>
          <p className="font-semibold text-sm">Automotive</p>
        </div>
        <div className="bg-zinc-300 py-8 px-5 rounded-lg">
          <h1 className="text-xl font-bold">Novartis International AG</h1>
          <p className="font-semibold text-sm">Healthcare</p>
        </div>
      </div>
    </div>
  );
};

export default TopCompanies;
