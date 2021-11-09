export default (name) => {
    console.log('来自app1的公用模块======');
    const el = document.createElement('div');
    el.style = "line-height:200px;font-size:25px;text-align:center;color:white;background:dodgerblue;border-radius:6px;margin-top:8px;";
    el.textContent = name;

    return el;
};