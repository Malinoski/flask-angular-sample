from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

weather = {
    "data": [
        {
            "a": "1",
            "b": "2",
            "c": "3",
            "d": "4"
        }
    ]
}


@app.route("/", methods=['GET'])
def index():
    return "Welcome to REST"


@app.route("/data/", methods=['GET'])
def weather_report():
    global weather
    return jsonify([weather])


if __name__ == '__main__':
    app.run(debug=True)