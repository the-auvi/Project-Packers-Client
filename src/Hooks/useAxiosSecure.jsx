import axios from 'axios';
import React from 'react'

const useAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: "https://dff5794c-3698-4de1-8334-ba068985722f.mock.pstmn.io/",
      });

      return [axiosSecure]
}

export default useAxiosSecure