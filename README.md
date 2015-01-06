#HR-Attendance

##Summary
HR-Attendance allows HR students to automatically sign into Bookstrap

##Problem

##Solution

##How to run?
Install PhantomJS and CasperJS by running the following command in terminal:
````
brew update && brew install phantomjs && brew install casperjs
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
npm start
````
##How do I know this script is running?
Run the following command to preview your current CRON jobs:
````
crontab -l
````
The output should look similar to the following:
````
55 8 * * 1-5 /usr/local/bin/node /Users/Zai/Desktop/HackReactor/Attendance/attendance.js
````
##I just graduated HR. How do I remove this CRON job?
Run the following in your terminal
````
crontab -e
````
Remove the analogous lines from your CRON window
````
55 8 * * 1-5 /usr/local/bin/node /Users/Zai/Desktop/HackReactor/Attendance/attendance.js
````
