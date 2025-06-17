const recommendations = {
    
        "oily": {
            "normal": {
                "acne": [
                    { "ingredient": "Salicylic Acid", "benefit": "Helps to clear clogged pores" },
                    { "ingredient": "Niacinamide", "benefit": "Reduces inflammation and sebum production" }
                ],
                "openPores": [
                    { "ingredient": "Retinol", "benefit": "Helps reduce pore size" },
                    { "ingredient": "Clay", "benefit": "Absorbs excess oil and reduces pores" }
                ],
                "pigmentation": [
                    { "ingredient": "Vitamin C", "benefit": "Fades dark spots and evens skin tone." },
                    { "ingredient": "Kojic Acid", "benefit": "Inhibits melanin production and lightens pigmentation." }
                ],
                "acneScars": [
                    { "ingredient": "Vitamin E", "benefit": "Promotes skin healing and reduces scarring." },
                    { "ingredient": "Retinoids", "benefit": "Stimulates collagen production to minimize scars." }
                ],
                "darkCircles": [
                    { "ingredient": "Caffeine", "benefit": "Reduces puffiness and improves skin tone." },
                    { "ingredient": "Peptides", "benefit": "Strengthens the skin and reduces dark circles." }
                ]
            },
            "sensitive": {
                "acne": [
                    { "ingredient": "Hyaluronic Acid", "benefit": "Hydrates skin without irritation" },
                    { "ingredient": "Ceramides", "benefit": "Restores the skin barrier" }
                ],
                "openPores": [
                    { "ingredient": "Niacinamide", "benefit": "Minimizes pore size and soothes sensitive skin." },
                    { "ingredient": "Witch Hazel", "benefit": "Natural astringent that helps tighten pores." }
                ],
                "pigmentation": [
                    { "ingredient": "Licorice Extract", "benefit": "Fades dark spots and evens skin tone." },
                    { "ingredient": "Azelaic Acid", "benefit": "Reduces pigmentation with gentle exfoliation." }
                ],
                "acneScars": [
                    { "ingredient": "Centella Asiatica", "benefit": "Promotes healing and reduces the appearance of scars." },
                    { "ingredient": "Allantoin", "benefit": "Moisturizes and promotes skin healing." }
                ],
                "darkCircles": [
                    { "ingredient": "Vitamin K", "benefit": "Improves circulation and reduces dark circles." },
                    { "ingredient": "Cucumber Extract", "benefit": "Soothes and hydrates the skin." }
                ]
            }
        },
        "dry": {
            "normal": {
                "acne": [
                    { "ingredient": "Benzoyl Peroxide", "benefit": "Kills acne-causing bacteria and prevents breakouts." },
                    { "ingredient": "Aloe Vera", "benefit": "Soothes irritated skin and reduces redness." }
                ],
                "openPores": [
                    { "ingredient": "Clay", "benefit": "Absorbs impurities and tightens pores." },
                    { "ingredient": "Zinc", "benefit": "Regulates oil production and minimizes pore size." }
                ],
                "pigmentation": [
                    { "ingredient": "Vitamin C", "benefit": "Fades dark spots and evens skin tone." },
                    { "ingredient": "Licorice Extract", "benefit": "Evens skin tone and reduces hyperpigmentation." }
                ],
                "acneScars": [
                    { "ingredient": "Silicone Gel", "benefit": "Helps reduce the appearance of scars." },
                    { "ingredient": "Vitamin E", "benefit": "Promotes skin healing and reduces scarring." }
                ],
                "darkCircles": [
                    { "ingredient": "Caffeine", "benefit": "Reduces puffiness and brightens skin." },
                    { "ingredient": "Hyaluronic Acid", "benefit": "Hydrates the skin and plumps up the under-eye area." }
                ]
            },
            "sensitive": {
                "acne": [
                    { "ingredient": "Centella Asiatica", "benefit": "Soothes and heals irritated skin." },
                    { "ingredient": "Aloe Vera", "benefit": "Calms sensitive, inflamed skin." }
                ],
                "openPores": [
                    { "ingredient": "Zinc", "benefit": "Reduces oil production and tightens pores." },
                    { "ingredient": "Witch Hazel", "benefit": "Naturally tones and reduces pore size." }
                ],
                "pigmentation": [
                    { "ingredient": "Licorice Extract", "benefit": "Gentle on sensitive skin, reduces pigmentation." },
                    { "ingredient": "Green Tea Extract", "benefit": "Antioxidant properties help soothe skin and lighten dark spots." }
                ],
                "acneScars": [
                    { "ingredient": "Allantoin", "benefit": "Moisturizes and heals damaged skin." },
                    { "ingredient": "Vitamin C", "benefit": "Reduces scarring and brightens skin." }
                ],
                "darkCircles": [
                    { "ingredient": "Cucumber Extract", "benefit": "Hydrates and cools the under-eye area." },
                    { "ingredient": "Peptides", "benefit": "Improves skin elasticity and reduces dark circles." }
                ]
            }
        },
       "combination": {
        "normal": {
            "acne": [
                { "ingredient": "Benzoyl Peroxide", "benefit": "Kills acne-causing bacteria and clears pores." },
                { "ingredient": "Tea Tree Oil", "benefit": "Fights inflammation and acne naturally." }
            ],
            "openPores": [
                { "ingredient": "Niacinamide", "benefit": "Minimizes the appearance of pores and regulates oil production." },
                { "ingredient": "Salicylic Acid", "benefit": "Exfoliates and unclogs pores." }
            ],
            "pigmentation": [
                { "ingredient": "Vitamin C", "benefit": "Brightens skin and reduces dark spots." },
                { "ingredient": "Licorice Extract", "benefit": "Fades hyperpigmentation and evens skin tone." }
            ],
            "acneScars": [
                { "ingredient": "Retinol", "benefit": "Stimulates cell turnover to reduce scars." },
                { "ingredient": "Vitamin E", "benefit": "Reduces scarring and promotes skin healing." }
            ],
            "darkCircles": [
                { "ingredient": "Caffeine", "benefit": "Reduces puffiness and improves skin tone." },
                { "ingredient": "Peptides", "benefit": "Strengthens the skin and reduces dark circles." }
            ]
        },
        "sensitive": {
            "acne": [
                { "ingredient": "Azelaic Acid", "benefit": "Gently exfoliates and reduces acne with anti-inflammatory properties." },
                { "ingredient": "Green Tea Extract", "benefit": "Soothes and reduces inflammation." }
            ],
            "openPores": [
                { "ingredient": "Zinc", "benefit": "Reduces oil production and tightens pores." },
                { "ingredient": "Witch Hazel", "benefit": "Naturally tones and reduces pore size." }
            ],
            "pigmentation": [
                { "ingredient": "Vitamin C", "benefit": "Brightens skin and reduces dark spots." },
                { "ingredient": "Licorice Extract", "benefit": "Fades hyperpigmentation and evens skin tone." }
            ],
            "acneScars": [
                { "ingredient": "Centella Asiatica", "benefit": "Speeds up healing and reduces scarring." },
                { "ingredient": "Aloe Vera", "benefit": "Soothes irritated skin and promotes healing." }
            ],
            "darkCircles": [
                { "ingredient": "Hyaluronic Acid", "benefit": "Hydrates and plumps the skin, reducing the appearance of dark circles." },
                { "ingredient": "Cucumber Extract", "benefit": "Soothes and reduces puffiness." }
            ]
        }
    },


    "acne": [
        { "ingredient": "Salicylic Acid", "benefit": "Penetrates deep into pores to clear out excess oil and dead skin cells, preventing breakouts." },
        { "ingredient": "Benzoyl Peroxide", "benefit": "Reduces acne-causing bacteria and clears pores." },
        { "ingredient": "Tea Tree Oil", "benefit": "Natural anti-inflammatory and antimicrobial properties that help reduce redness and acne." },
        { "ingredient": "Niacinamide (Vitamin B3)", "benefit": "Reduces sebum production and has anti-inflammatory properties." }
    ],
    "openPores": [
        { "ingredient": "Niacinamide", "benefit": "Minimizes the appearance of enlarged pores and balances oil production." },
        { "ingredient": "Retinol (Vitamin A)", "benefit": "Increases cell turnover, improving skin texture and reducing pore size." },
        { "ingredient": "Salicylic Acid", "benefit": "Exfoliates inside the pore, helping to clear out any blockages." },
        { "ingredient": "Witch Hazel", "benefit": "A natural astringent that helps to tighten pores and soothe the skin." }
    ],
    "pigmentation": [
        { "ingredient": "Vitamin C", "benefit": "An antioxidant that brightens skin and reduces dark spots." },
        { "ingredient": "Licorice Extract", "benefit": "Fades hyperpigmentation and evens skin tone." },
        { "ingredient": "Alpha Arbutin", "benefit": "Inhibits melanin production to lighten pigmentation." },
        { "ingredient": "Kojic Acid", "benefit": "Helps to lighten skin and reduce the appearance of age spots." }
    ],
    "acneScars": [
        { "ingredient": "Vitamin E", "benefit": "Promotes skin healing and reduces scarring." },
        { "ingredient": "Retinoids", "benefit": "Stimulates collagen production to minimize scars." },
        { "ingredient": "Silicone Gel", "benefit": "Helps to flatten and soften scars." },
        { "ingredient": "Centella Asiatica", "benefit": "Promotes healing and reduces the appearance of scars." }
    ],
    "darkCircles": [
        { "ingredient": "Caffeine", "benefit": "Reduces puffiness and improves skin tone." },
        { "ingredient": "Peptides", "benefit": "Strengthens the skin and reduces dark circles." },
        { "ingredient": "Hyaluronic Acid", "benefit": "Hydrates and plumps the skin under the eyes." },
        { "ingredient": "Vitamin K", "benefit": "Improves blood circulation and reduces dark circles." }
    ]

};



