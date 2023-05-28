const isNumeric = (n: number) => !Number.isNaN(parseFloat(n)) && Number.isFinite(n)

export const currencyFormatArs = (value: number) => {
  if (isNumeric(value)) {
    return `${Number(value).toLocaleString('es-AR', {
      style: 'currency',
      currencyDisplay: 'symbol',
      currency: 'ARS',
    })}`
  }
  return value
}
