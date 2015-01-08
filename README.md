#HR-Attendance

##Summary
HR-Attendance sets up a CRON job that automatically signs a user into Bookstrap

##How to run?
Install PhantomJS and CasperJS by running the following command in terminal:
````
brew update && brew install phantomjs && brew install casperjs --devel
````
Run the following command to save this CRON job:
````
npm start
````
Input your github username and password that will be used to sign into bookstrap (your information will be encrypted and stored only on your computer):
````

````
##How do I know this script is running?
Run the following command to preview your current CRON jobs:
````
crontab -l
````
The output should look similar to the following:
````
55 8 * * 1-5 PHANTOMJS_EXECUTABLE=/usr/local/bin/phantomjs /usr/local/bin/casperjs /Users/Zai/Desktop/HackReactor/Attendance/attendance.js
````
##How do I remove this CRON job?
Run the following in your terminal
````
crontab -e
````
Remove the analogous line from your CRON list:
````
55 8 * * 1-5 PHANTOMJS_EXECUTABLE=/usr/local/bin/phantomjs /usr/local/bin/casperjs /Users/Zai/Desktop/HackReactor/Attendance/attendance.js
````
###Please contact me if you run into any errors or star this repo if you found this service useful
