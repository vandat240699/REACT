import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listCategory } from "../api/categoryAPI";
// import AddProduct from "../admin/AddProduct";

export const format = num =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,');

const ShowList = ({ data, removed, url }) => {
    const [cate, setCate] = useState([]);
    useEffect(() => {
        listCategory().then(response => setCate(response.data))
    }, [])

    return (
        data.map(data => {
            return (
                <tr key={data.id}>
                    <th scope="row">{data.name}</th>
                    <td><img width={200} src={data.img} /></td>
                    <td>{format(data.price)} đ</td>
                    <td>{cate.map(item => item.id == data.desc ? <span key={item.id}>{item.name}</span> : null)}</td>
                    <td>{data.slug}</td>
                    <td>{data.quantity}</td>
                    <td style={{lineHeight: '90px'}}><button style={{ width: 80 }} onClick={() => removed(data.id)} type="button" className="btn btn-danger">Xóa</button></td>
                    <td style={{lineHeight: '90px'}}><Link className="btn btn-danger" to={`${data.id}/edit`}>Update</Link></td>
                </tr>
            )
        })

    )
}


export default ShowList;