import { createClient } from '@/utils/supabase/server'
import { UpdateOrg } from './components/UpdateOrgForm';


async function OrganizationPage(){

    const supabase = createClient()

    let { data: organizations, error } = await supabase
    .from("organizations")
    .select("*");


    return <> 
    
    <p> Organization Page</p>


    <ul>
        {organizations?.map((org) => (
          <li key={org.id}>{org.name} - {org.address} - {org.city} - {org.state_region} <UpdateOrg organization={org}/> </li>
        ))}
      </ul>
    
    </>
}

export default OrganizationPage

export const cache = 'no-store'; // Prevent caching


