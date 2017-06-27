// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var brucedown = require('brucedown')

document.getElementById('button').onclick = () => {
    console.log('clicked button')
    highlightCodeBlocks()
};

function highlightCodeBlocks() {
    var content = document.getElementById('content').value
    console.log(`content is ${content}`)
    brucedown(content, function (err, htmlResult) {
        console.log('htmlResult')
        console.log(htmlResult)
        var highlightedContent = document.getElementById('highlighted-content');
        highlightedContent.innerHTML = ""
        appendHtml(highlightedContent, htmlResult);
    })
}

function appendHtml(el, str) {
    var div = document.createElement('code');
    div.innerHTML = str;
    while (div.children.length > 0) {
        el.appendChild(div.children[0]);
    }
}