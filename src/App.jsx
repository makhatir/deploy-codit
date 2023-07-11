import React, { useEffect, useState } from 'react';
import './App.css';

import axios from 'axios';
import SwitchRoute from './components/Router/SwitchRoute';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://cors-anywhere.herokuapp.com/https://codit-json.s3.us-east-1.amazonaws.com/data.json?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCWV1LXdlc3QtMiJHMEUCIB4WpCik4wtzDx3PYBToITbYoRAzzMON7Tvro5F5g5MuAiEAx3Xyt6wqq2vbt7Os8KOJPyR0ir6FBHojD9D6%2BFPRm3wq8QIIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1MjkxOTA2MzUwNjEiDAHqKR7%2FjN0cmtYAMSrFAnf08MElgIU2aTV6wfqiCKkAHY7TKdgB1eiR%2Bd%2BCiYEOHmIc6Rxo6RfogOS%2BjznKxwQriQ2dpVq4BZ07364TOSd0GeSM%2FF2y0q%2FwNHtsJ9%2FBown1FNRGuV1%2Bl1kgWCrlDZ0ZWznMJWJxRnJ91Gmfx4%2BBZDw%2FU85VZoenmYKmDoZ1M5kMIyCGz87yr2D4FR9MKWQoeVZZXwxaH4Y22aklR0VPo5ULlPsxDV3hgfyzi%2B7B7LyE1kCiXjmQbvMgb5Fln%2FAnh5vgemIIVz612FSpczht7r3prXtAFuVIb%2F%2BHp2jcruWVZ3yIlfFoiH%2Bd3tbRngXNXPj%2B7wedIOxIDiLvqSRZepzk45FjvLwypnWzMe3W4jel%2FrdfYNG06MqA24NNr71%2FcmAuoW7KlAGr6oSQD%2FW6UgUfiBE9LIpxrIOGj5bXXEIynHAwgPi0pQY6swKV72YO2doMzWQfF7MiXjhvPvad51teBhZGzhjNbSzYWCSEut4heBfzRTtHtczBGYAtz8Pef6YecAixFJfiUAPI1eQ0lhQ9xdCpHOIsnAWv7evSs6XIx4NlCUTtn%2BQFpfhKYhshCSG6PnkVe%2F9SiRyTSt30gY1C78Q8MfYxSMgHRvQhucXzopn0Wtmo3yvptsu3uhEGEXfhNhfq3Mry4KHSHzFaGG55g2%2FHiRPbfeDP53gYd8UQP%2BA4WNKGxtIsFgrPWSTkVqg8h8LhbJn%2Fu6%2F3Z72w6fsvp6fIWBr5b%2Bp3GL3aQU7SUCMfW5oCZ39N8TwT3vnaquZ7c5zWp47vc3biY%2FLygXxKneT1g9FnqHqhPKyqjPaBAl7XRZNMKs%2FwBNBD5k%2FfGSI75m7S3t%2BGHjA9tTWb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230711T113531Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAXWNRYIY23QWC7YPH%2F20230711%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=49a04be1f9f9c731c222ca987ebe0f4aab6981dc652b8a24c56016c57667e50b',
          {
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
              Origin: 'http://localhost:3000', // Remplacez par l'URL de votre domaine
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App full-site">
      <SwitchRoute props={data}/>
    </div>
  );
}

export default App;
