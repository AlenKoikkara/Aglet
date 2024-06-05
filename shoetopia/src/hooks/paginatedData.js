import { useCallback, useState } from "react"

import axios from "../axios"
import requests from "../requests"
import { useSearchParams } from "react-router-dom"

export function usePaginatedTransactions() {
  const [products, setProducts] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchAll = useCallback(async () => {
    var paginatedObj = {
      limit: 20,
      category: 'Shoes',
      division: searchParams?.get('category'),
      productCount: 20,
      page: products === null ? 0 : products.nextPage
    }
    await axios.get(
      requests.fetchPaginated,
      {params: paginatedObj}
    ).then((res) => {
      setProducts((previousResponse) => {
        if (res === null || previousResponse === null) {
          return res.data
        }

        const updatedData = previousResponse.products.concat(res.data.products)
        return { products: updatedData, nextPage: res.data.nextPage }
      })
    }).catch((error) => {
      console.log(error.message)
    });
  }, [products, searchParams?.get('category')])

  const invalidateData = useCallback(() => {
    setProducts(null)
  }, [])
  return { data: products, fetchAll, invalidateData }
}
