import React, { useEffect } from 'react'

export const useTitles = (title) => {
    useEffect(() => {
        document.title = `${title} / Movies`;
    });
  return  null;
}
