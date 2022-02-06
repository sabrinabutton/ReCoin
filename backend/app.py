

from flask import Flask, Response, request, jsonify
from io import BytesIO
import base64
from flask_cors import CORS, cross_origin
import os
import sys
import torch.nn as nn
import dill as dill 

from torchvision import models
import torchvision.models as models
from torchvision import torch
import torchvision.transforms as transforms
from PIL import Image
from predict import *
import os
import torch
import torchvision
from torch.utils.data import random_split
import torchvision.models as models
import torch.nn as nn
import torch.nn.functional as F
print(torch.__version__)
app = Flask(__name__)
cors = CORS(app)


@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        img_bytes = request.get_data()
    
        class_name = get_prediction(image_bytes=img_bytes)
        return class_name


if __name__ == '__main__':
    app.run()