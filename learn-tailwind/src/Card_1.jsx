export default function card_1() {
  return (
    <div className="flex justify-center mb-10">
      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg overflow-hidden shadow-xl max-w-sm">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-white">
            Hello Traveler,
          </h2>
          <p className="text-sm mb-4 text-white">
            This website uses cookies to enhance user experience and to analyze
            performance and traffic on our website.
          </p>
          <div className="flex justify-end space-x-4">
            <button className="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded">
              Accept
            </button>
            <button className="duration-300 bg-black/0 hover:bg-black/25 text-white font-bold py-2 px-4 rounded">
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
