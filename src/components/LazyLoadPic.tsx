import React, { FC, useEffect, useRef, useState } from "react";
// @ts-ignore
import IntersectionObserver from 'intersection-observer-polyfill';
import envConfig from "../envConfig/envConfig"
interface interfaceProps {
  imageUrl: string
}
const errorPic = 'https://cdn.pixabay.com/photo/2020/03/01/21/12/cat-4894153_1280.jpg'
const LazyLoadPic: FC<interfaceProps> = ({ imageUrl }) => {
  const [realImgUrl, setRealImgUrl] = useState(`${envConfig.imgBaseUrl + imageUrl}`)
  const ObserverRef = useRef(new IntersectionObserver((entries: any) => {
    entries.forEach((entry: any) => {
      const { target, intersectionRatio } = entry

      if (intersectionRatio > 0) {
        const _target = target as HTMLImageElement
        _target.src = _target.dataset['src'] ?? ''
        _target.onload = () => {
          _target.style.opacity = '1'
        }
        _target.onerror = () => {
          _target.src = errorPic || ''
        }
        ObserverRef.current.observe(_target)
      }
    })
  }))


  useEffect(() => {
    const imgNode = document.querySelectorAll('.img') || []
    if (Array.length) {
      Array.from(imgNode).forEach((img) => {
        ObserverRef.current.observe(img)
      })
    }
    return () => {
      ObserverRef.current.disconnect()
    }
  }, [])
  return (<div>
    <img className="img" src={undefined} data-src={realImgUrl} alt="" />
  </div>)
}

export default LazyLoadPic