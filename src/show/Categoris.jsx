import { Link } from "react-router-dom";
import { listCategory } from "../api/categoryAPI";
import { useEffect, useState } from "react";



const Categoris = ({ data, removed, url }) => {
  
    return (
        data.map(data => {
            return (
                <tr>
                    <th scope="row">{data.name}</th>
                    <td><img width={200} src={data.img} /></td>
                    <td style={{lineHeight: '135px'}}><button style={{ width: 80 }} onClick={() => removed(data.id)} type="button" className="btn btn-danger">Xóa</button></td>
                    <td style={{lineHeight: '135px'}}><Link className="btn btn-danger" to={`${data.id}/editcate`}>Update</Link></td>
                </tr>
            )
        })

    )
}
export default Categoris;