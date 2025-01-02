import ReceiptImage from "./receipt.png"

const PaymentConfirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <div className="max-w-4xl bg-white  rounded-lg p-6">
        <div className="flex flex-col items-center text-center">
          {/* Image */}
          <img
            src={ReceiptImage}
            className="mb-6 w-full max-w-xl"
          />

          {/* Heading */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Congratulations! Your payment has been successfully confirmed
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            Get ready to embark on an exciting learning journey. Access the
            course materials and start expanding your knowledge and skills
            today. Enjoy the learning experience and feel free to reach out to
            us if you have any questions or need further assistance. Happy
            learning!
          </p>

          {/* Button */}
          <button className="bg-blue text-white font-medium py-2 px-6 rounded-md hover:bg-blue-600">
            Dive Into Knowledge Now
          </button>
        </div>

        {/* Order Details */}
        <div className="mt-8 p-4 border rounded-xl">
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Order:</span>
            <span className="text-sm">Web Development Masterclass & Certification 1, Web Development 2</span>
          </div>
          <div className="flex justify-between text-gray-700 mt-4">
            <span className="font-medium text-sm">Date:</span>
            <span className="text-sm">May 26, 2023</span>
          </div>
          <div className="flex justify-between text-gray-700 mt-4">
            <span className="font-medium text-sm">Payment Method:</span>
            <span className="text-sm">Credit Card (Visa)</span>
          </div>
          <div className="flex justify-between text-gray-700 mt-4">
            <span className="font-medium text-sm">Total Amount:</span>
            <span className="text-sm">₦30,000</span>
          </div>
          <div className="flex justify-between text-gray-700 mt-4">
            <span className="font-medium text-sm">Transaction ID:</span>
            <span className="text-sm">ABC123XYZ456</span>
          </div>
          <div className="flex justify-between text-gray-700 mt-4">
            <span className="font-medium text-sm">Billing Email:</span>
            <span className="text-sm">example@email.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
