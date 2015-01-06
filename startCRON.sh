#!/bin/bash
#
#write out current crontab
crontab -l > mycron
#echo new cron into cron file
echo "55 8 * * 1-5 /usr/local/bin/node ${PWD}/attendance.js" >> mycron
#install new cron file
crontab mycron
rm mycron
