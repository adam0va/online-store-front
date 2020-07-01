import React, {useState} from "react";

export default function RegFormRender(props) {
    const URL = "https://rsoi-online-store-customers.herokuapp.com/register/";

    const [regName, setRegName] = useState("");
    const [regLog, setRegLog] = useState("");
    const [regPass, setRegPass] = useState("");

    function sendRegData(name, log, pass) {
        let data = {
            username: log,
            name: name,
            password: pass
        };
        let json = JSON.stringify(data);
        console.log(data, json);
        fetch(URL, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: json
        }).then(r => console.log("success"))
    }
    return (
        <form>
            <div className="login_group">
                <label htmlFor="name_reg" className="login_label">Ваше Имя / Фамилия:</label>
                <input type="text" id="name_reg" className={`reg_input ${regName === ""? "reg_input_wrong": ""}`} name="name_reg" value={regName} onChange={e => setRegName(e.target.value)}/>
            </div>
            <div className="login_group">
                <label htmlFor="login_reg" className="login_label">Логин:</label>
                <input type="text" id="login_reg" className={`reg_input ${regLog === ""? "reg_input_wrong": ""}`} name="name_reg" value={regName} name="login_reg" value={regLog} onChange={e => setRegLog(e.target.value)}/>
            </div>
            <div className="login_group">
                <label htmlFor="password_reg" className="login_label">Пароль:</label>
                <input type="text" id="password_reg" className={`reg_input ${regPass === ""? "reg_input_wrong": ""}`} name="name_reg" value={regName} name="password_reg" value={regPass} onChange={e => setRegPass(e.target.value)}/>
            </div>
            <button type="button" id="reg_button" onClick={() => sendRegData(regName, regLog, regPass)}>Зарегистрироваться</button>
        </form>
    )
}