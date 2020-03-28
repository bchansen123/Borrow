import axios from "axios";

export default {
    getInventory: function(user) {
        return axios.get("/api/inventory/" + user);
    }
}