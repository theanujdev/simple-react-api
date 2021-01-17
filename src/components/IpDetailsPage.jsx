import { useState } from "react";

const IpDetailsPage = () => {
  const [ipDetails, setIpDetails] = useState({});
  function getDetails() {
    fetch("https://freegeoip.app/json/") //http://ip-api.com/json/
      .then((res) => res.json())
      .then((res) => {
        delete res.metro_code;
        setIpDetails(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <section className="bg-gray-100 p-10">
      <div className="container text-center mx-auto">
        <h1 className="text-xl sm:text-3xl text-center mb-7 sm:mb-10">
          Get details from your IP address
        </h1>
        <button
          onClick={getDetails}
          className="bg-purple-500 text-white px-5 py-2 rounded-3xl shadow-md focus:outline-none hover:bg-purple-700"
        >
          Get Details
        </button>
        {Object.keys(ipDetails).length !== 0 && (
          <div className="bg-white text-md sm:text-lg mt-10 w-max p-3 sm:p-5 mx-auto shadow-md">
            {Object.keys(ipDetails).map((key) => {
              return (
                <p key={key} className="pb-2 sm:px-10">
                  <span className="font-bold uppercase">{key} : </span>
                  {ipDetails[key]}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default IpDetailsPage;
