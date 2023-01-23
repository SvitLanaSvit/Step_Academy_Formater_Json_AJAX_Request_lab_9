function checkForm(){
    const textJson = document.getElementById("textPut").value;
    console.log(textJson);

    try{
        document.getElementById("paragraphError").innerText = "";
        const text = JSON.parse(textJson);
        let str = JSON.stringify(text, null, 4);
        document.getElementById("textCorrect").value = str;

        console.log(text);
        console.log(str);
    }
    catch(e){
        if(e instanceof SyntaxError){
            document.getElementById("paragraphError").innerText = "[format error]";
            document.getElementById("textCorrect").value = "";
        }
    }
}