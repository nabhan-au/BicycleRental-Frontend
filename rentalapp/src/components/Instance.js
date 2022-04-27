import EditButtonComp from "./EditButton"

const Instance = ({ instance }) => {
    return (
        <tr>
            <td>{instance.id}</td>
            <td>{instance.brand}</td>
            <td>{instance.type}</td>
            <td>{instance.seat}</td>
            <td>{instance.firstname}</td>
            <td>{instance.lastname}</td>
            <td><EditButtonComp/></td>
        </tr>
    )
}
export default Instance