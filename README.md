# odin altilly api

Generate an API key from Altilly at https://www.altilly.com/user/profile/api

# Install
```
npm start
```

Examples

# Bash
```
#!/bin/sh
username="yourapikey"
password="yourapisecret"
price="0.00000100" #Price to pay for Odin

curl -X POST -H "Content-Type: application/json" \
--data '{"altillyurl" : "https://api.altilly.com/api/order", "username" : "'"$username"'" ,"password" : "'"$password"'","quantity" : "'"$quantity"'","price" : "'"$price"'" }' \
http://localhost:8081/limitbuy
```
