from flask import Flask, render_template
import os


app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    HOST = os.environ.get('HOST')
    PORT = int(os.environ.get('PORT', 5000))
    app.debug = os.environ.get('')
    app.run(host=HOST, port=PORT)