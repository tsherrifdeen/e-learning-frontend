const CardForm = () => {
  return (
    <div className="max-w-3xl py-4 mx-auto">
      <div>
        <div>
          <h2 className="text-3xl font-semibold text-slate-800">
            Were Here for You
          </h2>
        </div>
        <div>
          <span className="text-sm text-gray-700">
            Your feedback matters! Share your thoughts and suggestions to help
            us grow and deliver an exceptional e-learning journey.
          </span>
        </div>
      </div>
      <div className="mt-5">
        <form>
          <div className="grid gap-10 mb-10 md:grid-cols-2">
            <div>
              <div className="mb-2">
                <h2>First Name</h2>
              </div>
              <div>
                <input
                  className="w-full h-10 px-3 border rounded-md outline-none"
                  type="text"
                />
              </div>
            </div>

            <div>
              <div className="mb-2">
                <h2>Last Name</h2>
              </div>
              <div>
                <input
                  className="w-full h-10 px-3 border rounded-md outline-none"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-2">
              <h2>Email</h2>
            </div>
            <div>
              <input
                className="w-full h-10 px-3 border rounded-md outline-none"
                type="email"
              />
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-2">
              <h2>Subject</h2>
            </div>
            <div>
              <input
                className="w-full h-10 px-3 border rounded-md outline-none"
                type="text"
              />
            </div>
          </div>
          <div className="mb-5">
            <div className="mb-2">
              <h2>Message</h2>
            </div>
            <div>
              <textarea className="w-full h-32 p-3 border rounded-md outline-none"></textarea>
            </div>
          </div>
          <div>
            <button className="bg-[#055FF0] px-6 py-2 rounded-xl text-white">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CardForm;
