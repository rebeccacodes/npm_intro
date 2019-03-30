export function add_to_dom(message) {
    const root = document.getElementById('root');
    const h1 = document.createElement('h1');
    h1.innerText = message;
    root.append(h1);
}

export function make_element(type, text) {
    const root = document.getElementById('root');
    const element = document.createElement(type);
    element.innerText = text;
    root.append(element);
}

export default {
    add_to_dom: add_to_dom,
    make_element: make_element
}