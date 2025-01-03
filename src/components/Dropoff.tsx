const DropOffSection: React.FC = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
        {/* Radio Button */}
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="dropoff"
            id="dropoff"
            className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300"
          />
          <label htmlFor="dropoff" className="text-sm font-medium text-gray-700">
            Drop - Off
          </label>
        </div>
  
        {/* Locations Dropdown */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Locations</label>
          <select className="border rounded-lg p-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500">
            <option>Select your city</option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>San Francisco</option>
          </select>
        </div>
  
        {/* Date Dropdown */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Date</label>
          <select className="border rounded-lg p-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500">
            <option>Select your date</option>
            <option>2023-12-20</option>
            <option>2023-12-21</option>
            <option>2023-12-22</option>
          </select>
        </div>
  
        {/* Time Dropdown */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Time</label>
          <select className="border rounded-lg p-2 text-gray-700 focus:ring-blue-500 focus:border-blue-500">
            <option>Select your time</option>
            <option>10:00 AM</option>
            <option>2:00 PM</option>
            <option>6:00 PM</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default DropOffSection;
  