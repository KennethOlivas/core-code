    const order = (words) => {
        let i = 0;
        let res = words.split(' ').sort((a, b) => {
            i++
            console.log(i, " a: ", a, "b: ", b);
            //Busca cualquier caracter que no sea un dígito y lo ordena de mayor a menor
            console.log(a.match(/\D/g));
            console.log(b.match(/\D/g));
            return a.match(/\d/) - b.match(/\d/);
        });
        console.log("res ", res);
        return res.join(' ');
    }