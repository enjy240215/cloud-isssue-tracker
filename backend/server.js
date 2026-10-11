
/*const express = require('express');
const issuesRouter = require('./routes/issues');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming JSON request bodies
app.use(express.json());

// Basic health check
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Issue API routes
app.use('/api/issues', issuesRouter);

// Handle invalid JSON and other unexpected errors
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({
            error: {
                code: 'VALIDATION_ERROR',
                message: 'Request body contains invalid JSON.'
            }
        });
    }

    console.error(err);

    res.status(500).json({
        error: {
            code: 'INTERNAL_ERROR',
            message: 'An unexpected server error occurred.'
        }
    });
});

app.listen(PORT, () => {
    console.log(`Cloud Issue Tracker API running at http://localhost:${PORT}`);
});*/