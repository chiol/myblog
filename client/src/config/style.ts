export const defaultSize: number = 1920 ;
export const responsiveSize = (size:number) => `
    ${Math.round( size *  window.innerWidth / defaultSize)}px
`
