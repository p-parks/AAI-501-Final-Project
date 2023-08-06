export default async function handler(req, res) {
    const { review } = req.body;
    if (review === undefined) {
        res.status(200).json({ rating: 0 });
    }

    // Make a request to the Python server
    const response = await fetch('http://127.0.0.1:5000/api/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ features: review }),
    });

    const data = await response.json();
    res.status(200).json({ rating: data.rating });
}
