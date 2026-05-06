export function idURL() {
    const parametro =  new URLSearchParams(window.location.search);
    const id = Number(parametro.get("id"));
    return id;
}