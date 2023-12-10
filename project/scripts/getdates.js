const lastModified = new Date(document.lastModified);

const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const formattedDate = lastModified.toLocaleDateString(undefined, options);

document.getElementById('lastModified').innerHTML = formattedDate;
