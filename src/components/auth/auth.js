import snapshot from "@/snapshot/snapshot.js"
import { rdb_auth } from "@/snapshot/firebase/firebase.js"
import { ref, get, onValue, query, orderByChild, equalTo } from "firebase/database"
import notify from '../../utils/notify'
import CryptoJS from "crypto-js"
import { userStore } from "./auth-store"

const mysteryKey = CryptoJS.SHA256("Misterioxxxx");
window.CryptoJS = CryptoJS
function _blurWithMyst(text) {
    return CryptoJS.AES.encrypt(text, mysteryKey, { mode: CryptoJS.mode.ECB }).toString()
}

function _unveilWithMyst(text) {
    return CryptoJS.AES.decrypt(text, mysteryKey, { mode: CryptoJS.mode.ECB }).toString(CryptoJS.enc.Utf8)
}

const auth = {
    usersRef: ref(rdb_auth, "/users_bases/geral/users"),
    lsKey: _blurWithMyst("algo",mysteryKey),
    userStore: userStore(),

    async checkLoginCPF(_cpf) {
        let cpf = _cpf.trim().replaceAll('.', '').replaceAll('-', '')
        //console.log("login", cpf);
        if (cpf == "") {
            notify.error("CPF obrigatório!")
            return ({ error: true, lskey: auth.lsKey })
        }
        //console.log("cpf", cpf);
        let queryref = query(auth.usersRef, orderByChild('cpf'), equalTo(cpf))
        let snap = await get(queryref)
        let data = snap.val()
        //console.log(data);
        if (data == null) {
            cpf = "" + parseInt(cpf)
            //console.log("cpf", cpf);
            queryref = query(auth.usersRef, orderByChild('cpf'), equalTo(cpf))
            let snap = await get(queryref)
            let data = snap.val()
            //console.log(data);
            if (data == null) {
                notify.error("CPF não encontrado ou inválido!")
                return ({ error: true, cpfNotFound: true, lskey: auth.lsKey })
            } else {
                data = data[Object.keys(data)[0]]
                //console.log(data);
                localStorage.setItem(auth.lsKey, _blurWithMyst(JSON.stringify(data)))
                auth.userStore.setUserID(data.id)
                return ({ error: false, lskey: auth.lsKey })
            }
        } else {
            data = data[Object.keys(data)[0]]
            //console.log(data);
            localStorage.setItem(auth.lsKey, _blurWithMyst(JSON.stringify(data)))
            auth.userStore.setUserID(data.id)
            return ({ error: false, lskey: auth.lsKey })
        }
    },

    isAuth(self) {
        //console.log("auth.lsKey",auth.lsKey);
        let cypherText = localStorage.getItem(auth.lsKey)
        //console.log("cypherText",cypherText);
        if(cypherText) {
            let text = _unveilWithMyst(cypherText)
            //console.log("text",text);
            let obj = JSON.parse(text)
            //console.log("obj",obj);
            auth.userStore.setUserID(obj.id)
            auth.userStore.setAuth(true)
            return true    
        }
        //self.$router.push({ path: "/auth "})
        auth.userStore.setAuth(false)
        return false
    },

    logout(self) {
        console.log("logout");
        auth.userStore.setUserID("noid")
        auth.userStore.setAuth(false)
        localStorage.removeItem(auth.lsKey)
        //self.$router.push({ path: "/auth"})
    }
}

export default auth