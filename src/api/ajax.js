import { resolveOnChange } from "antd/lib/input/Input";
import axios from "axios"
export default function ajax (url, data = {}, type = "GET") {
  return new Promise(() => {
    let promise;
    if (type === "GET") {
      if (typeof type === "string") {

        promise = axios.get(url + "/" + data)
      } else {
        promise = axios.get(url, { params: data })
      }

    } else if (type === "PUT") {
      promise = axios.put(url, { params: data })
    } else if (type === "POST") {

      promise = axios.post(url, data)


    } else {
      promise = axios.delete(url + "/" + data)
    }
    promise.then(reposen => {
      resolve(reposen)
    }).catch(err => {
      alert("err", err)
    })
  })

}