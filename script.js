        const passBox = document.getElementById("password");
        const len = 10;

        const upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const low = "abcdefghijklmnopqrstuvwxyz";
        const num = "0123456789";
        const sym = "!@#$%^&*()_-+={}[]|\\:;\"'<>,.?/";

        const allChars = upp + low + num + sym;

        function createPassword() {
            let password = "";

            password += upp[Math.floor(Math.random() * upp.length)];
            password += low[Math.floor(Math.random() * low.length)];
            password += num[Math.floor(Math.random() * num.length)];
            password += sym[Math.floor(Math.random() * sym.length)];

            while (password.length < len) {
                password += allChars[Math.floor(Math.random() * allChars.length)];
            }

            passBox.value = password;
        }
