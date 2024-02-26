class Api{
    static url = 'https://b7524y1ddk.execute-api.us-east-1.amazonaws.com/dev/api/v1';
    static token=JSON.parse(localStorage.getItem('token'));

    //get   donors
     static async getDonors(){
        const response = await fetch(`${this.url}/donors`);
        const data = await response.json();
        return data.data;
     }
   
     //get   donor
        static async getDonor(id){
            const response = await fetch(`${this.url}/donors/${id}`);
            const data = await response.json();
            return data.data;
        }

        //search donors
        static async searchDonors(area, blood_group){
            const data={
                Area:area,
                bloodGroup:blood_group
            }
           
            const response = await fetch(`${this.url}/donors/search`, {
            method: 'POST',
            body:JSON.stringify(data),
        }); 

               
            const resData = await response.json();
            console.log(resData);
            return resData.data;
        }

        //register   donor
        static async addDonor( data){
            const response = await fetch(`${this.url}/donors/register`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;
        }

        //get  users
        static async getUsers(){
            console.log(this.url);
            const response = await fetch(`${this.url}/users`);
            const data = await response.json();
            console.log(data);
            return data.data;
        }

        //get   user
        static async getUser(id){
            const response = await fetch(`${this.url}/users/${id}`);
            const data = await response.json();
            return data;
        }

        //delete   user
        static async deleteUser(id){
            const response = await fetch(`${this.url}/users/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                },
            });
            const resData = await response.json();
            return resData;
        }
        //delete   user
        static async deleteDonor(id){
            const response = await fetch(`${this.url}/donors/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
                },
            });
            const resData = await response.json();
            return resData;
        }


        //get   feedbacks
        static async getFeedbacks(){
            const response = await fetch(`${this.url}/feedback`);
            const data = await response.json();
            return data.data;
        }

        //get   feedback
        static async getFeedback(id){
            const response = await fetch(`${this.url}/feedback/${id}`);
            const data = await response.json();
            return data.data;
        }

        //send response
        static async sendMessage(data){
            const response = await fetch(`${this.url}/feedback/send`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;
        }

        //signup  user
        static async signupUser(data){
            const response = await fetch(`${this.url}/users/signup`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;
        }

        //login  user
        static async loginUser(data){
            const response = await fetch(`${this.url}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await response.json();
            return resData;
            

        }

}

export default Api;