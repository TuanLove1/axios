function Services() {
    

    this.fetchData = function () {
        return axios({
            url: "https://625bc0d0398f3bc782ae7df1.mockapi.io/api/users",
            method: "GET",
        });
    }

    this.deleteUserById = function (id) {
        return axios({
            url: `https://625bc0d0398f3bc782ae7df1.mockapi.io/api/users/${id}`,
            method: "DELETE",
        })
    }

    this.addUserByUsers = function(users){
        return axios({
            url: "https://625bc0d0398f3bc782ae7df1.mockapi.io/api/users",
            method:"POST",
            data:users,
        })
    }

    this.suaThongTinUsers = function(id){
        return axios({
            url: `https://625bc0d0398f3bc782ae7df1.mockapi.io/api/users/${id}`,
            method: "GET",
        });
    }
    
    this.updateThongTinUsers = function(user){
        return axios({
            url: `https://625bc0d0398f3bc782ae7df1.mockapi.io/api/users/${user.id}`,
            method: "PUT",
            data:user,
        });
    }
}