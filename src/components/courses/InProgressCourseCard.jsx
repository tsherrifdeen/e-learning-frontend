const InProgressCourseCard = ({
  imageSrc,
  title,
  currentLecture,
  totalLectures,
  timeLeft,
  progress,
}) => {
  return (
    <article className="rounded-xl max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
          <div className="flex items-center justify-center grow">
            <img
              loading="lazy"
              src={imageSrc}
              alt={`Course thumbnail for ${title}`}
              className="aspect-[0.88] w-[133px]"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch justify-between w-full p-4 mx-auto bg-gray-200 grow">
            <h3 className="text-lg font-bold leading-7 text-gray-700">
              {title}
            </h3>
            <div className="flex justify-between w-full gap-5 pr-20 mt-2 text-xs leading-6 text-neutral-400 max-md:pr-5">
              <div className="flex gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/582eefdc1f52238a5a21c42645830889f974126b5eb432693ee256cbc89c6e60?apiKey=773458c8cc044c55a6297f97d04f683e&"
                  alt=""
                  className="w-4 my-auto shrink-0 aspect-square"
                />
                <div>
                  Lecture {currentLecture} of {totalLectures}
                </div>
              </div>
              <div className="flex gap-2">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd992ab44f9626edff117202e592b4cca92ff1109e325274a2bc0d14b0bb5d69?apiKey=773458c8cc044c55a6297f97d04f683e&"
                  alt=""
                  className="w-4 my-auto shrink-0 aspect-square"
                />
                <div>{timeLeft} left</div>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <div className="flex flex-col justify-center my-auto">
                <div className="flex flex-col justify-center bg-sky-100 rounded-xl">
                  <div
                    className="shrink-0 h-2.5 bg-blue-800 rounded-xl"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
              <div className="text-xs leading-5 text-blue-700">{progress}%</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default InProgressCourseCard;
