import db_conn
import pymysql
import json
import config
import requests
from oauthlib.oauth2 import WebApplicationClient

client = WebApplicationClient(config.GOOGLE_CONFIG["GOOGLE_CLIENT_ID"])

def get_google_provider_cfg():
    return requests.get(config.GOOGLE_CONFIG["GOOGLE_DISCOVERY_URL"]).json()

def googleLogin(req):
    
    # Find out what URL to hit for Google login
    google_provider_cfg = get_google_provider_cfg()
    authorization_endpoint = google_provider_cfg["authorization_endpoint"]
    # Use library to construct the request for login and provide
    # scopes that let you retrieve user's profile from Google
    request_uri = client.prepare_request_uri(
        authorization_endpoint,
        redirect_uri=req.base_url + "/callback",
        scope=["openid", "email", "profile"],
    )
    return request_uri

def googleCallback(request):
    # Get authorization code Google sent back to you
    code = request.args.get("code")

    # Find out what URL to hit to get tokens that allow you to ask for
    # things on behalf of a user
    google_provider_cfg = get_google_provider_cfg()
    token_endpoint = google_provider_cfg["token_endpoint"]

    # Prepare and send request to get tokens! Yay tokens!
    token_url, headers, body = client.prepare_token_request(
        token_endpoint,
        authorization_response=request.url,
        redirect_url=request.base_url,
        code=code,
    )
    token_response = requests.post(
        token_url,
        headers=headers,
        data=body,
        auth=(config.GOOGLE_CONFIG["GOOGLE_CLIENT_ID"], config.GOOGLE_CONFIG["GOOGLE_CLIENT_SECRET"]),
    )

    # Parse the tokens!
    client.parse_request_body_response(json.dumps(token_response.json()))

    # Now that we have tokens (yay) let's find and hit URL
    # from Google that gives you user's profile information,
    # including their Google Profile Image and Email
    userinfo_endpoint = google_provider_cfg["userinfo_endpoint"]
    uri, headers, body = client.add_token(userinfo_endpoint)
    userinfo_response = requests.get(uri, headers=headers, data=body)

    # We want to make sure their email is verified.
    # The user authenticated with Google, authorized our
    # app, and now we've verified their email through Google!
    if userinfo_response.json().get("email_verified"):
        unique_id = userinfo_response.json()["sub"]
        users_email = userinfo_response.json()["email"]
        picture = userinfo_response.json()["picture"]
        users_name = userinfo_response.json()["given_name"]
    else:
        return "User email not available or not verified by Google.", 400

    return userinfo_response.json()


def login(req):
    userId = req.form['userid']
    userPw = req.form['userpw']

    conn = db_conn.connect_db()
    cursor = conn.cursor()

    userCheckSql = "SELECT * FROM user WHERE id=%s"
    cursor.execute(userCheckSql,(userId))
    userCheck = cursor.fetchone()
    if len(userCheck)!=0 and userCheck[1]==userPw:
        return json.dumps(userCheck,ensure_ascii=False)
    else:
        return json.dumps("User doesn't exist.",ensure_ascii=False)

def signUp(req):
    userId = req.form['userid']
    userPw = req.form['userpw']
    userEmail = req.form['useremail']
    preferences = req.form['userpreferences']
    possessing_ingredients = req.form['useringredients']

    conn = db_conn.connect_db()
    cursor = conn.cursor()

    userCheckSql = "SELECT * FROM user WHERE id=%s"
    cursor.execute(userCheckSql,(userId))
    userCheck = cursor.fetchall()
    print(userCheck)
    if len(userCheck)==0:
        signUpSql = "INSERT INTO user VALUES (%s, %s, %s, %s, %s)"
        signUpResult = cursor.execute(signUpSql, (userId, userPw, userEmail, preferences, possessing_ingredients))

        conn.commit()

    else:
        signUpResult = "UserId exists"

    return json.dumps(signUpResult,ensure_ascii=False)