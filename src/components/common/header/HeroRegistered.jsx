const HeroRegistered = () => {
  return (
    <div className="flex gap-5 pl-3 bg-gray-400 rounded-2xl max-md:flex-wrap">
      <div className="flex justify-center items-center px-2.5 my-auto w-11 h-11 shadow-md bg-slate-950 bg-opacity-60 rounded-[32px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f80378a63f80c09b75434559f34c7210cebb6024b5de89208add416ed924475c?apiKey=773458c8cc044c55a6297f97d04f683e&"
          className="w-6 aspect-square"
        />
      </div>
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch justify-center w-full px-8 py-8 my-auto bg-white rounded-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="self-center text-xl font-semibold leading-8 text-blue-900">
                Elevate Your Skills
              </div>
              <div className="mt-12 text-base leading-7 text-gray-700 max-md:mt-10 max-md:max-w-full">
                Save 25% on select courses! Enroll now and seize this
                limited-time offer to enhance your skills and knowledge at a
                discounted price. Don 't wait, start learning today!
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden relative flex-col grow justify-center items-end px-16 py-20 min-h-[525px] max-md:pl-5 max-md:mt-3.5 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/044bcc29202a62971326329deb5af1c14d1d72c971f931d7203fe02d847ec00e?apiKey=773458c8cc044c55a6297f97d04f683e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/044bcc29202a62971326329deb5af1c14d1d72c971f931d7203fe02d847ec00e?apiKey=773458c8cc044c55a6297f97d04f683e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/044bcc29202a62971326329deb5af1c14d1d72c971f931d7203fe02d847ec00e?apiKey=773458c8cc044c55a6297f97d04f683e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/044bcc29202a62971326329deb5af1c14d1d72c971f931d7203fe02d847ec00e?apiKey=773458c8cc044c55a6297f97d04f683e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/044bcc29202a62971326329deb5af1c14d1d72c971f931d7203fe02d847ec00e?apiKey=773458c8cc044c55a6297f97d04f683e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/044bcc29202a62971326329deb5af1c14d1d72c971f931d7203fe02d847ec00e?apiKey=773458c8cc044c55a6297f97d04f683e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/044bcc29202a62971326329deb5af1c14d1d72c971f931d7203fe02d847ec00e?apiKey=773458c8cc044c55a6297f97d04f683e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/044bcc29202a62971326329deb5af1c14d1d72c971f931d7203fe02d847ec00e?apiKey=773458c8cc044c55a6297f97d04f683e&"
                className="absolute inset-0 object-cover size-full"
              />
              <div className="flex relative justify-center items-center px-2.5 mt-36 w-11 h-11 shadow-md bg-slate-950 bg-opacity-60 rounded-[32px] max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa32a4a0d11244d9efd0859280fa3594ed3fce7013140d0ceb20f1d00c68105c?apiKey=773458c8cc044c55a6297f97d04f683e&"
                  className="w-full aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroRegistered;
