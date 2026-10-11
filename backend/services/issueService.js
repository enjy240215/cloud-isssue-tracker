
const fs = require('node:fs/promises');
const path = require('node:path');

const DATA_FILE = path.join(__dirname, '..', 'data', 'issues.json');

async function readIssues() {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
}

async function writeIssues(issues) {
    await fs.writeFile(
        DATA_FILE,
        JSON.stringify(issues, null, 2),
        'utf8'
    );
}

async function getAllIssues() {
    return readIssues();
}

async function createIssue(issueData) {
    const issues = await readIssues();

    const newIssue = {
        id: `ISS-${Date.now()}`,
        title: issueData.title.trim(),
        description: issueData.description.trim(),
        priority: issueData.priority,
        status: 'Open',
        createdAt: new Date().toISOString()
    };

    issues.push(newIssue);
    await writeIssues(issues);

    return newIssue;
}

async function updateIssueStatus(id, status) {
    const issues = await readIssues();

    const issue = issues.find((item) => item.id === id);

    if (!issue) {
        return null;
    }

    issue.status = status;
    await writeIssues(issues);

    return issue;
}

module.exports = {
    getAllIssues,
    createIssue,
    updateIssueStatus
};