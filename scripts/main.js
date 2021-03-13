const TableCell = (props) => {
    return <td>{props.fieldValue}</td>
}

const TableRow = (props) => {
    return (
        <tr>
            <th scope="row">{props.index}</th>
            <TableCell fieldValue={props.user.name} />
            <TableCell fieldValue={props.user.email} />
            <TableCell fieldValue={props.user.website} />
        </tr>
    )
}

const DynamicContent = () => {
   const [dataSet, setDataSet] = React.useState([]);

   // Hook: ComponentDidMount
   React.useEffect(() => {
    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(users => setDataSet(users.data))
        .catch(error => setDataSet([]));
   }, [])

   return (
       <React.Fragment>
            { 
                dataSet.map((user, index) => {
                    return <TableRow key={index} index={index} user={user} />
                }) 
            }
       </React.Fragment>
   )
}

const AppEntrypoint = document.querySelector('.external-content__dynamic-content-rows');
ReactDOM.render(<DynamicContent />, AppEntrypoint);
