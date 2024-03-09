function  randomDelay(vall) {
    const del = Math.random() * (5000 -1000) + 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(vall);
        }, del);
    });
};

Promise.race([
    randomDelay("hjvdfsj"),
    randomDelay("dfsj"),
    randomDelay("kjdfsj"),
    randomDelay("kdfsj"),
    randomDelay("kj")
]).then(vell => console.log(vell)).catch(er => console.log(er));