let userSelections = {
    name: '',
    age: '',
    gender: '',
    texture: '',
    type: '',
    concern: ''
};



// Define background images for each screen
const screenBackgrounds = {
    'welcome-screen': 'url("static/images/Welcome Screen.jpg")',  // Ensure the correct path
    'user-details-screen': 'url("static/images/user-details.jpg")',
    'skin-texture-screen': 'url("static/images/Skin_texture.jpg")',
    'skin-type-screen': 'url("static/images/Skin_type.jpg")',
    'skin-concern-screen': 'url("static/images/Skin_Concern.jpg")',
    'selfie-instructions-screen': 'url("static/images/instruction.jpg")',
    'camera-screen': 'url("static/images/Camera.jpg")',
    'recommendation-screen': 'url("static/images/Recommendation.jpg")',
    'skincare-tips-screen' : 'url("static/images/Recommendation.jpg")',
    'thank-you-screen': 'url("static/images/thank_you.jpg")'
};

// Navigate between screens and update background image
function nextScreen(screenId) {
    if (validateSelection(screenId)) {
        document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
        const currentScreen = document.getElementById(screenId);
        currentScreen.classList.add('active');
        
        // Set the background image for the active screen
        const backgroundImage = screenBackgrounds[screenId] || 'url("/static/images/default_background.jpg")';  // Add a default fallback image
        document.body.style.backgroundImage = backgroundImage ? backgroundImage : 'none';
    } else {
        alert('Please complete all selections.');
    }
}

