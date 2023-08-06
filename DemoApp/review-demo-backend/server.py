from flask import Flask, request, jsonify, send_from_directory
import joblib
import tensorflow_hub as hub
import os

app = Flask(__name__, static_folder='../review-demo-frontend/build')

model = joblib.load('../../model_output/bayesian_ridge_model.pkl')

module_url = "https://tfhub.dev/google/universal-sentence-encoder/4"
model_embed = hub.load(module_url)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    review_text = data['features']
    print(review_text)
    review_embed = model_embed([review_text])
    prediction = model.predict(review_embed)
    return jsonify({'rating': prediction[0]})

if __name__ == '__main__':
    app.run()
