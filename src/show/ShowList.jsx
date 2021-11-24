import { Link } from "react-router-dom";
// import AddProduct from "../admin/AddProduct";

export const format = num => 
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,');

const ShowList = ({data, removed, url}) => {
    return(
        data.map(data => {
            return (
                <tr key={data.id}>
                    <th scope="row">{data.name}</th>
                    <td><img width={200} src={data.img}/></td>
                    <td>{format(data.price)} đ</td>
                    <td>{data.desc}</td>
                    <td>{data.slug}</td>
                    <td>{data.quantity}</td>
                    <td><button style={{width: 80}} onClick={() => removed(data.id)} type="button" className="btn btn-danger">Xóa</button></td>
                    <td><Link className="btn btn-danger" to={`${data.id}/edit`}>Update</Link></td>
                </tr>
            )
        })
        
    )
}


export default ShowList;