import React, { useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios';

function AdminPage() {
    const [form, setForm] = useState({
        usernameOrEmail: '',
        password: ''
    });
    const [data, setData] = useState({
        accessToken: '',
        tokenType: ''
    })
    const { usernameOrEmail, password } = form;

    const onChange  = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setForm({
            ...form,
            [name]: value
        });
    };
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
        let url = "http://localhost:8000/api/auth/signin";
        let options: AxiosRequestConfig = {
            method: 'POST',
            url: url,
            headers: {
                'Accept': 'application/json'
            },
            data: {usernameOrEmail, password}
        };
        let response = await axios(options);
        console.log("res",response);

        let responseOK = response && response.status === 200;
        if (responseOK) {
            let data = await response.data;
            console.log("1",data);
            setData(data);
            
        }
        console.log("2",data);

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="이름"
                    value={usernameOrEmail}
                    onChange={onChange}
                    name="usernameOrEmail"
                /> <br/>
                <input
                    placeholder="비밀번호"
                    value={password}
                    onChange={onChange}
                    name="password"
                />
                <button type="submit">등록</button>
            </form>
            <p>{data.accessToken}</p>
            <p>{data.tokenType}</p>
        </div>
    )
}

export default AdminPage
