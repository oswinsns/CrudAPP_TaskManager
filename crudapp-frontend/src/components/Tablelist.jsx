export default function Tablelist({handleOpen}) {

    const clients = [
        {id: 1, name: "John", email: "John.DOe@gmail.com", job: "Developer", rate:"100", isactive: true},
           {id: 2, name: "Jane", email: "John.DOe@gmail.com", job: "Developer", rate:"100", isactive: false},
              {id: 3, name: "James", email: "John.DOe@gmail.com", job: "Developer", rate:"100", isactive: true},
    ]

    return (
        <div className="overflow-x-auto mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr> 
        <th>Id</th>
        <th>Name</th>
        <th>Job</th>
        <th>Email</th>
        <th>Rate</th>
        <th>Status</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody className="hover:bg-base-300">

        {/* {clients.map((client, index) => ()} */}
    {/* {clients.map(function(client) { */}
    {clients.map((client) => (
    // ROw 1
    <tr>
        <th>{client.id}</th>
        <td>{client.name}</td>
        <td>{client.job}</td>
        <td>{client.email}</td>
        <td>{client.rate}</td>
        <td>
            <button className={`btn btn-xs btn-primary rounded-full w-20 ${client.isactive ? 'btn-success' : 'btn-outline'}`}>
                {client.isactive ? 'Active' : 'Inactive'}

            </button>
        </td>

        <td>
            <button onClick = {() => handleOpen('edit')}className ="btn btn-secondary"> Edit</button>
        </td>
        <td>
            <button className ="btn btn-accent">Delete</button>
        </td>
      </tr>
    )

)}

    </tbody>
  </table>
</div>
    )
}