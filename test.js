const logData = {
    topic: "reservation-service",
    eventType: "SLOT_RESERVATION",
    payload: {
      userId: 123,
      message: "hello world"
    },
    Innertopics : {
        topic: "reservation-service",
        eventType: "SLOT_RESERVATION",
        payload: {
        userId: 123,
        message: "hello world"

        }}
  };
  
  // Logging using JSON.stringify
  console.log("JSON Stringified:", JSON.stringify(logData, null, 2));
  
  // Logging using console.dir
  console.dir(logData, { depth: null });