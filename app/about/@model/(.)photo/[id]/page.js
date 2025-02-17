"use client"

import { use } from 'react'
import { photos } from "../../../../data";

export default function PhotoModal({ params }) {
  const resolvedParams = use(params)
  const photo = photos.find((p) => p.id === resolvedParams.id)
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full mx-4">
      <h2 className="text-2xl font-bold mb-4">照片 {resolvedParams.id}</h2>
      <div className="flex h-60 justify-center items-center fixed bottom-0 bg-slate-300 w-full">
        <img className="w-52" src={photo.src} />
      </div>
    </div>
  )
}
