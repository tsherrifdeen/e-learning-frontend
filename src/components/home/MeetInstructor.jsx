const instructors = [
  {
    id: 1,
    name: "Devon Lane",
    position: "Software engineer",
    rating: 4.5,
    studentNo: 25651,
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/f814/dbe4/799d35d6bc29e2e2c2732d05d33b7557?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JW~pjBfOIoY64~VmX8pLKprelNFO2SniGoXPK~N6s~iqBAP-EaJ7m6j~vzWYxJqokcw1adIUhyET4abm8is52t86IxuirGTPII8qROSxaEi9bpchywcqqmZ73Zw6V5SNLJXVA-7a8bp9ZCJ47IHof1MusYngF9qz1k1vlSLNyKeLEDb~AQjrveGks2pleuczgYFs35RymVlLr5LVT8Pg4nAzciwaCD~qxdSuAHdKB6Xmt3K~jw2P-5m~0-IFJxymkom1qrczGhygTalXj711pLfaWl1H3ZW25HZ1kMXXwaz2hlcW7nHRonWW4rrhCEcTTt7BrRGIYerCVAsylJIa6g__",
  },
  {
    id: 2,
    name: "Devon Lane",
    position: "Software engineer",
    rating: 4.5,
    studentNo: 25651,
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/1707/10a9/3a038de4fe656f1f630251bdb519c7d2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DsSm3~opV2t1ulZmkDevchgwQxJWBbiJ2Lxjrs-BNI38uVJdJWk4BHvEx3HMsk6FEd2WfrWB0v6-WiNugSYo4EqxDxwpq9APzAXC2F0jZGSvgNEl8kNFZq6qgZOmxxYvmggmhAnTZaZH5kc5KiyTS8EP6oYwDCWrl5iKu5~rLQXyiamFiw8UAHcham9LNlkaJmF9ROFgd~dt9ZIkkpiwr7QUK2beUhcFEBc0LOtwawtEc5f88dqLjlZXN7GPRdmfw60mKG2xPJzH0OQwPjvQ6ySwuEZinWdmw1Xln3RRWXMoDtEov-jPceBrkfwZfXh6DCiJa~uVQukZoH5Zs7VX5w__",
  },
  {
    id: 3,
    name: "Devon Lane",
    position: "Software engineer",
    rating: 4.5,
    studentNo: 25651,
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/aa56/f848/c9838eb938289dabb68eb23831e0bceb?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZiJMthEXkSnNouMKYAYPxXAVrJUO7adp~EbGuvj7JuExQOQ8-fnv1b1WCdEUaqeDKr98MqpaPrY5Dl-uQSSgwBQa-cH2Tso5AZOSz1DyezPGnd4qbl6vLHirEPcdvrOMhXAKSS3KQCQi6in2eQRMo5Rw7YZpQk74DbROVB8jKrLMV1mhiYfrGZYR2PtgSAz6~SK1-uMOBWuaef4jrZflxSfWPU~yn6igoaQec6lJ45ah5wVY7Ik3HSPpHcgL1Y4kwm06NzcqVieha8bfpMzu9Zy5gRD9k8iH6YTW7uouX-2XK~W9EbWm01QljZHzjrKk0mqY1CFTdbKaMAoxcUK5Rg__",
  },
  {
    id: 4,
    name: "Devon Lane",
    position: "Software engineer",
    rating: 4.5,
    studentNo: 25651,
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/31f4/52e5/ca733a884c0323f3d0b0cfceea7cfbe6?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FmTiXayOx6pj14Z-nU6P~nm8Tzv~uNYzfoqswF7XtW9eOYlwQaktkuxmmzTgoiZTJJpPws8xRdpQhw9XESZq1YCncIZbTee~htNjEip0y2Cw9BVDSi5G3c4YzSgrRFDcXaDWgtl~2WNP6rJrgJ3LrBVOEurqBRRV82rFzdw2IzaNry8rX3tMgUpZId-c9jdNrDBxiBHLp0Jsk0PMD7gQk9nLjVzVoRJnEys5kITe6tZnOsXrdK~Yofw-vNI7krruzyE5FEcB4JnYAv2K~LoqZAJevIpKw-b6RaCjvImZCbVJt~lK6O2lpZ9MP7Pn5891cVX9H5kB0bpC8aATLwbw4Q__",
  },
];
const MeetInstructor = () => {
  return (
    <section className="pb-12">
      <h1 className="mb-6 text-3xl font-bold text-center md:text-4xl text-midnightBlue">
        Meet Our Instructors
      </h1>
      <div className="grid items-center grid-cols-4 gap-8">
        {instructors.map((instructor) => (
          <div
            key={instructor.id}
            className="items-center w-full max-w-sm text-center bg-white border-gray-400 rounded-md shadow-md"
          >
            <img
              src={instructor.imageSrc}
              className="object-cover h-[250px] w-full object-top rounded-t-md"
              alt=""
            />
            <div className="p-4">
              <h6 className="mb-3 text-lg font-semibold capitalize">
                {instructor.name}
              </h6>
              <p className="mb-3 font-semibold text-gray-400 capitalize">
                {instructor.position}
              </p>
              <div className="flex items-center justify-between p-2 border-t border-t-gray-300">
                <div>
                  <span className="text-2xl text-yellow">★</span> 4.5
                </div>
                <p className="">
                  {instructor.studentNo}
                  <span className="text-gray-400"> students</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetInstructor;
