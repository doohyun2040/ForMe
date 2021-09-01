from flask import Flask, json, request, make_response, jsonify, redirect
from flask_cors import CORS
import loadRecipeList
import user
import os

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY") or os.urandom(24)
#https 사용해야 하는데 나중에 달고 http로 테스트 해보기 위해 넣음
os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
CORS(app)


@app.route("/test", methods=['GET'])
def test():
    return make_response(loadRecipeList.loadRecipeList())

@app.route("/googlelogin", methods=['POST'])
def googlelogin():
    redirect_uri = user.googleLogin(request)
    return redirect(redirect_uri)

@app.route("/googlelogin/callback")
def googlecallback():
    return make_response(user.googleCallback(request))

@app.route("/signup", methods=['POST'])
def memberSignUp():
    print(request.form)
    return make_response(user.signUp(request))

@app.route("/login", methods=['POST'])
def memberLogin():
    print(request.form)
    return make_response(user.login(request))


if __name__ == '__main__':
    app.run(host="0.0.0.0", port="8082")
