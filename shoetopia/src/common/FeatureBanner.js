import React, { useEffect, useState } from 'react'

const FeatureBanner = () => {
  const [featured, setFeatured] = useState();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data )
      setFeatured(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(shoes);
  return (
    <div className='featureBannerWrapper'>
      <div className='feature1'></div>
      <div className='feature2'></div>
    </div>
  )
}

export default FeatureBanner