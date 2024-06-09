// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const axiosPublic = useAxiosPublic();

    /* const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://bistro-boss-server-iota-virid.vercel.app/menus')
            .then(res => res.json())
            .then(data => {
                setMenus(data);
                setLoading(false);
            })
    }, []); */

    const { data: menus = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menus');
            return res.data;
        }
    })

    return [menus, loading, refetch];
}

export default useMenu;