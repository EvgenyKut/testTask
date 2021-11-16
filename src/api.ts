export const loginFunction=async(email:string,password:string)=>{
    const data = {email:email,password:password}
    try {
        const response = await fetch('https://reqres.in/api/login', {
          method: 'POST', 
          body: JSON.stringify(data), 
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const json = await response.json();
        return JSON.stringify(json)
      } catch (error) {
       return JSON.stringify(error)
      }
}
