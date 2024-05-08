import React, { useEffect, useState } from 'react'
import axios from '../axios';
import './FeatureBanner.scss';

function FeatureBanner ({fetchUrl}) {
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

  console.log(featured);
  return (
    <div className='featureBannerWrapper'>
      <div className='feature1'>
        <img className='feature1img' src={featured?.imageUrl} alt=''></img>
      </div>
      <div className='feature2'>
      <img className='feature2img'src={featured?.imageUrl} alt=''></img>

      </div>
    </div>
  )
}

export default FeatureBanner