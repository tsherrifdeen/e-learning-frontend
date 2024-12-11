<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
  {/* Requirements Section */}
  <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Requirements</h2>
    <ul className="list-disc pl-6 text-gray-700">
      <li>Passion for design</li>
      <li>Patience and practice</li>
      <li>Creativity mindset</li>
      <li>Computer with compatible operating system</li>
      <li>Creativity mindset</li>
    </ul>
  </div>

  {/* Tags Section */}
  <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Tags</h2>
    <div className="flex flex-wrap gap-2">
      {[
        "Graphic Designers",
        "Digital Artists",
        "Web Designer",
        "UI/UX Designers",
        "Photographers",
        "Photographers",
      ].map((tag, index) => (
        <span
          key={index}
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
</div>
