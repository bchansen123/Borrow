import axios from "axios";

export default {
    getInventory: function(user) {
        return axios.get("/api/inventory/" + user);
    },
    searchInventory: function(query) {
        console.log({params: {search: query}});
        return axios.post("/api/inventory/search/", {params: {search: query}});
        
    }
}