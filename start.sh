#!/bin/bash
#
echo -n "Enter your Github username and press [ENTER]: "
read username
echo -n "Enter your Github password and press [ENTER]: "
read password
echo

username_encoded=$(echo -n "$username" | openssl enc -base64)
password_encoded=$(echo -n "$password" | openssl enc -base64)

echo -e "module.exports = {\n\tusername: '"$username_encoded"',\n\tpassword: '"$password_encoded"'\n};" > 'config/accountInfo.js'

#write out current crontab
crontab -l > mycron
#echo new cron into cron file
# echo "55 8 * * 1-5 PHANTOMJS_EXECUTABLE="$(which phantomjs)" "$(which casperjs)" ${PWD}/attendance.js" >> mycron
echo "* * * * * PHANTOMJS_EXECUTABLE="$(which phantomjs)" "$(which casperjs)" ${PWD}/attendance.js" >> mycron
#install new cron file
crontab mycron
rm mycron


