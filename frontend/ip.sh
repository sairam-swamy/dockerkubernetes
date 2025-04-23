#!/bin/sh
echo "🌐 Fetching public IP..."
IP=$(curl -s https://ipinfo.io/ip)
echo "REACT_APP_API_URL=http://$IP:5000" > .env
echo "✅ .env created with API URL: http://$IP:5000"

