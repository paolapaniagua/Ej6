class JPlaceholderApiServiceUsers{
    constructor(){
      this.apiUrl = 'https://jsonplaceholder.typicode.com/users';
    }
    
    async getAllUsers(){
      const response = await fetch('https://jsonplaceholder.typicode.com/users/');
      const data = await response.json();
      return data;
    }
    
    async getUseryId(id){
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      return data;
    }
  }
  
  const _instanceUser = new JPlaceholderApiServiceUsers();
  export default _instanceUser;