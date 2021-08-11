import os

DB_CONFIG = {
    'user': 'root', 
    'passwd': '0000', 
    'host': 'localhost', 
    'db': 'forme', 
    'charset': 'utf8'
}

GOOGLE_CONFIG = {
    'GOOGLE_CLIENT_ID': os.environ.get("GOOGLE_CLIENT_ID", "951621715915-rdqcc3oiejd3vj0mnbafgjh60rjj15gu.apps.googleusercontent.com"),
    'GOOGLE_CLIENT_SECRET': os.environ.get("GOOGLE_CLIENT_SECRET", "v44cMoJYS-27KxbjYNsh-WzS"),
    'GOOGLE_DISCOVERY_URL': "https://accounts.google.com/.well-known/openid-configuration"
}