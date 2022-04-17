import React, { useEffect, useState } from "react";

const ServiceHooks = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return [services, setService];
};

export default ServiceHooks;
