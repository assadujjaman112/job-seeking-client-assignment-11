const JobSearchTips = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mt-5 font-bold">
        Job Search Tips
      </h1>
      <p className="w-11/12 md:w-4/5 lg:w-2/3 text-center mx-auto my-3">
        Welcome to our Job Search Tips section, designed to empower you in your
        journey to find the perfect job. Whether you are a seasoned professional
        or just starting your career, these tips will help you stand out in the
        competitive job market.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-8 lg:mt-12">
        <div className="bg-zinc-100 rounded-lg py-5">
          <h1 className=" text-center text-2xl font-bold my-5">
            Crafting an Impressive Resume
          </h1>
          <ol className="px-5 space-y-2">
            <li>
              <span className="font-bold">1.</span> Ensure your resume is
              well-organized, highlighting your skills and experiences.
            </li>
            <li>
              <span className="font-bold">2.</span> Tailor your resume for each
              job application by emphasizing relevant achievements.
            </li>
            <li>
              <span className="font-bold">3.</span> Use action verbs to describe
              your accomplishments and responsibilities.
            </li>
            <li>
              <span className="font-bold">4.</span> Include a professional
              summary that showcases your career goals and strengths.
            </li>
          </ol>
        </div>
        <div className="bg-zinc-100 rounded-lg py-5">
          <h1 className=" text-center text-2xl font-bold my-5">
            Building an Effective LinkedIn Profile
          </h1>
          <ol className="px-5 space-y-2">
            <li>
              <span className="font-bold">1.</span> Create a comprehensive
              LinkedIn profile with a professional photo.
            </li>
            <li>
              <span className="font-bold">2.</span> Highlight your key skills,
              experiences, and accomplishments in the summary section.
            </li>
            <li>
              <span className="font-bold">3.</span> Connect with professionals
              in your industry to expand your network.
            </li>
            <li>
              <span className="font-bold">4.</span> Join relevant groups and
              participate in discussions to demonstrate your expertise.
            </li>
          </ol>
        </div>
        <div className="bg-zinc-100 rounded-lg py-5">
          <h1 className=" text-center text-2xl font-bold my-5">
            Preparing for Interviews
          </h1>
          <ol className="px-5 space-y-2">
            <li>
              <span className="font-bold">1.</span> Research the company
              thoroughly before the interview.
            </li>
            <li>
              <span className="font-bold">2.</span> Practice common interview
              questions to build confidence.
            </li>
            <li>
              <span className="font-bold">3.</span> Prepare specific examples
              that showcase your skills and achievements.
            </li>
            <li>
              <span className="font-bold">4.</span> Follow up with a thank-you
              email expressing your gratitude for the opportunity.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default JobSearchTips;
