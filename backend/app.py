from flask import Flask, Response, request, jsonify
from io import BytesIO
import base64
from flask_cors import CORS, cross_origin
import os
import sys

app = Flask(__name__)
cors = CORS(app)

# import joblib
from joblib import load

# TAKE IMAGE
# sample tweet text

#LOAD
# load the saved pipleine model
pipeline = load("text_classification.joblib")


def requestResults(image):
    # get the prediction
    tweets['prediction'] = pipeline.predict(image)
    # get the value counts of different labels predicted
    data = str(image.prediction.value_counts()) + '\n\n'
    return data + str(image)


@app.route("/image", methods=['GET', 'POST'])
def image():
    if(request.method == "POST"):
        bytesOfImage = request.get_data()
        with open('image.jpeg', 'wb') as out:
            out.write(bytesOfImage)
        return "Image read"


@app.route("/video", methods=['GET', 'POST'])
def video():
    if(request.method == "POST"):
        bytesOfVideo = request.get_data()
        with open('video.mp4', 'wb') as out:
            out.write(bytesOfVideo)
        return "Video read"

if __name__ == '__main__':
    app.run(host=YOUR_DESIRED_HOST, port=5000)