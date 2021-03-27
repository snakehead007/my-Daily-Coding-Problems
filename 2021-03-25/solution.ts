const fn = (n: number): number => {
    const t = (): boolean => Math.floor(Math.random() * 2) === 0
    let r: number = 0;
    for (let i = 0; i < n; i++) {
        const h = t();
        r = h?r+1:r;
    }
    return (r<=1)?1:1+fn(r);
}

/**tests */
console.log(fn(1000),fn(666),fn(50),fn(1));