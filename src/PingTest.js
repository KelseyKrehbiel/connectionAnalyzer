import React from "react";
import ping from 'ping';

export default function PingTest() {
  const getPingResult = () => {
      let pingResult = 42;
      console.log(pingResult);
      var host = 'google.com';
      ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        console.log(msg);
      });
      return pingResult.toString()
  }
    return (
    <div>
      <h2>Ping Results</h2>
      <div>{getPingResult()}</div>
    </div>
  );
}
