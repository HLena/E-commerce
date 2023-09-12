import { useEffect, useState } from 'react';

export const useFirestore = (queryFunction, filter = '') => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    useEffect(() => {
        const fetchData = async () => {
        try {

            const response = await queryFunction(filter);

            setState({
                ...state,
                data: response,
                isLoading: false
            })
        } catch (error) {
            setState({
                ...state,
                isLoading: false,
                error
            })
        }
        };

        fetchData();
  }, [queryFunction, filter]);

  return { 
    ...state
   };
}

