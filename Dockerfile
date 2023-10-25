FROM 172.16.0.135:20080/public/node-pm2:14

COPY . /app

CMD npm run start:pm2 && pm2 logs
