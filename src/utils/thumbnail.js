export const getThumb = item => item?.thumbnail?.path + '.' + item?.thumbnail?.extension
export const filterItemWithThumb = item => !item?.thumbnail?.path?.includes('image_not_available')