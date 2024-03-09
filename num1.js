function delayedPromise(vell, del) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(vell);
        }, del);
    });
};

Promise.all([
    delayedPromise("kjhvadskhjvdfsj", 2000),
    delayedPromise("kjvdfsj", 7000),
    delayedPromise("kjhvvdfsj", 3000),
    delayedPromise("kjhvdfsj", 1000),
    delayedPromise("kj", 5000)
]).then(vell => console.log(vell)).catch(er => console.log(er));