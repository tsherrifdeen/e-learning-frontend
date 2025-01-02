import Header from '../Header'

const CourseTable = () => {
  const courses = [
    {
      tutor: "John Watkins",
      category: "Design",
      date: "21-03-2022",
      price: "$682.5",
      duration: "19:37:51 hours",
      status: "Approved",
    },
    {
      tutor: "John Watkins",
      category: "Design",
      date: "21-03-2022",
      price: "$682.5",
      duration: "19:37:51 hours",
      status: "Declined",
    },
    {
      tutor: "John Watkins",
      category: "Design",
      date: "21-03-2022",
      price: "$682.5",
      duration: "19:37:51 hours",
      status: "Pending",
    },
    {
      tutor: "John Watkins",
      category: "Design",
      date: "21-03-2022",
      price: "$682.5",
      duration: "19:37:51 hours",
      status: "Pending",
    },
    {
      tutor: "John Watkins",
      category: "Design",
      date: "21-03-2022",
      price: "$682.5",
      duration: "19:37:51 hours",
      status: "Declined",
    },
    {
      tutor: "John Watkins",
      category: "Design",
      date: "21-03-2022",
      price: "$682.5",
      duration: "19:37:51 hours",
      status: "Declined",
    },
    {
      tutor: "John Watkins",
      category: "Design",
      date: "21-03-2022",
      price: "$682.5",
      duration: "19:37:51 hours",
      status: "Approved",
    },
    {
      tutor: "John Watkins",
      category: "Design",
      date: "21-03-2022",
      price: "$682.5",
      duration: "19:37:51 hours",
      status: "Approved",
    },
    
    // Add more rows as needed...
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-600";
      case "Declined":
        return "bg-red-100 text-red-600";
      case "Pending":
        return "bg-yellow text-yellow-600";
      default:
        return "";
    }
  };

  return (
   <div>
    <Header/>
         <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full  rounded-lg">
          <thead>
            <tr className='bg-gray-100 rounded-lg'>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 border-b">
                Tutor Name
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 border-b">
                Category
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 border-b">
                Date Created
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 border-b">
                Price
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 border-b">
                Duration
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 border-b">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="hover:bg-gray-50 border rounded-xl">
                <td className="py-3 px-4 text-sm text-gray-800">{course.tutor}</td>
                <td className="py-3 px-4 text-sm text-gray-800">{course.category}</td>
                <td className="py-3 px-4 text-sm text-gray-800">{course.date}</td>
                <td className="py-3 px-4 text-sm text-gray-800">{course.price}</td>
                <td className="py-3 px-4 text-sm text-gray-800">{course.duration}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                      course.status
                    )}`}
                  >
                    {course.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   </div>
  );
};

export default CourseTable;
