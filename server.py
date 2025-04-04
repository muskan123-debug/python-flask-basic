from flask import Flask
from flask_cors import CORS  

app = Flask(__name__)
CORS(app) 

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/about')
def about():
    return 'This is the about page.'

@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return f'User {username}'

if __name__ == '__main__':
    app.run(debug=True)