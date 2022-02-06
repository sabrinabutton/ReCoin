import torch
import torch.nn as nn
from torchvision import transforms
import torch.nn.functional as F
from PIL import Image
import numpy as np
from model import ResNet
import io
import argparse

def get_model(path):
    model = ResNet()
    model = torch.load(path, map_location='cpu')
    model = model.eval()
    return model

def transform_image(image_bytes):
    my_transforms = transforms.Compose([transforms.Resize(255),
                                         transforms.CenterCrop(224),
                                        transforms.ToTensor(),
                                        transforms.Normalize(
                                            [0.485, 0.456, 0.406],
                                            [0.229, 0.224, 0.225])])
    image = Image.open(io.BytesIO(image_bytes))
    return my_transforms(image).unsqueeze(0)

def predict(img):
    model = get_model('model_store/waste_identifier.pt')

    label_lst = ['Cardboard', 'Glass' ,'Metal', 'Paper', 'Plastic', 'Trash']

    tensor = transform_image(image_bytes=image_bytes)
    outputs = model.forward(tensor)
    _, y_hat = outputs.max(1)
    predicted_idx = str(y_hat.item())
    return label_list[predicted_idx]

   

if __name__ == '__main__':

    parser = argparse.ArgumentParser(description='predict arguments')
    parser.add_argument('img_path', type = str, help = 'Image Required')
    args = parser.parse_args()
    img_path = args.img_path

    l = predict(img_path)

    for i in l:
        print(str(i))