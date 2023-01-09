export function convertDate(data: string | null): Date {
    const arrayData = data != null ? data?.split("/") : undefined
    const dataConvertida = arrayData != undefined ? new Date(Number(arrayData[2]), (Number(arrayData[1]) - 1), Number(arrayData[0])) : new Date();
    return dataConvertida;
}