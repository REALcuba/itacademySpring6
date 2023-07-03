import styled from 'styled-components'
// import { useState } from "react";

type Welcome = {
    isLogin: boolean;
    children: string
}
// const [isLogin, setIsLogin] = useState(false)
export const Welcome: React.FC<Welcome> = styled.div`
    width: 30%;
    display: flex;
    height: 7em;
    color:gold;
    background-color: #aa9fa32e;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin: 10px;
    padding: 10px;
`