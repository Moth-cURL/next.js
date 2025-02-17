'use client'

import { use } from 'react'
import { photos } from "../../../data";

export default function PhotoPage({ params }) {
  const resolvedParams = use(params)
  const photo = photos.find((p) => p.id === resolvedParams.id);
  return (
    <div>
      <h1>照片页面 {resolvedParams.id}</h1>
      <img className="block w-1/4 mx-auto mt-10" src={photo.src} />
    </div>
  );
}