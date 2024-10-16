import { createOrgAction } from "../action/action"

export function CreateOrg(){
     
    return <>
    
    
    <p>Create Form</p> 
    
    <form className="flex flex-col w-40 m-4">

    <label>name </label>
    <input className=" bg-black text-white"type="text" name="name"/>
    
    <label> address </label>
    <input className=" bg-black text-white"type="text" name="address" />

    <label>city</label>
    <input className=" bg-black text-white"type="text" name="city"/>
    
    <label>state</label>
    <input className=" bg-black text-white"type="text" name="state" />
    
    <label>zipcode</label>
    <input className=" bg-black text-white"type="number" name="zip_code" />

    <label>country</label>
    <input className=" bg-black text-white"type="text" name="country"/>
    
    <label>email</label>
    <input className=" bg-black text-white"type="text" name="email" />

    <label>phone number</label>
    <input className=" bg-black text-white"type="number" name="tel" />

    <button formAction={createOrgAction} >Submit</button>

    </form>
    
    
    </>
        
}


export function UpdateOrg(){
    return <> <p>Update </p> </>
}