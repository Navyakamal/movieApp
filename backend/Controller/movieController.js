const movies = require("../Models/movieModel")



exports.addMovie = async (req, res) => {
    console.log("req.body:", req.body);
    console.log("req.files:", req.files);

    const { title, description, director, language, genre, videoUrl, rating } = req.body;
    const coverImg = req.file ?.filename;

        if (!coverImg) {
        return res.status(400).json({ error: 'Cover image is required' });
    }

    if (!videoUrl.includes('youtube.com')) {
        return res.status(400).json({ error: 'Invalid YouTube URL' });
    }

    try {
        const existingMovie = await movies.findOne({ title });
        if (existingMovie) {
            return res.status(400).json({ error: `${existingMovie.title} already exists!..add new one` });
        }

        const newMovie = new movies({
            title,
            description,
            director,
            language,
            coverImg,
            genre,
            videoUrl,
            rating
        });

        await newMovie.save();
        console.log("Movie saved successfully:", newMovie);
        res.json({ message: 'Movie added successfully', movie: newMovie });
    } catch (error) {
        console.error("Error in addMovie:", error);
        res.status(500).json({ error: 'Error saving movie', details: error });
    }
};
