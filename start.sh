#!/bin/bash
sh -c 'PORT=3001 node server/bin/www' &
cd client
npm run start
