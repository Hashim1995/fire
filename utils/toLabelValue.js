export function convertArray(array) {
  return array?.map((item) => ({
    ...item,
    label: item.title || item?.nationality,
    value: item.id,
  }));
}
