export default (name) => {
    console.log('来自app2的公用模块');
    const el = document.createElement('h2');
    el.textContent = name;

    return el;
};