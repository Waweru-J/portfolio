const ContactByEmail = () => {
    return (
      <form className="mt-4">
        <div>
          <h1 className="text-lg font-medium mb-4">Enter Your Details</h1>
  
          <label htmlFor="textInput" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="textInput"
            type="text"
            className="mt-1 block w-full p-2 border border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
  
          <label htmlFor="emailInput" className="block text-sm font-medium text-gray-700 mt-4">Email</label>
          <input
            id="emailInput"
            type="email"
            className="mt-1 block w-full p-2 border border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
  
          <label htmlFor="phoneInput" className="block text-sm font-medium text-gray-700 mt-4">Phone number</label>
          <input
            id="phoneInput"
            type="phone"
            className="mt-1 block w-full p-2 border border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
  
          <label htmlFor="messageInput" className="block text-sm font-medium text-gray-700 mt-4">Please share something that would help me prepare well for the meeting</label>
          <textarea
            id="messageInput"
            name="message"
            className="mt-1 block w-full p-2 border border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 h-24 resize-none"
          />
  
          <label htmlFor="datetimeInput" className="block text-sm font-medium text-gray-700 mt-4">Choose Date & Time for the Meeting</label>
          <input
            id="datetimeInput"
            type="datetime-local"
            className="mt-1 block w-full p-2 border border-blue-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
  
          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white uppercase p-2 rounded hover:bg-blue-600"
          >
            Schedule Meeting
          </button>
        </div>
      </form>
    );
  };
  
  export default ContactByEmail;
  