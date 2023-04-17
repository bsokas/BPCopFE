export const formatDateValue = (value: string) => {
    const asDate = new Date(value)
    return `${asDate.getMonth() + 1}/${asDate.getDate()}/${asDate.getFullYear()}`
}