// Select options for skin texture, type, and concern
function selectOption(key, value, element) {
    userSelections[key] = value;
    // Clear previous selections
    const buttons = element.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    // Highlight the selected button
    element.classList.add('selected');
}

// Validate that all required fields are selected before proceeding
function validateSelection(screenId) {
    if (screenId === 'camera-screen' || screenId === 'recommendation-screen') {
        if (!userSelections.texture || !userSelections.type || !userSelections.concern) {
            return false; // User has not selected everything
        }
    }
    return true; // All required fields selected
}

// Proceed to Selfie function
function openCamera() {
    // Open the camera
    const video = document.getElementById('camera');
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            nextScreen('camera-screen');
        })
        .catch(err => console.error("Error accessing camera: ", err));
}

// Capture image from the video stream
function captureImage() {
    const video = document.getElementById('camera');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    document.getElementById('canvas').classList.remove('hidden');
    document.getElementById('proceed-button').style.display = 'block';

    video.srcObject.getTracks().forEach(track => track.stop());
    video.style.display = 'none';

    
   
    // Convert canvas image to Data URL and upload it
    const imageDataUrl = canvas.toDataURL('image/jpeg');
    console.log('Captured Image Data URL:', imageDataUrl);
    uploadImage(imageDataUrl);
}


// Function to map predicted concern names to recommendation JSON keys
function mapConcern(predictedConcern) {
    const mapping = {
        'Acne':'acne',
        'Acne Scars':'acneScars',
        'Pigmentation': 'pigmentation',
        'Dark Circles': 'darkCircles',
        'Open Pores': 'openPores',
     
    };
    return mapping[predictedConcern] || predictedConcern;
}

