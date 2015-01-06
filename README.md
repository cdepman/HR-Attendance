#HR-Attendance

##Summary
HR-Attendance allows HR students to automatically sign into Bookstrap

##Problem

##Solution

##How to run?
Fork this repo
Install casperJS by running the following command in terminal
````
brew install casperjs
````
Fill the ./config/yourGithubAccountInfo.js file with your github account info:
````
module.exports = {
  username: 'username',
  password: 'password'
};
````
Run the following command to save this CRON job:
````
chmod u+x ./startCRON; ./startCRON
````

##How do I know this script is running?
Run the following command to preview your current CRON jobs:
````
crontab -l
````
The output should look similar to the following
````
55 8 * * 1-5 /usr/local/bin/node /Users/Zai/Desktop/HackReactor/Attendance/attendance.js
````
