import React from "react";

const CommunitySection = () => {
  return (
    <section className="bg-[#5b73cf] text-white py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-8">
          Join the Education.com community!
        </h2>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center gap-12 text-center">
          <div>
            <img src="/character1.png" alt="icon1" className="mx-auto w-24 h-24" />
            <p className="text-yellow-400 font-bold text-xl mt-4">
              44 million
            </p>
            <p className="text-sm">parents, teachers, and students served</p>
          </div>
          <div>
            <img src="/character2.png" alt="icon2" className="mx-auto w-24 h-24" />
            <p className="text-yellow-400 font-bold text-xl mt-4">
              Used in 20 countries
            </p>
            <p className="text-sm">across 6 continents</p>
          </div>
          <div>
            <img src="/character3.png" alt="icon3" className="mx-auto w-24 h-24" />
            <p className="text-yellow-400 font-bold text-xl mt-4">
              38,000
            </p>
            <p className="text-sm">educational resources</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-[#6f89dd] p-6 rounded-lg max-w-6xl mx-auto space-y-6">
        {/* Testimonial 1 */}
        <div className="relative bg-white text-black rounded-xl p-6 w-fit max-w-xl">
          <p>
            I love that it shows me the areas my child needs to improve on and
            directs me to resources to work with him on. It's easy to understand
            and navigate to each area I need to go.
          </p>
          <div className="mt-4 text-sm font-medium">
            <p className="text-black font-semibold">Sarah H.,</p>
            <p className="text-gray-600">parent and Education.com premium member</p>
          </div>
          <div className="absolute left-10 -bottom-4 w-5 h-5 bg-white rotate-45"></div>
        </div>

        {/* Testimonial 2 */}
        <div className="relative bg-white text-black rounded-xl p-6 w-fit max-w-xl ml-auto flex flex-col items-end">
          <p>
            Education.com has multiple resources organized for any learning tool
            you might need as a teacher, parent, and student, and I love the ability
            to be able to sort by grade, subject, enrichment, or type!
          </p>
          <div className="mt-4 flex items-center gap-3 text-right">
            <img
              src="/amy.png"
              alt="Amy"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="text-sm">
              <p className="text-black font-semibold">Amy Jo Meiners</p>
              <p className="text-gray-600">2016 Alaska Teacher of the Year</p>
            </div>
          </div>
          <div className="absolute right-10 -bottom-4 w-5 h-5 bg-white rotate-45"></div>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-3 rounded-full transition">
          Read more
        </button>
      </div>
    </section>
  );
};

export default CommunitySection;