// Function to display skincare recommendations based on either user input or predicted concern
function showRecommendations() {
    const recommendationList = document.getElementById('recommendation-list');
    const recommendationsForUser = recommendations[userSelections.texture]?.[userSelections.type]?.[userSelections.concern] || [];

    if (recommendationsForUser.length === 0) {
        recommendationList.innerHTML = '<p>No recommendations available for the selected options.</p>';
    } else {
        recommendationList.innerHTML = '<ul>' + recommendationsForUser.map(rec =>
            `<li><strong>${rec.ingredient}:</strong> ${rec.benefit}</li>`).join('') + '</ul>';
    }

    nextScreen('recommendation-screen');  // Navigate to the recommendation screen
}





   





// Skip the selfie and display recommendations based on user input
function skipSelfie() {
    // If user selections are missing, use default values
    if (!userSelections.texture) userSelections.texture = 'oily';   // Default texture
    if (!userSelections.type) userSelections.type = 'normal';       // Default type
    if (!userSelections.concern) userSelections.concern = 'acne';   // Default concern

    showRecommendations();  // Display the recommendations
}

// After image is captured and skin concern is predicted, map concern and show recommendations
function uploadImage(imageDataUrl) {
    const blob = dataUrlToBlob(imageDataUrl);
    const formData = new FormData();
    formData.append('file', blob, 'capturedImage.jpg');

    fetch('/upload-image', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Image upload failed');
        }
    })
    .then(data => {
        if (data.predicted_concern) {
            const mappedConcern = mapConcern(data.predicted_concern);
            alert(`Predicted Skin Concern: ${mappedConcern}`);

            userSelections.concern = mappedConcern;  // Store the mapped concern

            // Ensure default values for texture and type, as user may not have selected these
            if (!userSelections.texture) userSelections.texture = 'oily';   // Default texture
            if (!userSelections.type) userSelections.type = 'normal';       // Default type

            showRecommendations();  // Display recommendations after prediction
        } else {
            alert('No prediction available. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error uploading image:', error);
        alert('Error in image upload. Please try again.');
    });
}

// Convert Data URL to Blob for image upload
function dataUrlToBlob(dataUrl) {
    const byteString = atob(dataUrl.split(',')[1]);
    const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
}

// Initialize the app when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    nextScreen('welcome-screen'); // Start with the welcome screen
});
