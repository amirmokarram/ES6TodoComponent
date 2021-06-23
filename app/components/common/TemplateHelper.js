export async function templateLoader(htmlRelativeUrl, baseUrl) {
    const templateUrl = new URL(htmlRelativeUrl, baseUrl);
    const response = await fetch(templateUrl.href);
    return await response.text();
}
export function createElementFromHTML(htmlString) {
    const container = document.createElement("div");
    container.innerHTML = htmlString;
    return container.firstChild;
}