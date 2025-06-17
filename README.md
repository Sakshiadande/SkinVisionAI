# 🌸 SkinVisionAI - Smart Skin Concern Detection & Recommendations

SkinVisionAI is an AI-powered skin analysis web application that detects common facial skin concerns such as acne, acne scars, pigmentation, dark circles, and open pores. The app uses a Convolutional Neural Network (CNN) model trained on categorized images to predict skin issues from a user's selfie or uploaded image. It then recommends ingredients and care tips accordingly.

🚀 Features
📷 Real-time or uploaded selfie skin concern detection

🧠 CNN model for classifying 5 types of skin concerns

💡 Skincare recommendations based on predictions

✨ Intuitive frontend built with HTML, CSS, and JavaScript

🔒 Image is not stored permanently—ensuring user privacy
---

## 📁 Project Structure
SkinVisionAI/
│
├── app.py                  # Flask backend server
├── train_model.py          # CNN model training and prediction script
├── README.md               # Project overview
├── .gitignore
│
├── static/                 # Frontend static files
│   ├── script.js
│   └── styles.css
│
├── templates/              # HTML frontend
│   └── index.html
│
├── minor/                  # Dataset directory
│   ├── train/              # Training images
│   │   ├── acne/
│   │   ├── acnescars/
│   │   ├── dark_circles/
│   │   ├── openpores/
│   │   └── pigmentation/
│   └── validation/         # Validation images
│       ├── acne/
│       ├── acnescars/
│       ├── dark_circles/
│       ├── openpores/
│       └── pigmentation/





🧪 Technologies Used
Python, Flask – backend and server

TensorFlow / Keras – model development

OpenCV – image handling

HTML/CSS/JavaScript – frontend

VS Code, Git/GitHub – development and version control

