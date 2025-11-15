import { useState } from 'react';

export default function Modalform( {isOpen, onClose, mode, onSubmit }) {

  const [rate, setRate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [status, setStatus] = useState(false);
  const handleStatusChange = (e) => {
    setStatus(e.target.value === 'Active');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  }
    return (


        <>
         {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
<dialog id="my_modal_3" className="modal" open={isOpen}>
  <div className="modal-box">
    <h3 className ="font-bold text-lg py-1"> {mode === 'edit' ? 'Edit client' : 'Client Details'}</h3>
    <form method="dialog" onSubmit = {handleSubmit}>
      {/* if there is a button in form, it will close the modal */}

      <label className="input input-bordered my-4 flex items-center gap-2">
      Name
      <input type="text" className="grow" placeholder="Daisy" value= {name} onChange={(e) => setName(e.target.value)}/>
      </label>
        <label className="input input-bordered my-4 flex items-center gap-2">
      Email
      <input type="text" className="grow" placeholder="Daisy" value= {email} onChange={(e) => setEmail(e.target.value)}/>
      </label>
        <label className="input input-bordered my-4 flex items-center gap-2">
      Job
      <input type="text" className="grow" placeholder="Daisy" value= {job} onChange={(e) => setJob(e.target.value)}/>
      </label>



      <div className="flex mb-4 justify-between mr-4"> 
        <label className="input input-bordered my-4  flex items-center gap-2">
      Rate
      <input type="number" className="grow" placeholder="Daisy" value= {rate} onChange={(e) => setRate(e.target.value)}/>
      </label>

      <select value = {status ? 'Active' : 'Inactive' }className = "select select-bordered w-full mt-4 max-w-xs" onChange={handleStatusChange}>
      <option disabled selected>Status</option>
      <option>Active</option>
      <option>Inactive</option>
      </select>
      </div>


      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
      <button className ="btn btn-success"> {mode === 'edit' ? 'Save Changes' : 'Add Client'}</button>
    </form>
    {/* <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
  </div>
</dialog>
        </>
    )
}