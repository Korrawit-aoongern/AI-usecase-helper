document.getElementById("myForm").addEventListener("submit", GenerateOutput);

async function GenerateOutput(event) {
    try {
        event.preventDefault();
        const promptValue = document.getElementById("promptInput").value;

        const respond = await fetch("/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt: promptValue })
        });

        const data = await respond.json();
        const rawMarkdown = data.result;
        const formattedHTML = marked.parse(rawMarkdown);

        document.getElementById("respondOutput").innerHTML = formattedHTML;
    }
    catch (err) {
        console.log(err);
    }
}