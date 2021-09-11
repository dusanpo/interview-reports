import React from 'react'

const Main = ({items}) =>{

  
       
        return(

            <div>
            {items.map(item =>(
            <div key = {item.id}>
              {item.name} - {item.email} - {item.education}
            </div>
 
            ))}
 
        </div>

        )
  
    

    
}
export default Main
