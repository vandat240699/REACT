const ShowCategory = ({ data }) => {
    return(
        data && data.map(categorys => 
            <option key={categorys.id} value={categorys.id}>{categorys.name}</option>
        )
    )
}
export default ShowCategory;