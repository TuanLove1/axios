function Services(){
    this.fetchData = () => axios({
        url:"https://625bc0d0398f3bc782ae7df1.mockapi.io/api/users",
        method: "GET",
    });
};