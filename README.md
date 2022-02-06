# ReCoin 
<img src = "https://drive.google.com/uc?export=view&id=1admSn1s1K2eioqtCisLGZD4zXZjGWsy8" width="210" height="200"> 
"Restoring our Environment and Buisnesses in Parallel"

#### Presented By: 
Shashank Ojha, Sabrina Button, Abdellah Ghassel, Joshua Gonzales 
## Theme Covered:
The themes covered in this project include post pandemic restoration for both the environment, small buisnesses, and personal finance! The app pitched uses an extensivly trained AI system to detect trash and sort it to the proper bin from your smartphone. While using the app, users will be incentivized by points, which will be redeemable in partnering stores.

## Problem Statment: 
As our actions continue to damage the environment, it is important that we invest into solutions that help restore our community in more sustainable practices.  Moreover, an average person creates over 4 pounds of trash a day, and the EPA has found that over 75% of the wastes we create are recyclable. As garbage sorting is so niche from town-to-town, students have reportable agreed to the difficulty of accurately sorting garbage.  

Our passion to make our community globally and locally more sustainable has fueled us to use artificial intelligence to develop an app that not only makes sorting garbage as easy as using snapchat, but also rewards individuals for sorting their garbage properly.  

For this reason, we would like to introduce Trashcoin. This intuitive app allows anyone to scan any product and easily uncover the bin that the trash belongs based off their location.  Furthermore, if they attempt to sell their product, or use our app they will earn points which will subsequently be redeemable in partnering stores that advocate for the environment. The more the user uses the app, the more points they receive, subsequently resulting in better items to redeem in stores. With this app we will not only help recover the environment post pandemic but also increase sales in mainly small businesses and personal finance at the same time.    

## About the App:
### Incentive Breakdown: 
<img src = "https://drive.google.com/uc?export=view&id=1CU2JkOJqplaTxNo7B8s_UXN_UaEydsd3" width="600" height="400"> 

Please note that these expenses are estimated expectations for potential benefit packages but are not defined yet. 

We are proposing a $1 discount for participating small businesses when an amount certain coffee/drink cups are returned to participating restaurants.  This will be easy for small companies to uphold to financially, while providing a motivation for individuals to use our scanner.

Amazon costs around $0.5 to $2 on packaging, so we are proposing that Amazon provides a $15 gift card per 100 packages returned to amazon. As the 100 packages can cost from $50 to $200, this incentive will save amazon resources by 5 to 100 times the amount while providing positive public perception for reusing. 

As recycling plastic for 3D filament is an up-and-coming technology that can revolutionize environment sustainability, we would like to create a system where providing materials for such causes can give the individuals benefits.

Lastly, as metals become more valuable, we would also like to offer a price for providing metals back to companies to reuse. 

The next steps to this endeavor will be to provide benefits for individuals that provide batteries and electronics with some sort of incentive as well.  

## User Interface: 
#add user stuff!!!!!!!!!!!1

## Technological Specifics and Next Steps:  
### Frontend

We used to react to develop components for the webcam footage and capture screen shots. It was also utilized to create the rest of the overall UI design. 

### Backend
#### Trash Detection AI: 
We utilized an open-source trash detection AI software and data to train the trash detection system originally developed by IamAbhinav03. The system utilizes over 2500 images to train, test and validate the system. To improve the system, we increased the number epochs to 8 rather than 5 (number of passes the training system has completed) to train it for an additional four hours than required. This allowed the accuracy to increase by 4% more than the original system. We also modified the test train and split amounts to 70%, 10%, and 20% respectively, as more prominent AI studies have found that distribution to receive the best results.  

Currently, the system is predicted to have a 94% accuracy, but in the future, we plan on using reinforcement learning in our beta testing to continuously improve our algorithm. Reinforcement learning allows for the data to be more accurate through learning from user correction. This will allow AI to become more precise as it gains more popularity.   

#### Other Systems: 
By using Matbox API and the Google Suite/API, we will be creating the maps to find recycling locations and an extensively thorough Recoin currency system that can easily be transferred to real time money for consumers and businesses. 


## Stakeholders:
After the completion of this project, we intend to continue to pursue the app to improve our communities’ sustainability. After looking at the demographic of interest in our school itself, we know that students will be interested in this app, not only from convenience but also through the reward system. Local cafes and Starbucks already have initiatives to improve public perspective and support the environment (i.e., using paper straws and cups), so supporting this new endeavor will be an interest to them. As branding is everything in a business, having a positive public perspective will increase sales.  
<img src = "https://drive.google.com/uc?export=view&id=189sA5C0KDT8VIaRdD6jQQtnN32qO87h8" width="500" height="500"> 

### Amazon: 
As Amazon continues to be the leading online marketplace, more packages will continue to be made, which can be detrimental to the worlds limited resources. We will be training the UI to track packages that are Amazon based. With such training, we would like to be able to implement a system where those packaging can be sent back to amazon to be reused for credit. This will allow for amazon to improve their cooperate image on being environmentally friendly, while saving on resources.  

### Small Businesses:
As the pandemic has caused a significant decline in small business revenue, we intend to mainly partner with small businesses in this project.  The software will also help increase small business sales as by supporting the app, students will be more inclined to go to their store due to positive public image and the additive discounts will attract more customers. In the future, we wish to train AI to also detect trash of value (i.e.. Broken smartphones, precious metals), so that consumers can sell it in a bundle to local companies that can benefit from the material (ex: 3D-printing companies that convert used plastic to filament)  

## Timeline: REMEMBER TO CHANGE NAME TO RECOIN
<img src = "https://drive.google.com/uc?export=view&id=15gMlkXlG7PLyIIL6UdR9d4A_QvlS9_Nr" width="500" height="700"> 

## Code Refrences

## Refrences for Information
•	https://www.rubicon.com/blog/trash-reason-statistics-facts/

•	https://www.dosomething.org/us/facts/11-facts-about-recycling 

•	https://www.forbes.com/sites/forbesagencycouncil/2016/10/31/why-brand-image-matters-more-than-you-think/?sh=6a4b462e10b8 

•	https://www.channelreply.com/blog/view/ebay-amazon-packaging-costs 

• https://medium.datadriveninvestor.com/deploy-your-pytorch-model-to-production-f69460192217

• https://narainsreehith.medium.com/upload-image-video-to-flask-backend-from-react-native-app-expo-app-1aac5653d344

• https://pytorch.org/tutorials/beginner/saving_loading_models.html

• https://pytorch.org/tutorials/intermediate/flask_rest_api_tutorial.html

• https://pytorch.org/get-started/locally/

• https://www.kdnuggets.com/2019/03/deploy-pytorch-model-production.html

